<template>
	<view class="pics">
		<scroll-view class="left" scroll-y="true">
			<view :class="{active: selectedIndex === index}"
				@click="selectedIndex = index"
				v-for="(item, index) in picsList" :key="item.cat_id"
			>{{item.cat_name}}</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				picsList: [],
				selectedIndex: 0,
			}
		},
		methods: {
			async getPicsList(){
				const res = await this.$request({
					url: '/categories',
				})
				this.picsList = res.data.message
				console.log(this.picsList)
			},
		},
		onLoad(){
			this.getPicsList()
		}
	}
</script>

<style lang="scss">
page{
	height: 100%;
	.pics{
		height: 100%;
		.left{
			padding: 3px 0 3px 0;
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
			view{
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-bottom: 1px solid #eee;
			}
			.active{
				background: #eee;
				
			}
		}
	}
}

</style>
