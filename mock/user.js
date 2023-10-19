const loginIn = {
	url: '/mock/login',
	method: 'post',
	response: () => {
		return {
			statusCode: 20000,
			message: "successful",
			data: {
				uid: 117,
				username: 'Lance',
				token: "117.vogcBmp3k4ps"
			}
		}
	}
}

const loginOut = {
	url: '/mock/loginOut',
	method: 'post',
	response: () => {
		return {
			statusCode: 20000,
			message: "successful"
		}
	}
}

const getInfo = {
	url: '/mock/getInfo',
	method: 'get',
	response: () => {
		return {
			statusCode: 20000,
			message: "successful",
			data: {
				roles: [ "editor" ]
			}
		}
	}
}

export default [
	loginIn, loginOut, getInfo
]
