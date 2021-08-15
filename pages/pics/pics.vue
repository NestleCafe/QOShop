<template>
	<view class="pics">
		<scroll-view class="left" scroll-y="true">
			<view v-for="(item, index) in dataList" :key="item.id"
				:class="{active: selectedIndex === index}"
				@click="selectedIndex = index"
			>
			{{item.cat_name}}
			</view>
		</scroll-view>
		
		<!-- 右侧信息(二级页面) -->
		<scroll-view class="right" scroll-y="true" >
			<view class="item" v-for="(item, index) in rightContent" :key="rightContent.id">
				<view class="item-child">
					<view class="title">{{rightContent[index].cat_name}}</view>
					<view class="content" 
						v-for="childItem in rightContent[index].children"
						:key="childItem.id"
					>
						<view class="contentText">{{childItem.cat_name}}</view>
						<image :src="childItem.cat_icon"></image>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [],	//调用接口获得的数据
				selectedIndex: 0,	//一级页面索引
				rightContent: [],	//二级页面内容
				/* secondaryIndex: 0,		//二级页面内容索引 */
			}
		},
		methods: {
			async getPicsList(){
				const res = await this.$request({
					url: '/categories',
				})
				this.dataList = res.data.message
				/* console.log(res.data.message) */
				//获取右侧数据
				//这个接口的二级页面太反人类了，看看接口文档
				console.log(this.dataList[this.selectedIndex].children)
				this.rightContent = this.dataList[this.selectedIndex].children
			},
			display(){
				console.log(this.selectedIndex)
			}
		},
		onLoad(){
			this.getPicsList()
		},
 		watch:{
			selectedIndex: function(newValue){
				this.rightContent = this.dataList[newValue].children
			},
		},
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
				.item-child{
					.title{
						margin-bottom: 10px;
						text-align: center;
						letter-spacing: 20px;
						padding: 10px 0;
						margin: 7px 0;
						border-bottom: 3px solid #eee;
						font-size: 36rpx;
						color: $theme-color;
					}
					.content{
						.contentText{
							text-align:center;
						}
					}
				}
				
			}
		}
	}
}

</style>
