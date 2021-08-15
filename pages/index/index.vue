<template>
	<view class="home">
		<swiper indicator-dots circular autoplay interval="3000">
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.image_src"></image>
			</swiper-item>
		</swiper>

		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item, index) in navList" :key="index" 
				@click="navItemClick(item.path)"
			>
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>

		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="title">推荐商品</view>
				<goods-list :goods="goods"/>
		</view>

	</view>
</template>

<script>
	import goodsList from "@/components/goodsList.vue"
	export default {
		components: { goodsList },
		name: "index",
		data() {
			return {
				swipers: [],
				goods: [],
				navList: [{
						icon: "iconfont icon-ziyuan",
						title: "QO超市",
						path: "/pages/goods/goods",
					},
					{
						icon: "iconfont icon-guanyuwomen",
						title: "关于我们",
						path: "/pages/contact/contact",
					},
					{
						icon: "iconfont icon-tupian",
						title: "商品分类",
						path: "/pages/pics/pics",
					},
					{
						icon: "iconfont icon-shipin",
						title: "学习视频",
						path: "/pages/videos/videos",
					},
				],
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
			async getHotGoods() {
				for (let i = 0; i < 10; i++) {
					let goods_id = Math.floor(Math.random() * 9999 + 1)
					const res = await this.$request({
						url: `/goods/detail?goods_id=${goods_id}`
					});
					this.goods.push(res.data.message)
				}
			},

			//导航点击
			navItemClick(url) {
				console.log(url)
				uni.navigateTo({
					url
				})
			},
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

	.nav {
		display: flex;
		text-align: center;

		.nav_item {
			width: 25%;

			view {
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

	.hot_goods {
		background: #eee;
		overflow: hidden;
		margin-top: 10px;

		.title {
			color: $theme-color;
			text-align: center;
			letter-spacing: 20px;
			padding: 10px 0;
			margin: 7px 0;
			background: white;
		}


	}
</style>
