<template>
	<div class="tab">
		<ul class="tab-nav">
			<li v-for="messageType in allMessages" :class="{'active': activeItem === $index}" @click="changeItem($index)">{{ $index === 0 ? "已读信息" : "未读信息"}} <span v-if="$index===1 && unreadCount > 0">( {{unreadCount}} )</span></li>
		</ul>
		<div class="tab-content">
			<div class="tabpanel" v-for="messageType in allMessages" :class="{'active': activeItem === $index}">
				<button v-if="$index===1 && unreadCount > 0" @click="makeAllRead">标为全部已读</button>
				<ul>
					<li v-for="message in messageType">
						<div class="header">
							<vuserpanel :avatar="message.author.avatar_url">
								<p slot="one" v-link="{path:'/perinfo/'+message.author.loginname}">{{message.author.loginname}}</p>
								<p slot="two">在回复中@了你</p>
							</vuserpanel>
							
							<div class="right">
								<p>{{message.reply.create_at | getLastTimeStr true}}</p>
							</div>
						</div>
						<div class="content">
							<div class="">
								{{{message.reply.content}}}
							</div>
							<div class="related-topic" v-link="{path: '/topic/' + message.topic.id}">
								<h4>{{message.topic.title}}</h4>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>

import api from "../api"
import vUserPanel from "../components/vUserPanel"
	export default{
		components:{
			vuserpanel: vUserPanel
		},
		data(){
			return {
				activeItem: 0,
				allMessages: []
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
			},
			unreadCount: {
				type: Number,
				required: true,
				twoWay: true,
				default: 0
			}
		},
		created(){
			this.getMessages()
			this.$root.getUnreadCount()
			this.isShowSidebar = false
		},
		methods: {
			changeItem(itemIndex){
				this.activeItem = itemIndex
			},
			getMessages(){
				api.message.getMessage({
					accesstoken: this.accesstoken
				}, (data) => {
					Object.keys(data.data).forEach((item, index)=>{
						this.allMessages.$set(index, data.data[item])
					})
				})
			},
			makeAllRead(){
				api.message.markAll({
					accesstoken: this.accesstoken
				}, (data) => {
					if(data.success){
						this.unreadCount = 0
						this.getMessages()
					}
				})
			}
		}
	}
</script>

<style scoped>
	*,*:before,*:after{
		box-sizing: border-box;
	}
		ul{
			overflow: hidden;
			list-style: none;
		}
		.tab-nav{
			padding: 0;
			text-align: center;
			/*overflow: hidden;*/
		}
		.tab-nav li{
			float: left;
			width: 50%;
			border-bottom: solid 1px #d4d4d4;
			position: relative;
			line-height: 36px;
			font-size: 14px;
			padding-bottom: 2px;
			cursor: pointer;
		}
		.content{
			padding-top: 15px;
		}
		.tab-nav li:not(:last-child):after{
			content: "";
			position: absolute;
			right: 0;
			top: 0;
			bottom: 0;
			width: 1px;
			background-color: #d4d4d4;
		}
		.tab-nav li.active{
			border-bottom:2px solid #42b983;
			color: #42b983;
			padding-bottom: 1px;
		}

		.tab-content{
			position: relative;
			clear:both;
		}
		.tabpanel{
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			min-height: 300px;
			padding: 10px;
			display: none;
		}
		.tabpanel.active{
			display: block;
		}
		.tabpanel li{
			padding: 10px 5px;
			border-bottom: solid 1px #d4d4d4
		}
		.header{
			overflow: hidden;
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
  	 .related-topic{
  	 	background-color: #f0f0f0;
  	 	padding: 5px;
  	 	margin:10px 0 0;
  	 	border-radius: 5px;
  	 }
  	 .related-topic h4 {
  	 	margin-bottom: 0;
  	 }
</style>