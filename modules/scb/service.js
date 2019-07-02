const axios = require('axios')

class SCBService {
	static async getAccessToken () {
		const body = {
			applicationKey: process.env.SCB_API_KEY,
			applicationSecret: process.env.SCB_API_SECRET_KEY
		}
		const headers = {
			'Content-Type': 'application/json',
			'resourceOwnerId': process.env.SCB_APPLICATION_ID,
			'requestUId': process.env.SCB_API_KEY,
			'accept-language': 'EN'
		}
		let response
		try {
			response = await axios
				.post(`${process.env.SCB_API_BASE_ENDPOINT}/v1/oauth/token`, body, {
					headers
				})
				.then(response => response.data)
		} catch (err) {
			throw new Error()
		}
		return response;
	}

	static async generateQRCodePayment ({ orderAmount }) {
		const responseAccessToken = await this.getAccessToken()
		
		const body = {
			qrType: 'PP',
			ppType: 'BILLERID',
			ppId: process.env.BILLER_ID,
			amount: orderAmount,
			ref1: 'REFERENCE1',
			ref2: 'REFERENCE2',
			ref3: 'REFERENCE3'
		}

		const headers = {
			'Content-Type': 'application/json',
			'resourceOwnerId': process.env.SCB_APPLICATION_ID,
			'requestUId': process.env.SCB_API_KEY,
			'authorization': `Bearer ${responseAccessToken.data.accessToken}`,
			'accept-language': 'EN'
		}

		let response
		try {
			response = await axios
				.post(`${process.env.SCB_API_BASE_ENDPOINT}/v1/payment/qrcode/create`, body, {
					headers
				})
				.then(response => response.data)
		} catch (err) {
			throw new Error()
		}
		return response;
	}
}

module.exports = SCBService
