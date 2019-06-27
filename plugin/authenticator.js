const JWT = require('fastify-jwt')
const authenticator = fastify => {
	fastify
		.register(JWT, {
			secret: process.env.JWT_SECRET
		})
		.decorate('requireAuthentication', async = (req, reply) => {
			try {
				await request.jwtVerify()
			} catch (err) {
				reply.send(err)
			}
		})
		.decorate('attachAthorize', async = (req, reply, next) => {
			try {
				if (request.headers.authorization)
					await request.jwtVerify()
			} catch (err) {
				next()
			}
		})
}

module.exports = authenticator
