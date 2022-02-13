import Featured from 'components/Featured'
import PizzaList from 'components/PizzaList'
import Head from 'next/head'
import styles from '@/s_module/Home.module.scss'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Restaurant Application</title>
				<meta name="description" content="Best Food Delivery Shop" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Featured />
			<PizzaList />
		</div>
	)
}
