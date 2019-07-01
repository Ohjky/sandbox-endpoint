const SCBService = require('./service')

class SCBController {
	static async generateQRCodePayment (req, reply) {
		const { order_amount: orderAmount } = req.body
		const responseQRCode = await SCBService.generateQRCodePayment({ orderAmount })
		reply.code(201).send(responseQRCode.data)
	}

}

module.exports = SCBController