<template>
	<div id="Sidebar" :class="`reset-menu-style ${settings.menuPosition}`">
		<!--logo-->
		<Logo v-if="settings.sidebarLogo" :collapse="!sidebar.opened" />
		<!--router menu-->
		<el-scrollbar>
			<el-menu
				:class="`el-menu-${settings.menuPosition == 'top' ? 'horizontal' : 'vertical'}`"
				:collapse="!sidebar.opened"
				:ellipsis="false"
				:default-active="activeMenu"
				:collapse-transition="false"
				:mode="settings.menuPosition == 'top' ? 'horizontal' : 'vertical'"
			>
				<sidebar-item v-for="route in allRoutes" :key="route.path" :item="route" :base-path="route.path" />
			</el-menu>
		</el-scrollbar>

		<!-- 下拉操作菜单 -->
		<RightMenu v-if="settings.menuPosition == 'top' && settings.ShowDropDown" />
	</div>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia/dist/pinia'
import { useRoute } from 'vue-router'
import Logo from './Logo.vue'
import SidebarItem from './SidebarItem.vue'
import RightMenu from '../app-main/component/RightMenu.vue'
import { useBasicStore } from '@/store/basic'

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
</script>
<style lang="scss">
//fix open the item style issue
.el-menu-vertical {
	width: var(--side-bar-width);
}
.el-menu-horizontal {
	height: 54px;
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
</style>
