const SCBController = require('./controller')
module.exports = async fastify => {
	fastify.register(async fastify => {
		fastify.addHook('preHandler', fastify.requireAuthentication)
		fastify.post('/qrcode', SCBController.generateQRCodePayment)
	})
}