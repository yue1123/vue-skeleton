<template>
	<view class="content">
		<br />
		<Skeleton :rowList="rowList"></Skeleton>
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
				rowList: [
					{
						colItems: [
							{
								style: {
									width: '60px',
									height: '60px'
								}
							},
							{
								style: {
									width: '100%'
								}
							}
						]
					},
					{
						colItems: [
							{
								style: {
									width: '60px',
									height: '60px'
								}
							},
							{
								style: {
									width: '100%'
								}
							}
						]
					},
					{
						colItems: [
							{
								style: {
									width: '60px',
									height: '60px'
								}
							},
							{
								style: {
									width: '100%'
								}
							}
						]
					},
					{
						colItems: 8
					}
				]
			}
		},
		onLoad() {},
		methods: {}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10px;
	}
</style>
