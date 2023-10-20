<template>
	<div class="right-menu rowSC">
		<el-dropdown trigger="click" size="medium" popper-class="right-menu-content">
			<div class="avatar-wrapper">
				<img src="https://github.jzfai.top/file/images/nav-right-logo.gif" class="user-avatar" />
				<CaretBottom style="width: 1em; height: 1em; margin-left: 4px" />
			</div>
			<template #dropdown>
				<el-dropdown-menu>
					<router-link to="/">
						<el-dropdown-item>{{ langTitle('Home') }}</el-dropdown-item>
					</router-link>
					<el-dropdown-item>修改密碼</el-dropdown-item>
					<el-dropdown-item divided @click="loginOut">{{ langTitle('login out') }}</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
	</div>
</template>

<script setup>
import { nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { resetState } from '@/hooks/use-permission'
import { elMessage } from '@/hooks/use-element'
import { langTitle } from '@/hooks/use-common'
import { loginOutReq } from "@/api/user";

// 登出
const router = useRouter()
const loginOut = () => {
  loginOutReq().then(()=>{
    elMessage('登出成功')
    router.push(`/login?redirect=/`)
    nextTick(() => {
      resetState()
    })
  })
}

</script>

<style lang="sass" scoped>
.right-menu 
	cursor: pointer
	margin-right: 40px
	// background-color: var(--nav-bar-right-menu-background)
</style>