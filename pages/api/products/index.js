import Product from 'models/Product'
import dbConnect from 'utils/mongo'

export default async function handler(req, res) {
	const { method } = req
	await dbConnect()

	if (method === 'GET') {
		try {
			const products = await Product.find()
			res.status(200).json(products)
		} catch (err) {
			res.status(500).json(err)
		}
	}
	if (method === 'POST') {
		const product = await Product.create(req.body)
		res.status(200).json(product)
		try {
		} catch (err) {
			res.status(500).json(err)
		}
	}
}
