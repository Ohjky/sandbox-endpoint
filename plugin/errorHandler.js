const { errorKeyDetail } = require('../constants/errors')
const errorHandler = (error, request, reply) => {
	const key = error.message
	const errorDetail = errorKeyDetail[key]
	if (errorDetail) {
		let statusCode
		errorDetail.statusCode ? statusCode = errorDetail.statusCode : statusCode = 400
		return reply.code(statusCode).send({
			statusCode,
			error: errorDetail.error,
			message: errorDetail.message
		})
	}
	return reply.send(error)
}

module.exports = errorHandler
