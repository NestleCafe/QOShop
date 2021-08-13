<template>
	<view>
		<view class="goods_list">
			<view class="goods_item" v-for="item in goods" :key="item.goods_id">
				<image :src="item.goods_small_logo"></image>
				<view class="price">￥{{item.goods_price}}</view>
				<view class="name">{{item.goods_name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ["goods"],
		name: "goodsList",
		data() {
			return {

			};
		}
	}
</script>
<style lang="scss">
	.goods_list {
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.goods_item {
			background: white;
			width: 355rpx;
			height: 530rpx;
			margin: 10rpx 0;
			padding: 15rpx;
			box-sizing: border-box;
			overflow: hidden;
			text-overflow: ellipsis;

			image {
				display: block;
				margin: auto;
				width: 355rpx;
				height: 355rpx;
			}

			.price {
				color: $theme-color;
				padding: 0;
				margin: 0;
				font-size: 36rpx;

			}

			.name {
				font-size: 28rpx;
				line-height: 50rpx;
				padding-bottom: 15rpx;
			}
		}
	}
</style>
