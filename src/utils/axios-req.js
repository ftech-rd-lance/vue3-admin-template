import axios from 'axios'
import { ElLoading, ElMessage, ElMessageBox } from 'element-plus'
import { useBasicStore } from '@/store/basic'

//使用axios.create()创建一个axios请求实例
const service = axios.create()
let loadingInstance = null //loading实例
let tempReqUrlSave = ''
let authorTipDoor = true

const noAuthDill = () => {
	authorTipDoor = false
	ElMessageBox.confirm('請重新登入', {
		confirmButtonText: '重新登入',
		closeOnClickModal: false,
		showCancelButton: false,
		showClose: false,
		type: 'warning'
	}).then(() => {
		useBasicStore().resetStateAndToLogin()
		authorTipDoor = true
	})
}

//请求前拦截
service.interceptors.request.use(
	(req) => {
		const { token, axiosPromiseArr } = useBasicStore()
		//axiosPromiseArr收集请求地址,用于取消请求
		req.cancelToken = new axios.CancelToken((cancel) => {
			tempReqUrlSave = req.url
			axiosPromiseArr.push({
				url: req.url,
				cancel
			})
		})

		//设置token到header
		if (token) req.headers['Authorization'] = token
		//如果req.method给get 请求参数设置为 ?name=xxx
		if ('get'.includes(req.method?.toLowerCase()) && !req.params) req.params = req.data

		//req loading
		// @ts-ignore
		if (req.reqLoading ?? true) {
			loadingInstance = ElLoading.service({
				lock: true,
				fullscreen: true,
				// spinner: 'CircleCheck',
				text: '資料載入中...',
				background: 'rgba(0, 0, 0, 0.1)'
			})
		}
		return req
	},
	(err) => {
		//发送请求失败
		Promise.reject(err)
	}
)
//请求后拦截
service.interceptors.response.use(
	(res) => {
		//取消请求
		useBasicStore().remotePromiseArrByReqUrl(tempReqUrlSave)
		if (loadingInstance) {
			loadingInstance && loadingInstance.close()
		}
		//download file
		if (res.data?.type?.includes("sheet")) {
			return res
		}
		const { statusCode, message } = res.data
		const successCode = [0, 200, 20000]
		const noAuthCode = [401, 403]
		if (successCode.includes(statusCode)) {
			return res.data
		} else {
			//authorTipDoor 防止多个请求 多次alter
			if (authorTipDoor) {
				if (noAuthCode.includes(statusCode)) {
					noAuthDill()
				} else {
					// @ts-ignore
					if (!res.config?.isNotTipErrorMsg) {
						ElMessage.error({
							message,
							duration: 2 * 1000
						})
					} else {
						return res
					}
					return Promise.reject(message)
				}
			}
		}
	},
	//响应报错
	(err) => {
		//取消请求
		useBasicStore().remotePromiseArrByReqUrl(tempReqUrlSave)
		if (loadingInstance) {
			loadingInstance && loadingInstance.close()
		}

		if (error && error.response) {
			switch (error.response.status) {
				case 400:
					error.message = '請求錯誤'
					break
				case 401:
					error.message = '驗證失敗'
					break
				case 403:
					error.message = '拒絕訪問'
					break
				case 404:
					error.message = `請求位址錯誤: ${error.response.config.url}`
					break
				case 406:
					error.message = '無法接受請求'
					break
				case 408:
					error.message = '請求超時'
					break
				case 500:
					error.message = '伺服器錯誤'
					break
				case 502:
					error.message = '網路錯誤'
					break
				case 503:
					error.message = '服務不可用'
					break
				case 504:
					error.message = '網路超時'
					break
				default: error.message = `連接錯誤`
			}
		} else {
			error.message = `連接錯誤`
		}

		ElMessage.error({
			message: error.message,
			duration: 2 * 1000
		})
		return Promise.reject(err)
	}
)
//导出service实例给页面调用 , config->页面的配置
export default function axiosReq(config) {
	return service({
		baseURL: import.meta.env.VITE_APP_BASE_URL,
		timeout: 8000,
		...config
	})
}
