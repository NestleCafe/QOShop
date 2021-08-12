<template>
	<view class="home">
		<swiper indicator-dots circular autoplay interval="3000">
			<swiper-item v-for="item in swipers" :key="item.id"><image :src="item.image_src"></image></swiper-item>
		</swiper>

		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item">
				<view class="iconfont icon-ziyuan"></view>
				<text>超市</text>
			</view>
			<view class="nav_item">
				<view class="iconfont icon-guanyuwomen"></view>
				<text>联系我们</text>
			</view>
			<view class="nav_item">
				<view class="iconfont icon-tupian"></view>
				<text>社区图片</text>
			</view>
			<view class="nav_item">
				<view class="iconfont icon-shipin"></view>
				<text>学习视频</text>
			</view>
		</view>
		
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="title">推荐商品</view>
			<view class="goods_list">
				<view class="goods_item" v-for="item in goods" :key="item.goods_id">
					<image :src="item.goods_small_logo"></image>
					<view class="price">￥{{item.goods_price}}</view>
					<view class="name">{{item.goods_name}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			swipers: [],
			goods: []
		};
	},
	onLoad() {
		this.getSwipers()
		this.getHotGoods()
	},
	methods: {
		//获取轮播图数据
		async getSwipers() {
			const res = await this.$request({
				url: '/home/swiperdata'
			});
			this.swipers = res.data.message;
		},
		//获取热门商品列表数据
		
		async getHotGoods(){
			for(let i = 0; i < 10; i++){
				let goods_id = Math.floor(Math.random()*9999 + 1)
				const res = await this.$request({
					url: `/goods/detail?goods_id=${goods_id}`
				});
				this.goods.push(res.data.message)
			}
		}
	}
};
</script>

<style lang="scss">
.home {
	swiper {
		width: 750rpx;
		height: 380rpx;
	}
	image {
		width: 100%;
		height: 100%;
	}
}
.nav{
	display: flex;
	text-align: center;
	.nav_item{
		width: 25%;
		view{
			width: 120rpx;
			height: 120rpx;
			background: $theme-color;
			border-radius: 60rpx;
			margin: 10px auto;
			line-height: 120rpx;
			color: white;
			font-size: 50rpx;
		}
	}
}
.hot_goods{
	background: #eee;
	overflow: hidden;
	margin-top: 10px;
	.title{
		color: $theme-color;
		text-align: center;
		letter-spacing: 20px;
		padding: 10px 0;
		margin: 7px 0;
		background: white;
	}
	.goods_list{
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.goods_item{
			background: white;
			width: 355rpx;
			height: 530rpx;
			margin: 10rpx 0;
			padding: 15rpx;
			box-sizing: border-box;
			overflow: hidden;
			text-overflow: ellipsis;
			image{
				display: block;
				margin: auto;
				width: 355rpx;
				height: 355rpx;
			}
			.price{
				color: $theme-color;
				padding: 0;
				margin: 0;
				font-size: 36rpx;

			}
			.name{
				font-size: 28rpx;
				line-height: 50rpx;
				padding-bottom: 15rpx;
			}
		}
	}
}
</style>
