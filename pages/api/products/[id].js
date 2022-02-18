import Product from 'models/Product'
import dbConnect from 'utils/mongo'

export default async function handler(req, res) {
	const {
		method,
		cookies,
		query: { id },
	} = req
	const token = cookies.token
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
			if (!token || token !== process.env.TOKEN) {
				return res.status(401).json('Not authenticated!')
			}
			try {
				const product = await Product.create(req.body)
				res.status(200).json(product)
			} catch (err) {
				res.status(500).json(err)
			}
			break

		case 'PUT':
			if (!token || token !== process.env.TOKEN) {
				return res.status(401).json('Not authenticated!')
			}
			try {
			} catch (err) {
				res.status(500).json(err)
			}
			break

		case 'DELETE':
			if (!token || token !== process.env.TOKEN) {
				return res.status(401).json('Not authenticated!')
			}
			try {
				await Product.findByIdAndDelete(id)
				res.status(200).json('Product has been deleted!')
			} catch (err) {
				res.status(500).json(err)
			}
			break

		default:
			break
	}
}
