<template>
	<div class="post-list">
		<ul>
			<li v-for="post in posts" :class="post.tab" :id="post.id" @click="getTopic(post.id)">
				<h3 class="title"><span class="tab">{{tabToName(post.tab)}}</span>{{post.title}}</h3>
				<div class="info">
					<div class="left">
						<img :src="post.author.avatar_url" alt="">
						<div>
							<p class="author">{{post.author.loginname}}</p>
							<p class="post_time">{{post.create_at}}</p>
						</div>
					</div>
					<div class="right">
						<p><strong title="回复数">{{post.reply_count}}</strong> / <span title="阅读数">{{post.visit_count}}</span></p>
						<p class="latest_reply_time">{{post.last_reply_at}}</p>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import api from "../api"

	export default{
		data: function(){
			return{
				posts: {},
				post: {}
			}
		},
		props: {
			currentView: {
				required: true,
				type: String
			},
			postId: {
				type: String
			}
		},
		created: function(){
			var self = this;
			api.topic.getTopicList({
				page: 1,
				limit: 20
			}, function(data){
				self.posts = data.data
			})
		},
		methods:{
			tabToName: function(tab){
				var name = "";
				switch(tab) {
					case "top": name = "置顶"; break;
					case "ask": name = "问答"; break;
					case "share": name = "置顶"; break;
					case "job": name = "招聘"; break;
					default: name="未能识别"
				}
				return name;
			},
			getTopic: function(post_id){
				this.currentView = "vpost"
				this.postId = post_id
			}
		}
	}
</script>

<style scoped>
	.post-list{

  	 }
  	 .post-list li{
			padding: 6px 8px;
			overflow: hidden;
			background-color: #fff;
			border-bottom: 1px solid #d5dbdb;
  	 }
  	 .post-list .tab{
  	 	border-radius: 4px;
  	 	padding: 4px 6px;
  	 	color: #fff;
  	 	font-size: 14px;
  	 	margin-right: 6px;
  	 }
  	 .post-list h3{
  	 	padding: 6px 0;
  	 	line-height: 1.6
  	 }
  	 .post-list .top .tab{
  	 	background-color: #E74C3C
  	 }
  	 .post-list .share .tab{
  	 	background-color: #1ABC9C
  	 }
  	 .post-list .job .tab{
			background-color: #9B59B6
  	 }
  	 .post-list .ask .tab{
  	 	background-color: #3498DB
  	 }
  	 .left{
  	 	float: left;
  	 	overflow: hidden;
  	 }
  	 .right{
  	 	float: right;
  	 }
  	 .left img{
  	 	width: 44px;
  	 	height: 44px;
  	 	vertical-align: bottom;
  	 }
  	 .post-list .info{
  	 	font-size: 14px;
  	 }
  	 .left>div{
  	 	float: right;
  	 	margin-left: 6px;
  	 }
  	 .info p{
  	 	color: #34495e;
  	 	line-height: 1.6;
  	 }
  	 .right strong{
  	 	color: #42b983
  	 }
</style>