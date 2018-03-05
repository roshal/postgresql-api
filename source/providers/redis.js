import {
	createClient as module__redis__create_client,
	print as module__redis__print,
} from 'redis'
//
const client = module__redis__create_client({
	url: process.env.REDIS_URL,
})
client.on('error', (error) => {
	console.error(error)
})
//	client.set(
//		'string index',
//		'string value',
//		module__redis__print,
//	)
//
export default client
