<template>
	<form @submit.prevent="signIn">
		<div class="form-group">
			<input type="text" v-model="accessToken">
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
		methods: {
			signIn: function(){
				var self = this
				if(this.accessToken.trim().length > 0){
					api.user.validateAccessToken({
						accesstoken: self.accessToken
					}, function(data){
						if(data.success){
							console.log(data)
							alert("验证成功")
						}
					})
				}

			}
		}
	}

</script>

<style scoped>
	
</style>