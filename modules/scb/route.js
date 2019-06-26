module.exports = async fastify => {
	fastify.get('/scb', async (req, reply) => {
		reply.code(200).send({ text: 'Hello world from scb' })
	})
}