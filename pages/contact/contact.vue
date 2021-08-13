<template>
	<view class="contact">
		<image class="image" src="@/static/AboutUs.png"></image>
		<view class="info">
			<view @click="callPhone">联系电话：{{phoneNumber}}</view>
			<view>联系地址：基于uni-app，仅作学习</view>
		</view>
		<map class="map" :latitude="latitude" :longitude="longitude"
			:markers="markers"
		></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 116.340704,
				latitude: 39.96475,
				phoneNumber: 1145141919810,
				markers:[
					{
						longitude: 116.340704,
						latitude: 39.96475,
						iconPath: "../../static/logo.png",
						width: 30,
						height: 30,
					}
				],
			}
		},
		methods: {
			callPhone(){
				uni.makePhoneCall({
					phoneNumber: this.phoneNumber.toString(),
					
				})
			}
		}
	}
</script>

<style lang="scss">
.contact{
	.image{
		width: 750rpx;
	}
	.info{
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		margin-bottom: 10rpx;
		view{
			line-height: 80rpx;
			border-bottom: 1px solid #eee;
		}
	}
	.map{
		width: 100%;
		height: 750rpx;
	}
}
</style>
