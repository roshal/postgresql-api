import package__body_parser from 'body-parser'
import package__express from 'express'
//
import module__providers__postgresql from '../providers/postgresql'
//
const parser = package__body_parser.json()
const router = package__express.Router()
router.use(parser)
const route = router.route('')
route.all(
	async (request, response) => {
		try {
			const query = await module__providers__postgresql.query(
				'select now()',
			)
			response.send({
				status: 'success',
				data: query.rows[0].now,
				query,
			})
		} catch (error) {
			response.send({
				status: 'error',
				error,
			})
		}
	},
)
//
export default router
