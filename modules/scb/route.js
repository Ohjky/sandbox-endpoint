const SCBController = require('./controller')
module.exports = async fastify => {
	fastify
		.post('/qrcode', SCBController.generateQRCodePayment)
}