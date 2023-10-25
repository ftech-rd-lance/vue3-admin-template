<template>
	<div class="login-container columnCC">
		<el-form ref="refLoginForm" class="login-form" :model="subForm" :rules="formRules">
			<div class="title-container">
				<!-- <h3 class="title text-center">{{ settings.title }}</h3> -->
				<h3 class="text-center">新北市政府工務局</h3>
				<h3 class="title text-center">土資場報送資訊系統</h3>
			</div>
			<el-form-item prop="username" :rules="formRules.isNotNull('usename不能為空')">
				<div class="rowSC">
					<span class="svg-container">
						<svg-icon icon-class="user" />
					</span>
					<el-input v-model="subForm.username" placeholder="用户名(admin)" />
					<!--占位-->
					<div class="show-pwd" />
				</div>
			</el-form-item>
			<!--<el-form-item prop="password" :rules="formRules.passwordValid">-->
			<el-form-item prop="password" :rules="formRules.isNotNull('密碼不能為空')">
				<div class="rowSC flex-1">
					<span class="svg-container">
						<svg-icon icon-class="password" />
					</span>
					<el-input
						:key="passwordType"
						ref="refPassword"
						v-model="subForm.password"
						:type="passwordType"
						name="password"
						placeholder="password(123456)"
						@keyup.enter="handleLogin"
					/>
					<span class="show-pwd" @click="showPwd">
						<svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
					</span>
				</div>
			</el-form-item>
			<div class="tip-message">{{ tipMessage }}</div>
			<el-button :loading="subLoading" type="primary" class="login-btn" size="default" @click.prevent="handleLogin">
				Login
			</el-button>
		</el-form>
		<div class="copyright-text">
			新北市政府工務局 版權所有
			<br>
			Copyright © Public Works Department, New Taipei City Government. All rights reserved.
		</div>
	</div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBasicStore } from '@/store/basic'
import { elMessage, useElement } from '@/hooks/use-element'
import { loginReq } from '@/api/user'

/* listen router change and set the query  */
const { settings } = useBasicStore()
//element valid
const formRules = useElement().formRules
//form
const subForm = reactive({
	username: 'panda',
	password: '123456'
})
const state = reactive({
	otherQuery: {},
	redirect: undefined
})
const route = useRoute()
const getOtherQuery = (query) => {
	return Object.keys(query).reduce((acc, cur) => {
		if (cur !== 'redirect') {
			acc[cur] = query[cur]
		}
		return acc
	}, {})
}
watch(
	() => route.query,
	(query) => {
		if (query) {
			state.redirect = query.redirect
			state.otherQuery = getOtherQuery(query)
		}
	},
	{ immediate: true }
)

/*
 *  login relative
 * */
const subLoading = ref(false)
//tip message
const tipMessage = ref('')
//sub form
const refLoginForm = ref(null)
const handleLogin = () => {
	refLoginForm.value.validate((valid) => {
		subLoading.value = true
		if (valid) loginFunc()
	})
}
const router = useRouter()
const basicStore = useBasicStore()

const loginFunc = () => {
	loginReq(subForm).then(({ data, statusCode, message }) => {
		const errCode = '500'
		if (errCode.includes(statusCode)) {
			elMessage(message, 'error')
			loginForm.code = ''
		} else {
			elMessage('登入成功')
			basicStore.setToken(`Bearer ${data?.token}`)
			router.push('/')
		}
	}).catch((err) => { 
		tipMessage.value = err?.message 
	}).finally(() => { subLoading.value = false })
}
/*
 *  password show or hidden
 * */
const passwordType = ref('password')
const refPassword = ref(null)
const showPwd = () => {
	if (passwordType.value === 'password') {
		passwordType.value = ''
	} else {
		passwordType.value = 'password'
	}
	nextTick(() => {
		refPassword.value.focus()
	})
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
	height: 100vh;
	width: 100%;
	background: no-repeat center -10% #ADE9D6 url(../../../public/assets/background/login_bg.png);
	.login-form {
		width: 360px;
		border: 2px solid white;
		border-radius: 10px;
		padding: 30px 15px;
		background-color: rgba(white, 0.7);
		margin-left: 0;
		@media screen and (min-width: 768px) {
			margin-left: 40%;
			margin-bottom: 5%;
		}
	}
	.title-container {
		.title {
			font-size: 24px;
			color: #2B7C80;
			margin: 4px auto 25px auto;
			text-align: center;
			font-weight: bold;
		}
	}
}

.svg-container {
	padding-left: 6px;
	color: white;
	text-align: center;
	width: 30px;
}

//错误提示信息
.tip-message {
	color: #e4393c;
	height: 30px;
	margin-top: -12px;
	font-size: 12px;
}

//登录按钮
.login-btn {
	width: 100%;
	margin-bottom: 30px;
}
.show-pwd {
	width: 50px;
	font-size: 16px;
	color: white;
	cursor: pointer;
	text-align: center;
}
.copyright-text {
	position: absolute;
	bottom: 5%;
	text-align: center;
}
</style>

<style lang="scss">
//css 样式重置 增加个前缀避免全局污染
.login-container {
	.el-input__wrapper {
		background-color: transparent;
		box-shadow: none;
	}
	.el-form-item {
		border: 1px solid rgba(255, 255, 255, 0.1);
		background: rgba(0, 0, 0, 0.1);
		border-radius: 5px;
		color: #454545;
	}
	.el-input input {
		background: transparent;
		border: 0px;
		-webkit-appearance: none;
		border-radius: 0px;
		padding: 10px 5px 10px 15px;
		color: #fff;
		height: 42px; //此处调整item的高度
		caret-color: #fff;
	}
	//hiden the input border
	.el-input__inner {
		box-shadow: none !important;
	}
}
</style>
