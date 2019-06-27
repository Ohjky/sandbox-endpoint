require('dotenv').config()
const fp = require('fastify-plugin')
const fastify = require('fastify')({ logger: true })
const authenticator = require('./plugin/authenticator')

fastify.register(fp(authenticator))
fastify.register(require('./modules/scb/route'), { prefix: '/api' })

const start = async () => {
	try {
		await fastify.listen(3000)
		fastify.log.info(`server listening on ${fastify.server.address().port}`)
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}
start()