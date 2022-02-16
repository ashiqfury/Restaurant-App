import styles from '@/s_module/PizzaList.module.scss'
import PizzaCard from './PizzaCard'

const PizzaList = ({ pizzalist }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
			<p className={styles.desc}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid voluptatibus tempora
				illum, voluptate libero doloremque.
			</p>
			<div className={styles.wrapper}>
				{pizzalist.map(pizza => (
					<PizzaCard key={pizza._id} pizza={pizza} />
				))}
			</div>
		</div>
	)
}

export default PizzaList
