import Product from 'models/Product'
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
				const product = await Product.findById(id)
				res.status(200).json(product)
			} catch (err) {
				res.status(500).json(err)
			}
			break

		case 'POST':
			try {
				const product = await Product.create(req.body)
				res.status(200).json(product)
			} catch (err) {
				res.status(500).json(err)
			}
			break

		case 'PUT':
			try {
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
