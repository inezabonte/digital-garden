import { getTilDates, getTilByDate } from '../../lib/api'

export default async function handler(req, res) {
	const { date } = req.query

	if (date) {
		const data = await getTilByDate(date)
		return res.status(200).json(data)
	}

	const data = await getTilDates()

	return res.status(200).json(data)
}
