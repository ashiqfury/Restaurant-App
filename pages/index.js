import Featured from 'components/Featured'
import PizzaList from 'components/PizzaList'
import Head from 'next/head'
import styles from '@/s_module/Home.module.scss'
import axios from 'axios'
import { useState } from 'react'
import Add from 'components/Add'
import AddButton from 'components/AddButton'

export default function Home({ pizzalist, admin }) {
	const [close, setClose] = useState(true)
	return (
		<div className={styles.container}>
			<Head>
				<title>Restaurant Application</title>
				<meta name="description" content="Best Food Delivery Shop" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Featured />
			{admin && <AddButton setClose={setClose} />}
			<PizzaList pizzalist={pizzalist} />
			{!close && <Add setClose={setClose} />}
		</div>
	)
}

export const getServerSideProps = async ctx => {
	const myCookie = ctx.req?.cookies || ''
	let admin = false

	if (myCookie.token === process.env.TOKEN) {
		admin = true
	}

	const res = await axios.get('http://localhost:3000/api/products')
	return {
		props: {
			pizzalist: res.data,
			admin,
		},
	}
}
