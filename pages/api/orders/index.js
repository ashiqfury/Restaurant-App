import Order from 'models/Order'
import dbConnect from 'utils/mongo'

export default async function handler(req, res) {
	const { method } = req
	await dbConnect()

	if (method === 'GET') {
		try {
			const orders = await Order.find()
			res.status(200).json(orders)
		} catch (err) {
			res.status(500).json(err)
		}
	}
	if (method === 'POST') {
		const order = await Order.create(req.body)
		res.status(201).json(order)
		try {
		} catch (err) {
			res.status(500).json(err)
		}
	}
}
