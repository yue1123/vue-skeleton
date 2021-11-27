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
						align: 'around',
						colItems: [
							{
								shape: 'circle',
								style: {
									width: '40px',
									height: '40px',
									'flex-shrink': 0
								}
							},
							{
								shape: 'circle',
								style: {
									width: '40px',
									height: '40px',
									'flex-shrink': 0
								}
							},
							{
								shape: 'circle',
								style: {
									width: '40px',
									height: '40px',
									'flex-shrink': 0
								}
							}
						]
					},
					{
						align: 'around',
						colItems: [
							{
								style: {
									width: '20%'
								}
							},
							{
								style: {
									width: '20%'
								}
							},
							{
								style: {
									width: '20%'
								}
							}
						]
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
