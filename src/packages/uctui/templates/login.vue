<template>
	<view class="force-login-wrap">
		<view class="force-login__content y-f">
			<!-- #ifdef MP-WEIXIN -->
			<open-data class="user-avatar" type="userAvatarUrl"></open-data>
			<open-data class="user-name" type="userNickName"></open-data>
			<!--  #endif -->
			<view class="login-notice">为了提供更优质的服务，需要获取您的头像昵称</view>
			<button class="cu-btn author-btn" @getuserinfo="getuserinfo" open-type="getUserInfo">
				授权并查看
			</button>
			<button class="cu-btn close-btn" @tap="closeAuth">暂不授权</button>
		</view>
	</view>
</template>
<script>
export default {
	methods: {
		async getuserinfo(e) {
			let token = await this.$uct.wxLogin(e);
			this.$uct.vuex('user.token', token);
			uni.navigateBack({
				delta: 1,
			});
		},
		closeAuth() {
			uni.navigateBack({
				delta: 1,
			});
		},
	},
};
</script>

<style lang="scss">
.force-login-wrap {
	position: fixed;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	z-index: 11111;
	top: 0;
	background: linear-gradient(
		180deg,
		rgba(239, 196, 128, 1) 0%,
		rgba(248, 220, 165, 1) 25%,
		rgba(255, 255, 255, 1) 98%
	);
	.logo-bg {
		width: 640rpx;
		height: 300rpx;
	}
	.force-login__content {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		.user-avatar {
			width: 160rpx;
			height: 160rpx;
			border-radius: 50%;
			overflow: hidden;
			margin-bottom: 40rpx;
		}
		.user-name {
			font-size: 35rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: rgba(132, 87, 8, 1);
			margin-bottom: 30rpx;
		}
		.login-notice {
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 400;
			color: rgba(200, 150, 61, 1);
			line-height: 44rpx;
			width: 400rpx;
			text-align: center;
			margin-bottom: 80rpx;
		}
		.author-btn {
			width: 630rpx;
			height: 80rpx;
			background: linear-gradient(90deg, rgba(233, 180, 97, 1), rgba(238, 204, 137, 1));
			box-shadow: 0px 7rpx 6rpx 0px rgba(229, 138, 0, 0.22);
			border-radius: 40rpx;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(255, 255, 255, 1);
		}
		.close-btn {
			width: 630rpx;
			height: 80rpx;
			margin-top: 30rpx;
			border-radius: 40rpx;
			border: 2rpx solid rgba(233, 180, 97, 1);
			background: none;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(233, 180, 97, 1);
		}
	}
}
</style>
