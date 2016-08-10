<template>
	<div class="topic-list" :is-show-sidebar.sync="false">
		<ul>
			<li v-for="topic in topics" :class="topic.good ? 'top' : (topic.tab || 'unknow')" :id="topic.id" v-link="{name: 'topic', params: {id: topic.id}}">
				<h3 class="title"><span class="tab">{{tabToName(topic)}}</span>{{topic.title}}</h3>
				<div class="info">
					<div class="right">
						<p><strong title="回复数">{{topic.reply_count}}</strong> / <span title="阅读数">{{topic.visit_count}}</span></p>
						<p class="latest_reply_time">{{topic.last_reply_at | getLastTimeStr true}}</p>
					</div>
					<vuserpanel :avatar="topic.author.avatar_url">
						<p slot="one" v-link="{path: '/perinfo/' + topic.author.loginname}">{{topic.author.loginname}}</p>
						<p slot="two">{{topic.create_at | getLastTimeStr true}}</p>
					</vuserpanel>
				</div>
			</li>
		</ul>
	</div>

	<button v-if="!isFirstLoad" type="button" class="loadMoreBtn" @click="getMoreTopic">{{isLoading ? "正在加载" :"加载更多"}}</button>
</template>

<script>
	import api from "../api"
	import vuserpanel from "../components/vUserPanel"
	export default{
		components: {
			vuserpanel
		},
		data(){
			return{
				topics: [],
				page: 1,
				limit: 30,
				tab: "all",
				isFirstLoad: true,
				isLoading: false
			}
		},
		props: {
			isShowSidebar: {
				required: true,
				twoWay: true
			}
		},
		route: {
			data(transition){
				var query = transition.to.query;
				if(transition.to.name === "list"){
					this.limit = 30
					this.tab = query.tab
					this.getTopicList({tab: this.tab});
						this.isShowSidebar = false
					}
				}
		},
		
		methods:{
			tabToName(topic){
				var name = "";
				if(topic.good == true){
					name = "精华"
				}else{
					switch(topic.tab) {
						case "ask": name = "问答"; break;
						case "share": name = "分享"; break;
						case "job": name = "招聘"; break;
						default: name="未知"
					}
				}
				return name;
			},
			getTopicList(opts){
				if (opts == undefined){
					opts = {}
				}
				api.topic.getTopicList({
					tab: opts.tab || this.tab,
					page: opts.page || this.page,
					limit: opts.limit || this.limit
				}, (data) => {
					if(data.success){
						// self.topics = self.topics.concat(data.data)
						this.topics = data.data
						this.isLoading = false
						if(this.isFirstLoad){
							this.isFirstLoad = false
						}
					}
				})
			},
			getMoreTopic(){
				if(!this.isLoading){
					this.isLoading = true
					this.limit += 30
					this.getTopicList({tab: this.tab})
				}
			}
		}
	}
</script>

<style scoped>

  	 .topic-list li{
			padding: 10px 8px;
			overflow: hidden;
			background-color: #fff;
			border-bottom: 1px solid #d5dbdb;
  	 }
  	 
  	 .topic-list .tab{
  	 	border-radius: 4px;
  	 	padding: 3px 6px;
  	 	color: #fff;
  	 	font-size: 14px;
  	 	margin-right: 6px;
  	 }
  	 .topic-list h3{
  	 	margin-bottom: 8px;
  	 	line-height: 1.6
  	 }
  	 .topic-list .top .tab{
  	 	background-color: #E74C3C
  	 }
  	 .topic-list .share .tab{
  	 	background-color: #1ABC9C
  	 }
  	 .topic-list .job .tab{
			background-color: #9B59B6
  	 }
  	 .topic-list .ask .tab{
  	 	background-color: #3498DB
  	 }
  	 .topic-list .unknow .tab{
  	 	background-color: gray
  	 }
  	 
  
  	 .topic-list .info{
  	 	font-size: 14px;
  	 }
  	 .left>div{
  	 	float: right;
  	 	margin-left: 6px;
  	 }
  	 .info .right>p{
  	 	text-align: right;
  	 }
  	 .info p{
  	 	color: #34495e;
  	 	line-height: 1.6;
  	 	margin-bottom: 0;
  	 }
  	 .right strong{
  	 	color: #42b983
  	 }
		.title{
  	 	cursor: pointer;
  	 }
		.loadMoreBtn{
			width: 100%;
			max-width: none;

		}
</style>