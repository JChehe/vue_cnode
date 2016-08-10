<template>
	<form @submit.prevent="signIn">
		<div class="form-group">
			<input type="text" v-model="accessTokenInput" placeholder="请输入access_token">
		</div>
		<button type="submit">登录</button>
	</form>
</template>

<script>
	import api from "../api"

	export default {
		data(){
			return {
				accessTokenInput: ""
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
				type: String,
				required: true,
				twoWay: true
			},
			avatar_url: {
				type: String,
				required: true,
				twoWay: true
			},
			accesstoken: {
				type: String,
				required: true,
				twoWay: true
			}
		},
		created(){
			this.isShowSidebar = false
		},
		methods: {
			signIn(){
				this.accesstoken = this.accessTokenInput.trim()
				if(this.accesstoken.length > 0){
					api.user.validateAccessToken({
						accesstoken: this.accessTokenInput
					}, (data) => {
						if(data.success){
							// alert("验证成功");
							localStorage.loginname = this.loginname = data.loginname
							localStorage.avatar_url = this.avatar_url = data.avatar_url
							localStorage.user_id = data.id
							localStorage.accesstoken = this.accesstoken = this.accessTokenInput

							this.isLogin = true
							var redirect = decodeURIComponent(this.$route.query.redirect || '/');
							this.$route.router.go(redirect)
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