import Order from 'models/Order'
import dbConnect from 'utils/mongo'

export default async function handler(req, res) {
	const {
		method,
		query: { id },
	} = req
	await dbConnect()

	switch (method) {
		case 'GET':
			try {
				const order = await Order.findById(id)
				res.status(200).json(order)
			} catch (err) {
				res.status(500).json(err)
			}
			break

		case 'POST':
			try {
				const order = await Order.create(req.body)
				res.status(200).json(order)
			} catch (err) {
				res.status(500).json(err)
			}
			break

		case 'PUT':
			try {
				const order = await Order.findByIdAndUpdate(id, req.body, { new: true })
				res.status(200).json(order)
			} catch (err) {
				res.status(500).json(err)
			}
			break

		case 'DELETE':
			try {
			} catch (err) {
				res.status(500).json(err)
			}
			break

		default:
			break
	}
}
