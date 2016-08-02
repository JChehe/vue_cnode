<template>
	<form @submit.prevent="newPost">
		<div class="form-group">
			<label>
				选择板块：
				<select v-model="tabSelected">
					<option v-for="tabOpt in tabOptions" :value="tabOpt.value">{{tabOpt.text}}</option>
				</select>
			</label>
		</div>
		<div class="form-group">
			<input v-model="postTitle" type="text" name="title" placeholder="标题，字数10字以上">
		</div>
		<div class="form-group">
			<textarea v-model="postContent" placeholder="支持Markdown语法"></textarea>
		</div>
		<button type="submit">发布</button>
	</form>
</template>

<script>
	import api from "../api"

	export default{
		data: function(){
			return {
				tabSelected: "",
				tabOptions: [
				  { text: "请选择", value: ""},
					{ text: "分享", value: "share"},
					{ text: "问答", value: "ask"},
					{ text: "招聘", value: "job"}
				],
				postTitle: "",
				postContent: ""
			}
		},
		props: {
			isShowSidebar: {
				type: Boolean,
				required: true,
				twoway: true
			}
		},
		created: function(){
			this.isShowSidebar = false
		},
		methods: {
			newPost: function(){
				var self = this

				// alert("需要填写完整")
				if(this.tabSelected === ""){
					alert("未选择主题类型")
				}else if(this.postTitle.trim().length < 10){
					alert("标题小于10个字")
				}else if(this.postContent.trim().length <= 0){
					alert("主题内容为空")
				}else{
					api.topic.newTopic({
						accesstoken: "5f9f0171-db81-4578-8af4-9033031b69c2",
						title: self.postTitle,
						content: self.postContent,
						tab: self.tabSelected
					}, function(data){
						console.log(data)
						// alert("发帖成功")
						self.$route.router.go({name:"list"})
					})
				}
			}
		}
	}
</script>

<style scoped>
	

</style>