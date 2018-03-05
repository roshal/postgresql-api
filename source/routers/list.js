import package__body_parser from 'body-parser'
import package__express from 'express'
//
import * as module__resources__table__ from '../resources/table'
//
const parser = package__body_parser.json()
const router = package__express.Router()
router.use(parser)
const route = router.route('')
route.all(
	async (request, response) => {
		const dictionary = module__resources__table__
		try {
			if (request.body.method in dictionary) {
				const query = await dictionary[request.body.method]()
				response.json({
					status: 'success',
					data: query.rows,
					query,
				})
			} else {
				response.json({
					status: 'error',
					message: 'method is undefined',
				})
			}
		} catch (error) {
			response.json({
				status: 'error',
				error,
			})
		}
	},
)
//
export default router
