<template>
  <div class="navbar rowBC reset-el-dropdown">
    <div class="rowSC">
      <!--  切换sidebar按钮  -->
      <hamburger
        v-if="settings.menuPosition == 'left' && settings.showHamburger"
        :is-active="sidebar.opened"
        class="hamburger-container"
        @toggleClick="toggleSideBar"
      />
      <!--  面包屑导航  -->
      <breadcrumb class="breadcrumb-container" />
    </div>
    <!--导航标题-->
    <div v-if="settings.showNavbarTitle" class="heardCenterTitle">{{ settings.title }}</div>
    
		<!-- 下拉操作菜单 -->
    <RightMenu v-if="settings.menuPosition == 'left' && settings.ShowDropDown" />
  </div>
</template>

<script setup >
import Breadcrumb from './Breadcrumb.vue'
import Hamburger from './Hamburger.vue'
import RightMenu from './component/RightMenu.vue'
import { resetState } from '@/hooks/use-permission'
import { elMessage } from '@/hooks/use-element'
import { useBasicStore } from '@/store/basic'

const basicStore = useBasicStore()
const { settings, sidebar, setToggleSideBar } = basicStore
const toggleSideBar = () => {
  setToggleSideBar()
}
</script>

<style lang="scss" scoped>
.navbar {
  height: var(--nav-bar-height);
  overflow: hidden;
  position: relative;
  background: var(--nav-bar-background);
  box-shadow: var(--nav-bar-box-shadow);
  z-index: 1;
}

//logo
.avatar-wrapper {
  margin-top: 5px;
  position: relative;
  cursor: pointer;

  .user-avatar {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }

  .el-icon-caret-bottom {
    cursor: pointer;
    position: absolute;
    right: -20px;
    top: 25px;
    font-size: 12px;
  }
}

//center-title
.heardCenterTitle {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 46%;
  font-weight: 600;
  font-size: 20px;
  transform: translate(-50%, -50%);
}
</style>
