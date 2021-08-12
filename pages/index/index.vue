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
	</view>
</template>

<script>
export default {
	data() {
		return {
			swipers: []
		};
	},
	onLoad() {
		this.getSwipers();
	},
	methods: {
		//获取轮播图数据
		async getSwipers() {
			const res = await this.$request({
				url: '/home/swiperdata'
			});
			console.log(res);
			this.swipers = res.data.message;
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
			background: #BA1500;
			border-radius: 60rpx;
			margin: 10px auto;
			line-height: 120rpx;
			color: white;
			font-size: 50rpx;
		}
	}
}
</style>
