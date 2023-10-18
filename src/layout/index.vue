<template>
  <div :class="classObj" class="layout-wrapper">
    <!--left side-->
    <Sidebar v-if="settings.showMenu" :class="`sidebar-container ${settings.menuPosition}`" />
    <!--right container-->
    <div :class="`main-container ${settings.menuPosition}`">
      <Navbar v-if="settings.showTopNavbar" />
      <TagsView v-if="settings.showTagsView" />
      <AppMain />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import Sidebar from './sidebar/index.vue'
import AppMain from './app-main/index.vue'
import Navbar from './app-main/Navbar.vue'
import TagsView from './app-main/TagsView.vue'
import { useBasicStore } from '@/store/basic'
import { resizeHandler } from '@/hooks/use-layout'
const { sidebar, settings } = useBasicStore()
const classObj = computed(() => {
  return {
    closeSidebar: !sidebar.opened,
    hideSidebar: !settings.showMenu
  }
})
if(settings.menuPosition == 'left') resizeHandler()
</script>

<style lang="scss" scoped>
.main-container {
  transition: margin-left var(--sideBar-switch-duration);
  position: relative;
	&.top {
		min-height: calc(100vh - 54px);
		margin-top: 54px;
	}
	&.left {
		min-height: 100%;
		margin-left: var(--side-bar-width);
	}
}
.sidebar-container {
  transition: width var(--sideBar-switch-duration);
  background-color: var(--el-menu-bg-color);
  position: fixed;
  font-size: 0;
	top: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  border-right: 0.5px solid var(--side-bar-border-right-color);
	&.top {
		width: 100% !important;
		height: 54px;
		right: 0;
	}
	&.left {
		width: var(--side-bar-width) !important;
		height: 100%;
		bottom: 0;
	}
}
.closeSidebar {
  .sidebar-container {
    width: 54px !important;
  }
  .main-container {
    margin-left: 54px !important;
  }
}
.hideSidebar {
  .sidebar-container {
    width: 0 !important;
  }
  .main-container {
    margin-left: 0;
		margin-top: 0;
  }
}
</style>
