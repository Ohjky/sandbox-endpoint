const JWT = require('fastify-jwt')
const authenticator = async fastify => {
	fastify
		.register(JWT, {
			secret: process.env.JWT_SECRET,
			sign: {
				expiresIn: process.env.JWT_EXPIRES_IN
			}
		})
		.decorate('requireAuthentication', async (req, reply) => {
			try {
				await req.jwtVerify()
			} catch (err) {
				reply.send(err)
			}
		})
		.decorate('attachAthorize', async (req, reply) => {
			if (req.headers.authorization)
				await req.jwtVerify()
		})
}

module.exports = authenticator
