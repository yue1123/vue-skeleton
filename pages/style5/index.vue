<template>
	<view class="content">
		<br />
		<Skeleton :rowList="rowList" bgColor="#ccc"></Skeleton>
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
						verticalAlign: 'top',
						style: { border: '5px solid #f1f1f1', padding: '10px' },
						colItems: [
							{
								style: {
									width: '120px',
									'flex-shrink': 0
								},
								childRowItems: [
									{
										style: {
											width: '100%'
										}
									},
									{
										style: {
											width: '100%',
											height: '14px'
										}
									},
									{
										style: {
											width: '80%',
											height: '14px'
										}
									},
									{
										style: {
											width: '80%',
											height: '14px'
										}
									}
								]
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
											width: '100%',
											height: '150px'
										}
									}
								]
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
