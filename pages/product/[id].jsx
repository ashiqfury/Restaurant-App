import styles from '@/s_module/Product.module.scss'
import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from 'redux/cartSlice'

const Product = ({ pizza }) => {
	const [size, setSize] = useState(0)
	const [price, setPrice] = useState(pizza.prices[0])
	const [extras, setExtras] = useState([])
	const [quantity, setQuantity] = useState(1)

	const dispatch = useDispatch()

	const handlePrice = number => {
		setPrice(price + number)
	}
	const handleSize = sizeIndex => {
		const difference = pizza.prices[sizeIndex] - pizza.prices[size]
		setSize(sizeIndex)
		handlePrice(difference)
	}
	const handleChange = (e, option) => {
		const checked = e.target.checked

		if (checked) {
			handlePrice(option.price)
			setExtras(prev => [...prev, option])
		} else {
			handlePrice(-option.price)
			setExtras(extras.filter(extra => extra._id !== option._id))
		}
	}

	const handleClick = () => {
		dispatch(addProduct({ ...pizza, extras, price, quantity }))
	}

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<div className={styles.imgContainer}>
					<Image src={pizza.img} alt="" objectFit="contain" layout="fill" />
				</div>
			</div>
			<div className={styles.right}>
				<h1 className={styles.title}>{pizza.title}</h1>
				<span className={styles.price}>${price}</span>
				<p className={styles.desc}>{pizza.desc}</p>
				<h3 className={styles.choose}>Choose the size</h3>
				<div className={styles.sizes}>
					<button className={styles.size} onClick={() => handleSize(0)}>
						<Image src="/img/size.png" layout="fill" alt="" />
						<span className={styles.number}>Small</span>
					</button>
					<button className={styles.size} onClick={() => handleSize(1)}>
						<Image src="/img/size.png" layout="fill" alt="" />
						<span className={styles.number}>Medium</span>
					</button>
					<button className={styles.size} onClick={() => handleSize(2)}>
						<Image src="/img/size.png" layout="fill" alt="" />
						<span className={styles.number}>Large</span>
					</button>
				</div>
				<h3 className={styles.choose}>Choose additional ingredients</h3>
				<div className={styles.ingredients}>
					{pizza.extraOptions.map(option => (
						<div className={styles.option} key={option._id}>
							<input
								type="checkbox"
								name={option.text}
								id={option.text}
								className={styles.checkbox}
								onClick={e => handleChange(e, option)}
							/>
							<label htmlFor="double">{option.text}</label>
						</div>
					))}
				</div>
				<div className={styles.add}>
					<input
						type="number"
						onChange={e => setQuantity(e.target.value)}
						defaultValue={1}
						className={styles.quantity}
					/>
					<button className={styles.button} onClick={handleClick}>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	)
}

export default Product

export const getServerSideProps = async ({ params }) => {
	const res = await axios.get(`http://localhost:3000/api/products/${params.id}`)
	return {
		props: {
			pizza: res.data,
		},
	}
}
