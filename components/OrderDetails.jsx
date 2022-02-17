import styles from '@/s_module/OrderDetails.module.scss'
import { useState } from 'react'

const OrderDetails = ({ total, createOrder }) => {
	const [customer, setCustomer] = useState('')
	const [address, setAddress] = useState('')

	const handleClick = () => {
		createOrder({ customer, address, total, method: 0 })
	}

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>You will pay $12 after delivery.</h1>
				<div className={styles.item}>
					<label htmlFor="" className={styles.label}>
						Name Surname
					</label>
					<input
						type="text"
						className={styles.input}
						placeholder="Ashiq Fury"
						onChange={e => setCustomer(e.target.value)}
					/>
				</div>
				<div className={styles.item}>
					<label htmlFor="" className={styles.label}>
						Phone Number
					</label>
					<input
						type="text"
						className={styles.input}
						placeholder="+1 234 567 890"
						// onChange={e => setCustomer(e.target.value)}
					/>
				</div>
				<div className={styles.item}>
					<label htmlFor="" className={styles.label}>
						Address
					</label>
					<textarea
						row={5}
						type="text"
						className={styles.textarea}
						placeholder="Elson St. 505 IN"
						onChange={e => setAddress(e.target.value)}
					></textarea>
				</div>
				<button className={styles.button} onClick={handleClick}>
					Order
				</button>
			</div>
		</div>
	)
}

export default OrderDetails
