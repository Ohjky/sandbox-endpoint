const errorKey = {
	WRONG_CREDENTIAL: 'WRONG_CREDENTIAL'
}
const errorKeyDetail = {
	WRONG_CREDENTIAL: {
		statusCode: 401,
		error: 'WRONG CREDENTIAL',
		message: 'username or password does not exists'
	}
}
module.exports = {
	errorKey,
	errorKeyDetail
}