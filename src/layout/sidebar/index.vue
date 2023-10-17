<template>
  <div id="Sidebar" :class="`reset-menu-style ${settings.menuPosition}`">
    <!--logo-->
    <Logo v-if="settings.sidebarLogo" :collapse="!sidebar.opened" />
    <!--router menu-->
    <el-scrollbar>
      <el-menu
        :class="`el-menu-${settings.menuPosition == 'top' ? 'horizontal' : 'vertical'}`"
        :collapse="!sidebar.opened"
        :default-active="activeMenu"
        :collapse-transition="false"
        :mode="settings.menuPosition == 'top' ? 'horizontal' : 'vertical'"
      >
        <sidebar-item v-for="route in allRoutes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>

		<!-- 下拉操作菜单 -->
    <div v-if="settings.menuPosition == 'top' && settings.ShowDropDown" class="right-menu rowSC">
      <el-dropdown trigger="click" size="medium">
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
  </div>
</template>

<script setup lang="ts">
import { nextTick } from 'vue'
import { computed } from 'vue'
import { storeToRefs } from 'pinia/dist/pinia'
import { CaretBottom } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
import Logo from './Logo.vue'
import SidebarItem from './SidebarItem.vue'
import { useBasicStore } from '@/store/basic'
import { resetState } from '@/hooks/use-permission'
import { elMessage } from '@/hooks/use-element'
import { langTitle } from '@/hooks/use-common'
import { loginOutReq } from "@/api/user";

const { settings, allRoutes, sidebar } = storeToRefs(useBasicStore())
const routeInstance = useRoute()
const activeMenu = computed(() => {
  const { meta, path } = routeInstance
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})

//退出登录
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
<style lang="scss">
//fix open the item style issue
.el-menu-vertical {
  width: var(--side-bar-width);
	background-color: #1E5C5D !important;
}
.el-menu-horizontal {
	height: 54px;
	background-color: #1E5C5D !important;
}

.reset-menu-style {
  border-right: 1px solid var(--side-bar-border-right-color);

	&.top {
		display: flex;
		width: 100%;
		height: 54px;
		.el-scrollbar {
			flex: 8;
			.el-scrollbar__view {
				height: 100%;
				padding-bottom: 50px;
				.el-menu {
					display: flex;
				}
			}
		}
	}
}

//logo
.avatar-wrapper {
  position: relative;
  cursor: pointer;
	display: flex;
	align-items: flex-end;
	
  .user-avatar {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }

	svg {
		color: #ddd;
	}
}

//drop-down
.right-menu {
  cursor: pointer;
  margin-right: 10px;
  // background-color: var(--nav-bar-right-menu-background);
}
</style>
