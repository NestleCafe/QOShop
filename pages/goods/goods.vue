<template>
	<view class="goodList">
		<goods-list :goods="goods" />
	</view>
</template>

<script>
	import goodsList from "@/components/goodsList.vue"
	export default {
		components: { goodsList },
		data() {
			return {
				goods: [],
			}
		},
		onLoad(){
			this.getHotGoods()
		},
		methods: {
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
		}
	}
</script>

<style>
.goodList{
	background: #eee;
}
</style>
