<template>
	<view class="pics">
		<scroll-view class="left" scroll-y="true">
			<view :class="{active: selectedIndex === index}"
				@click="selectedIndex = index"
				v-for="(item, index) in picsList" :key="item.id"
			>{{item.cat_name}}</view>
		</scroll-view>
		
		<!-- 右侧信息 -->
		<scroll-view class="right" scroll-y="true" >
			<view class="item" >
				<image src=""></image>
				<text>111</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				picsList: [],
				selectedIndex: 0,
				rightContent: [],
			}
		},
		methods: {
			async getPicsList(){
				const res = await this.$request({
					url: '/categories',
				})
				this.picsList = res.data.message
				console.log(res.data.message)
				//获取右侧数据
				console.log(res.data.message[this.selectedIndex].children)

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
		display: flex;
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
		.right{
			$rightWidth : calc( 750rpx - 200rpx ); 
			
			height: 100%;
			width: $rightWidth;
			margin: 10rpx auto;
			.item{
				image{
					width: $rightWidth;
					border-radius: 10rpx;
				}
				text{
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}
		}
	}
}

</style>
