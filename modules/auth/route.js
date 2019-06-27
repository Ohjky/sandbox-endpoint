module.exports = async fastify => {
	fastify.post('/login', async (req, reply) => {
		const payload = {
			userId: 1234
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