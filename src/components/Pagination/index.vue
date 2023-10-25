<template>
	<div class="pagination-container">
		<el-pagination
			background
			:current-page.sync="pageCurrentProps"
			:page-sizes="pageSizes"
			:page-size.sync="pageSizeProps"
			layout="sizes, prev, slot, pager, next"
			:pager-count="5"
			:total="total"
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
		>
			<span v-if="defaultPageInfo" class="pageInput">{{ pageTotal > 0 ? pageCurrentProps : 0 }} / {{ pageTotal }}</span>
			<slot v-else name="page-info" class="pageInput"/>
		</el-pagination>
		<div class="pageJump hidden-md-and-up">
			<el-button class="btn-prev" icon="Download" :disabled="pageCurrentProps == 1 || pageTotal <= 0" @click="handleCurrentChange(1)" size="mini" />
			<el-button class="btn-next" icon="Download" :disabled="pageCurrentProps == pageTotal || pageTotal <= 0" @click="handleCurrentChange(pageTotal)" size="mini" />
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue';
import 'element-plus/theme-chalk/display.css';

const props = defineProps({
	total: {
		required: true,
		type: Number
	},
	pageCurrent: {
		required: true,
		type: Number,
	},
	pageSize: {
		required: true,
		type: Number,
	},
	pageSizes: {
		type: Array,
		default() {
			return [ 50, 100, 150, 200 ]
		}
	},
	defaultPageInfo: {
		type: Boolean,
		default: true
	}
});

const emit = defineEmits(['pageCurrent', 'pageSize', 'pagination']);

const pageCurrentProps = computed({
	get() {
		return props.pageCurrent
	},
	set(val) {
		emit('update:pageCurrent', val)
	}
});

const pageSizeProps = computed({
	get() {
		return props.pageSize
	},
	set(val) {
		emit('update:pageSize', val)
	}
});

const pageTotal = computed(() => {
	return Math.ceil(props.total / props.pageSize)
});

function handleSizeChange(val) {
	pageSizeProps.value = val;
	pageCurrentProps.value = 1;
	emit('pagination');
};

function handleCurrentChange(val) {
	pageCurrentProps.value =  val;
	emit('pagination');
};
</script>

<style lang="sass">
.pagination-container
	.el-pagination
		float: right
		margin-bottom: 20px
		.pageInput
			display: none
@media screen and (max-width: 991px)
	.pagination-container
		position: fixed
		width: 100%
		bottom: 0
		left: 0
		i
			font-size: 16px
		.el-pagination
			width: 100%
			text-align: center
			padding: 10px 0 !important
			background-color: rgba(#fff, 0.8)
			border: 1px solid #EBEEF5
			justify-content: center
			.el-pagination__sizes.is-first, .el-pager
				display: none
			.btn-prev, .btn-next
				width: 15%
				background-color: transparent !important
			.pageInput
				font-size: 16px
				width: 25%
				.pageBorder
					width: 50px
					margin-right: 10px
					.el-input__inner
						padding: 0
						height: 30px
		.pageJump
			position: absolute
			pointer-events: none
			width: 100%
			height: 100%
			bottom: 0
			left: 0
			padding: 10px 0
			.btn-prev, .btn-next
				width: 15%
				height: 30px
				pointer-events: auto
				background-color: transparent
				border: none
			.btn-prev 
				position: absolute
				left: 5%
				.el-icon
					transform: rotate(90deg)
			.btn-next 
				position: absolute
				right: 5%
				.el-icon
					transform: rotate(-90deg)
</style>
