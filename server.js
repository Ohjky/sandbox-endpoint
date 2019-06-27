require('dotenv').config()
const fp = require('fastify-plugin')
const fastify = require('fastify')({ logger: true })
const authenticator = require('./plugin/authenticator')

fastify.register(fp(authenticator))
fastify.register(require('./modules/scb/route'), { prefix: '/api' })
fastify.register(require('./modules/auth/route'), { prefix: '/api' })

fastify
.listen(3000)
.then((address) => console.log(`server listening on ${address}`))