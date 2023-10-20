import request from '@/utils/axios-req'
import settings from '@/settings'

//获取用户信息
export const userInfoReq = () => {
	return new Promise((resolve) => {
		const reqConfig = {
			url: '/mock/getInfo',
			data: { platformId: settings.platformId },
			method: 'get'
		}
		request(reqConfig).then((res) => {
			resolve(res?.data)
		}).catch(err => console.log(err))
	})
}

//登录
export const loginReq = (params) => {
	return request({
    url: '/mock/login',
    params,
    method: 'post'
  })
}

//退出登录
export const loginOutReq = () => {
	return request({
    url: '/mock/loginOut',
    method: 'post'
  })
}
