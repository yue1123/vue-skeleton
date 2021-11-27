# Skeleton

通用骨架屏加载,采用 flex 弹性布局,可根据配置灵活的自定义出大部分骨架屏布局,每一块都可以自定义 `css` 样式

tips:
配置项可能需要几分钟理解下,稍稍有点多(毕竟鱼和熊掌不可得兼嘛),可结合示例尝试自定义配置使用

# props

| 属性    | 说明                                          | 类型                       | 默认值  |
| ------- | --------------------------------------------- | -------------------------- | ------- |
| rowList | 骨架屏样式配置,详细配置见下面 rowList options | `Array<ISkeletonRowsItem>` | []      |
| bgColor | 骨架屏色块颜色                                | `String`                   | #f1f1f1 |
| loading | 是否是加载状态                                | `Boolean`                  | true    |
| animate | 是否开启动画                                  | `Boolean`                  | true    |

## ISkeletonRowsItem

| 属性          | 说明                                                                  | 类型                          | 默认值   |
| ------------- | --------------------------------------------------------------------- | ----------------------------- | -------- |
| align         | 水平对齐方式,同 flex 横向布局(justify-content) ,详情见[align](#align) | `String`                      | `left`   |
| verticalAlign | 垂直对齐方式,同 flex 的垂直布局(align-items)                          | `String`                      | `middle` |
| style         | css 样式                                                              | `Object`                      |          |
| colItems      | 一行中的列元素,可以是数字(会自动平反宽度),也可以每一项单独配置        | `Number` 或 `Array<colItems>` |          |

### align

| 属性    | 值                |
| ------- | ----------------- |
| left    | `justify-start`   |
| center  | `justify-center`  |
| right   | `justify-end`     |
| between | `justify-between` |
| around  | `justify-around`  |

### verticalAlign

| 属性   | 值             |
| ------ | -------------- |
| top    | `items-start`  |
| middle | `items-center` |
| bottom | `items-end`    |

flex布局不熟的的同学可以见[https://www.runoob.com/w3cnote/flex-grammar.html](https://www.runoob.com/w3cnote/flex-grammar.html)学习学习
## colItems

| 属性          | 说明           | 类型                   |
| ------------- | -------------- | ---------------------- |
| style         | css 样式       | `Object`               |
| shape         | 形状           | `String`               |
| childRowItems | 列元素的子元素 | `Array<childRowItems>` |

## childRowItems

| 属性  | 说明     | 类型     |
| ----- | -------- | -------- |
| style | css 样式 | `Object` |

# 使用示例

```vue
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
```

# 配置项 ts 类型,可参考

```ts
// 每一行的子行配置项
export type childRowItems = {
	style?: {
		[propName: string]: string | number
	}
}

// 每一行列元素配置项
export type colItems = {
	// css样式
	style?: {
		[propName: string]: string | number
	}
	// 形状
	shape?: 'circle' | 'round'
	// 列元素的子元素
	childRowItems?: Array<childRowItems>
}

export interface ISkeletonRowsItem {
	// 一行的对齐方式,同flex横向布局(justify-content)
	align?: 'left' | 'center' | 'right' | 'between' | 'around'
	// 垂直对齐方式,同flex的垂直布局(align-items)
	verticalAlign?: 'top' | 'middle' | 'bottom'
	// css 样式
	style?: {
		[propName: string]: string | number
	}
	// 一行中的列元素,可以是数字(会自动平反宽度),也可以每一项单独配置
	colItems?: Array<colItems> | number
}

export type ISkeletonRowList = Array<ISkeletonRowsItem>

// 示例配置
const style1: ISkeletonRowList = [
	{
		align: 'left',
		verticalAlign: 'top',
		colItems: [
			{
				style: {
					width: '120px',
					height: '120px',
					flexShrink: '0'
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
```
