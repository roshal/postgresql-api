import package__express from 'express'
import package__morgan from 'morgan'
//
import module__routers__auth from './routers/auth'
import module__routers__list from './routers/list'
import module__routers__time from './routers/time'
//
const server = package__express()
server.enable('case sensitive routing')
server.enable('strict routing')
server.set('json spaces', '\t')
const logger = package__morgan('combined')
server.use(logger)
server.use('/api/auth/', module__routers__auth)
server.use('/api/list/', module__routers__list)
server.use('/api/time/', module__routers__time)
const port = process.env.PORT
server.listen(port, () => {
	console.log('listening', port)
})
