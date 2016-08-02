<template>
	<form @submit.prevent="signIn">
		<div class="form-group">
			<input type="text" v-model="accessToken" placeholder="请输入access_token">
		</div>
		<button type="submit">登录</button>
	</form>
</template>

<script>
	import api from "../api"

	export default {
		data: function(){
			return {
				accessToken: ""
			}
		},
		props: {
			isShowSidebar: {
				type: Boolean,
				required: true,
				twoWay: true
			},
			isLogin: {
				type: Boolean,
				required: true,
				twoWay: true
			},
			loginname: {
				type: Boolean,
				required: true,
				twoWay: true
			},
			avatar_url: {
				type: Boolean,
				required: true,
				twoWay: true
			}
		},
		created: function(){
			this.isShowSidebar = false
		},
		methods: {
			signIn: function(){
				var self = this
				self.accesstoken = this.accessToken.trim()
				if(self.accesstoken.length > 0){
					api.user.validateAccessToken({
						accesstoken: self.accessToken
					}, function(data){
						if(data.success){
							// alert("验证成功");
							console.log(data)
							localStorage.loginname = self.loginname = data.loginname
							localStorage.avatar_url = self.avatar_url = data.avatar_url
							localStorage.user_id = data.id
							localStorage.accesstoken = self.accesstoken

							self.isLogin = true
							var redirect = decodeURIComponent(self.$route.query.redirect || '/');
							self.$route.router.go(redirect)
						}
					})
				}

			}
		}
	}

</script>

<style scoped>
	input{
		display: block;
		width: 100%;
	}
</style>