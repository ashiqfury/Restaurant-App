import styles from '@/s_module/PizzaCard.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const PizzaCard = ({ pizza }) => {
	return (
		<div className={styles.container}>
			<Link href={`/product/${pizza._id}`} passHref>
				<Image src={pizza.img} alt="" width={500} height={500} />
			</Link>
			<h1 className={styles.title}>{pizza.title}</h1>
			<span className={styles.price}>${pizza.prices[0]}</span>
			<p className={styles.desc}>{pizza.desc}</p>
		</div>
	)
}

export default PizzaCard
