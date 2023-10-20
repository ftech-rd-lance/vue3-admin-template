<template>
	<div :class="[`sidebar-logo-container ${settings.menuPosition}`, { collapse: collapse }]">
		<transition name="sidebar-logo-fade">
			<!--  折叠显示   -->
			<router-link v-if="collapse" class="sidebar-logo-link" to="/">
				<!-- <svg-icon v-if="logo" :icon-class="logo" class="sidebar-logo" /> -->
				<img v-if="logo_s" :src="logo_s" class="sidebar-logo" />
				<h1 v-else class="sidebar-title">{{ title }}</h1>
			</router-link>
			<!--  正常显示   -->
			<router-link v-else class="sidebar-logo-link" to="/">
				<!-- <svg-icon v-if="logo" :icon-class="logo" class="sidebar-logo" /> -->
				<img v-if="logo" :src="logo" class="sidebar-logo" />
				<h1 class="sidebar-title">{{ title }}</h1>
			</router-link>
		</transition>
	</div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import { useBasicStore } from '@/store/basic'
// import SvgIcon from '@/icons/SvgIcon.vue'
const { settings } = useBasicStore()
defineProps({
	//是否折叠
	collapse: {
		type: Boolean,
		required: true
	}
})
const state = reactive({
	title: settings.title,
	//src/icons/common/sidebar-logo.svg
	logo: 'logo.png',
	logo_s: 'logo_s.png'
})
//export to page for use
const { title, logo, logo_s } = toRefs(state)
</script>

<style lang="scss">
//vue3.0 过度效果更改  enter-> enter-from   leave-> leave-from
.sidebar-logo-container {
	position: relative;
	height: 50px;
	line-height: 50px;
	padding-left: 14px;
	text-align: left;
	overflow: hidden;
	&.top {
		width: 240px;
	}
	&.left {
		width: 100%;
		// background: var(--sidebar-logo-background);
	}
	& .sidebar-logo-link {
		display: flex;
		align-items: center;
		height: 100%;
		width: 100%;
		& .sidebar-logo {
			// fill: currentColor;
			// color: var(--sidebar-logo-color);
			// width: var(--sidebar-logo-width);
			// height: var(--sidebar-logo-height);
			vertical-align: middle;
			// margin-right: 12px;
			width: 80px;
		}
		& .sidebar-title {
			// display: inline-block;
			margin: 0;
			padding: 5px 10px;
			color: var(--sidebar-logo-title-color);
			font-weight: 600;
			line-height: 20px;
			font-size: 14px;
			font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
			vertical-align: middle;
		}
	}
	&.collapse {
		.sidebar-logo {
			margin-right: 0;
			width: 30px;
		}
	}
}
</style>
