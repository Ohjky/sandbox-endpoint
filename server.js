require('dotenv').config()
const fp = require('fastify-plugin')
const fastify = require('fastify')({ logger: true })
const authenticator = require('./plugin/authenticator')
const errorHandler = require('./plugin/errorHandler')
fastify
	.register(require('fastify-cors'), { 
		origin: true
  	})
	.register(fp(authenticator))
	.register(require('./modules/scb/route'), { prefix: '/api/scb' })
	.register(require('./modules/auth/route'), { prefix: '/api' })
	.setErrorHandler(errorHandler)
	.listen(process.env.PORT)
	.then((address) => console.log(`server listening on ${address}`))
	.catch(err => {
		console.log(`Error starting server: ${err}`)
		process.exit(1)
	})