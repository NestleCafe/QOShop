<template>
	<view class="home">
		<swiper indicator-dots circular autoplay interval="3000">
			<swiper-item v-for="item in swipers" :key="item.id"><image :src="item.image_src"></image></swiper-item>
		</swiper>

		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item">
				<view class="iconfont icon-ziyuan"></view>
				<text></text>
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
</style>
