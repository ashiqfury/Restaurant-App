import Featured from 'components/Featured'
import PizzaList from 'components/PizzaList'
import Head from 'next/head'
import styles from '@/s_module/Home.module.scss'
import axios from 'axios'

export default function Home({ pizzalist }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Restaurant Application</title>
				<meta name="description" content="Best Food Delivery Shop" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Featured />
			<PizzaList pizzalist={pizzalist} />
		</div>
	)
}

export const getServerSideProps = async () => {
	const res = await axios.get('http://localhost:3000/api/products')
	return {
		props: {
			pizzalist: res.data,
		},
	}
}
