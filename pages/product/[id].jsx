import styles from '@/s_module/Product.module.scss'
import Image from 'next/image'
import { useState } from 'react'

const Product = () => {
	const [size, setSize] = useState(0)

	const pizza = {
		id: 1,
		img: '/img/pizza.png',
		name: 'CAMPAGNOLA',
		price: [19.9, 23.9, 27.9],
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, a!',
	}

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<div className={styles.imgContainer}>
					<Image src={pizza.img} alt="" objectFit="contain" layout="fill" />
				</div>
			</div>
			<div className={styles.right}>
				<h1 className={styles.title}>{pizza.name}</h1>
				<span className={styles.price}>${pizza.price[size]}</span>
				<p className={styles.desc}>{pizza.desc}</p>
				<h3 className={styles.choose}>Choose the size</h3>
				<div className={styles.sizes}>
					<button className={styles.size} onClick={() => setSize(0)}>
						<Image src="/img/size.png" layout="fill" alt="" />
						<span className={styles.number}>Small</span>
					</button>
					<button className={styles.size} onClick={() => setSize(1)}>
						<Image src="/img/size.png" layout="fill" alt="" />
						<span className={styles.number}>Medium</span>
					</button>
					<button className={styles.size} onClick={() => setSize(2)}>
						<Image src="/img/size.png" layout="fill" alt="" />
						<span className={styles.number}>Large</span>
					</button>
				</div>
				<h3 className={styles.choose}>Choose additional ingredients</h3>
				<div className={styles.ingredients}>
					<div className={styles.option}>
						<input type="checkbox" name="double" id="double" className={styles.checkbox} />
						<label htmlFor="double">Double ingredients</label>
					</div>
					<div className={styles.option}>
						<input type="checkbox" name="cheese" id="cheese" className={styles.checkbox} />
						<label htmlFor="cheese">Extra cheese</label>
					</div>
					<div className={styles.option}>
						<input type="checkbox" name="spicy" id="spicy" className={styles.checkbox} />
						<label htmlFor="spicy">Spicy sause</label>
					</div>
					<div className={styles.option}>
						<input type="checkbox" name="garlic" id="garlic" className={styles.checkbox} />
						<label htmlFor="garlic">Garlic sause</label>
					</div>
				</div>
				<div className={styles.add}>
					<input type="number" defaultValue={1} className={styles.quantity} />
					<button className={styles.button}>Add to Cart</button>
				</div>
			</div>
		</div>
	)
}

export default Product
