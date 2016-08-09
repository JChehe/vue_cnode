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
		data(){
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
			},
			accesstoken: {
				type: String,
				required: true
			}
		},
		created(){
			this.isShowSidebar = false
		},
		methods: {
			newPost(){

				if(this.tabSelected === ""){
					alert("未选择主题类型")
				}else if(this.postTitle.trim().length < 10){
					alert("标题小于10个字")
				}else if(this.postContent.trim().length <= 0){
					alert("主题内容为空")
				}else{
					api.topic.newTopic({
						accesstoken: this.accesstoken,
						title: this.postTitle,
						content: this.postContent,
						tab: this.tabSelected
					}, (data) => {
						console.log(data)
						// alert("发帖成功")
						this.$route.router.go({name:"list"})
					})
				}
			}
		}
	}
</script>

<style scoped>
	input[name="title"]{
		width: 100%;
		max-width: 400px;
	}
	textarea{
		min-height: 260px;
	}
</style>