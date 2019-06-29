const { errorKey } = require('../../constants/errors') 
module.exports = async fastify => {
	fastify.post('/login', async (req, reply) => {
		const { username, password } = req.body
		if (!(username === process.env.USERNAME && password ===process.env.PASSWORD))
			throw new Error(errorKey.WRONG_CREDENTIAL)
		const payload = {
			userId: process.env.USER_ID
		}
		const token = fastify.jwt.sign({ payload })
		reply.code(200).send({ token })
	})
	fastify.register(async function (fastify) {
		fastify.addHook('preHandler', fastify.requireAuthentication)
		fastify.get('/me', async (req, reply) => {	
			reply.code(200).send({ user: req.user })
		})
	})
	
	fastify.register(async function (fastify) {
		fastify.addHook('preHandler', fastify.attachAthorize)
		fastify.get('/not-require', async (req, reply) => {
			reply.code(200).send({ user: req.user })
		})
	})
}