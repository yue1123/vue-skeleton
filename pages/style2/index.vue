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
						align: 'center',
						colItems: [
							{
								style: {
									width: '60%'
								}
							}
						]
					},
					{
						align: 'center',
						style: {
							marginTop: '20px'
						},
						colItems: [
							{
								style: {
									width: '300px',
									height: '200px'
								}
							}
						]
					},
					{
						// buttons
						align: 'center',
						style: {
							marginTop: '60px'
						},
						colItems: [
							{
								style: {
									width: '120px',
									height: '40px'
								}
							},
							{
								style: {
									width: '120px',
									height: '40px'
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
