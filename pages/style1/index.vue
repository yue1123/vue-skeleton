<template>
	<view class="content">
		<br />
		<Skeleton :rowList="rowList" :loading="loading">
			<view>内容</view>
			<view>内容</view>
			<view>内容</view>
			<view>内容</view>
			<view>内容</view>
			<view>内容</view>
			<view>内容</view>
		</Skeleton>
		<br />
		<button @click="handleShowContent" type="primary" size="mini">显示</button>
	</view>
</template>

<script>
	import Skeleton from '@/components/Skeleton/index.vue'
	export default {
		components: {
			Skeleton
		},
		data() {
			return {
				loading: true,
				rowList: [
					{
						align: 'left',
						verticalAlign: 'top',
						colItems: [
							{
								style: {
									width: '120px',
									height: '120px',
									'flex-shrink': 0
								}
							},
							{
								style: {
									width: '100%'
								},
								childRowItems: [
									{
										style: {
											width: '60%'
										}
									},
									{
										style: {
											width: '100%'
										}
									},
									{
										style: {
											width: '80%'
										}
									}
								]
							}
						]
					},
					{
						align: 'right',
						colItems: 5
					}
				]
			}
		},
		methods: {
			handleShowContent() {
				this.loading = !this.loading
			}
		}
	}
</script>

<style>
	.content {
		padding: 10px;
	}
</style>
