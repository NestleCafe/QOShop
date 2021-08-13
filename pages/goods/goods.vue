<template>
	<view>
		<view class="goodList">
			<goods-list :goods="goods" />
		</view>
		<view class="isOver" v-if="isOver">
			<view>-- 我是有底线的！--</view>
		</view>
	</view>
</template>

<script>
	import goodsList from "@/components/goodsList.vue"
	export default {
		components: { goodsList },
		data() {
			return {
				isOver: false,
				pageIndex: 1,
				goods: [],
			}
		},
		onLoad(){
			this.getHotGoods()
		},
		methods: {
			//获取热门商品列表数据
			async getHotGoods(callback) {
				for (let i = 0; i < 10; i++) {
					let goods_id = Math.floor(Math.random() * 9999 + 1)
					const res = await this.$request({
						url: `/goods/detail?goods_id=${goods_id}`
					});
					this.goods.push(res.data.message)
					callback && callback()
				}
			},
		},
		onReachBottom(){
			this.pageIndex ++
			if(this.pageIndex > 2){
				this.isOver = true
				return
			}else{
				this.getHotGoods()
			}
		},
		onPullDownRefresh(){
			this.pageIndex = 1
			this.goods = []
			setTimeout(()=>{
				this.getHotGoods(()=>{
					uni.stopPullDownRefresh()
				})
				this.isOver = false
			}, 500)
		}
	}
</script>

<style lang="scss">
page{
	background: #eee;
	.isOver{
		display: flex;
		justify-content:center;
		align-items: center;
		view{
			margin-top: 0;
			color: #A9A9A9;
			padding-bottom: 15rpx;
		}
	}
}
</style>
