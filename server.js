// Require the framework and instantiate it
require('dotenv').config()
const fastify = require('fastify')({ logger: true })

fastify.register(require('./modules/scb/route'), { prefix: '/api' })

// Run the server!
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