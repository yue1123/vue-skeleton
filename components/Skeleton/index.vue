<template>
	<div class="skeleton space-y-4" :class="{ animated: animate }" :style="`--color:${bgColor}`" v-if="loading">
		<div
			class="skeleton-row space-x-4"
			:class="[styleMaps[item.align || 'left'], styleMaps[item.verticalAlign || 'middle']]"
			v-for="(item, index) in rowList"
			:style="item.style || {}"
			:key="index"
		>
			<div
				class="skeleton-row-item space-y-4"
				v-for="(item1, index1) in item.colItems"
				:class="[item1.shape || '', item1.childRowItems ? 'no-height' : '']"
				:key="index1"
				:style="item1.style || { width: `${100 / item.colItems}%` }"
			>
				<template v-if="item1.childRowItems">
					<div
						class="skeleton-col-item"
						v-for="(item2, index2) in item1.childRowItems"
						:class="item2.shape || ''"
						:key="index2"
						:style="item2.style || {}"
					></div>
				</template>
			</div>
		</div>
	</div>
	<div v-else><slot></slot></div>
</template>

<script>
	export default {
		name: 'Skeleton',
		props: {
			bgColor: {
				type: String,
				default: '#f1f1f1'
			},
			rowList: {
				type: Array,
				default: () => []
			},
			loading: {
				type: Boolean,
				default: true
			},
			animate: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				styleMaps: {
					left: 'justify-start',
					center: 'justify-center',
					right: 'justify-end',
					between: 'justify-between',
					around: 'justify-around',
					top: 'items-start',
					middle: 'items-center',
					bottom: 'items-end'
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.skeleton {
		width: 100%;

		&.animated {
			animation: blink 1.2s ease-in-out infinite;
		}
		* {
			box-sizing: border-box;
		}
	}

	.skeleton-row {
		display: flex;
		width: 100%;
		align-content: space-between;
	}

	.skeleton-row-item,
	.skeleton-col-item {
		height: 26px;
		border-radius: 6rpx;
		display: inline-block;

		&:not(.no-height) {
			background: var(--color);
		}
		&.round {
			border-radius: 999px;
		}

		&.circle {
			border-radius: 50%;
		}
		&.no-height {
			height: auto;
		}
	}

	.space-x-4 > :not([hidden]) ~ :not([hidden]) {
		--tw-space-x-reverse: 0;
		margin-right: calc(1rem * var(--tw-space-x-reverse));
		margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
	}

	.space-y-4 > :not([hidden]) ~ :not([hidden]) {
		--tw-space-y-reverse: 0;
		margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
		margin-bottom: calc(1rem * var(--tw-space-y-reverse));
	}

	.justify-start {
		justify-content: flex-start;
	}

	.justify-end {
		justify-content: flex-end;
	}

	.justify-center {
		justify-content: center;
	}
	.justify-between {
		justify-content: space-between;
	}

	.justify-around {
		justify-content: space-around;
	}
	.items-start {
		align-items: flex-start;
	}

	.items-end {
		align-items: flex-end;
	}

	.items-center {
		align-items: center;
	}
	@keyframes blink {
		0% {
			opacity: 1;
		}

		50% {
			opacity: 0.6;
		}

		100% {
			opacity: 1;
		}
	}
</style>
