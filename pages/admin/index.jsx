import styles from '@/s_module/Admin.module.scss'
import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'

const Index = ({ orders, products }) => {
	const [pizzaList, setPizzaList] = useState(products)
	const [orderList, setOrderList] = useState(orders)
	const status = ['Preparing', 'On the way', 'Delivered']

	const handleDelete = async id => {
		const res = await axios.delete(`http://localhost:3000/api/products/${id}`)
		setPizzaList(pizzaList.filter(pizza => pizza._id !== id))
	}

	const handleStatus = async id => {
		const item = orderList.filter(order => order._id === id)[0]
		const currentItemStatus = item.status

		const res = await axios.put(`http://localhost:3000/api/orders/${id}`, {
			status: currentItemStatus + 1,
		})
		setOrderList([res.data, ...orderList.filter(order => order._id !== id)])
	}

	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<h1 className={styles.title}>Products</h1>
				<table className={styles.table}>
					<thead>
						<tr className={styles.trTitle}>
							<th>Image</th>
							<th>Id</th>
							<th>Title</th>
							<th>Price</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{pizzaList.map(product => (
							<tr className={styles.tr} key={product._id}>
								<td>
									<Image src={product.img} alt="" width={50} height={50} objectFit="cover" />
								</td>
								<td>{product._id.slice(0, 5)}...</td>
								<td>{product.title}</td>
								<td>${product.prices[0]}</td>
								<td>
									<button className={styles.button}>Edit</button>
									<button className={styles.button} onClick={() => handleDelete(product._id)}>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className={styles.item}>
				<h1 className={styles.title}>Orders</h1>
				<table className={styles.table}>
					<thead>
						<tr className={styles.trTitle}>
							<th>Id</th>
							<th>Customer</th>
							<th>Total</th>
							<th>Payment</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{orderList.map(order => (
							<tr className={styles.tr} key={order._id}>
								<td>{order._id.slice(0, 5)}...</td>
								<td>{order.customer}</td>
								<td>${order.total}</td>
								<td>{order.method === 0 ? <span>Cash</span> : <span>Paid</span>}</td>
								<td>{status[order.status]}</td>
								<td>
									<button onClick={() => handleStatus(order._id)}>Next Stage</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Index

export const getServerSideProps = async ctx => {
	const myCookie = ctx.req?.cookies || ''

	if (myCookie.token !== process.env.TOKEN) {
		return {
			redirect: {
				destination: '/admin/login',
				permanent: false,
			},
		}
	}

	const productRes = await axios.get('http://localhost:3000/api/products')
	const orderRes = await axios.get('http://localhost:3000/api/orders')

	return {
		props: {
			orders: orderRes.data,
			products: productRes.data,
		},
	}
}
