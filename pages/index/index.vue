<template>
	<view class="content">
		<button type="primary" v-for="(urlItem, index) in urlList" :key="index" @click="handleNavigateTo(urlItem.url)">
			{{ urlItem.title }}
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				urlList: [
					{
						title: '样式1(使用插槽)',
						url: '/pages/style1/index'
					},
					{
						title: '样式2',
						url: '/pages/style2/index'
					},
					{
						title: '样式3',
						url: '/pages/style3/index'
					},
					{
						title: '样式4',
						url: '/pages/style4/index'
					},
					{
						title: '自定义颜色',
						url: '/pages/style5/index'
					}
				]
			}
		},
		methods: {
			handleNavigateTo(url) {
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10px;

		button {
			min-width: 50%;
			margin-top: 15px;
		}
	}
</style>
