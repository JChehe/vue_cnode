<template>
	<div class="tab">
		<ul class="tab-nav">
			<li :class="{'active': activeItem === 0}" @click="changeItem(0)">已读信息</li>
			<li :class="{'active': activeItem === 1}" @click="changeItem(1)">未读信息</li>
		</ul>
		<div class="tab-content">
			<div class="tabpanel" :class="{'active': activeItem === 0}">
				<ul>
					<li v-for="message in allMessages.has_read_messages">
						<div class="header">
							<div class="left">
								<img :src="message.author.avatar_url">
								<div>
									<p>{{message.author.loginname}}</p>
									<p>在回复中@了你</p>
								</div>
							</div>
							<div class="right">
								<p>{{message.reply.create_at}}</p>
							</div>
						</div>
						<div class="content">
							<div class="">
								{{{message.reply.content}}}
							</div>
							<div class="related-topic">
								<h4>{{message.topic.title}}</h4>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="tabpanel" :class="{'active': activeItem === 1}">
				<ul>
					<li v-for="message in allMessages.hasnot_read_messages">
						<div class="header">
							<div class="left">
								<img :src="message.author.avatar_url">
								<div>
									<p>{{message.author.loginname}}</p>
									<p>在回复中@了你</p>
								</div>
							</div>
							<div class="right">
								<p>{{message.reply.create_at}}</p>
							</div>
						</div>
						<div class="content">
							<div class="">
								{{{message.reply.content}}}
							</div>
							<div class="related-topic">
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

	export default{
		data(){
			return {
				activeItem: 0,
				allMessages: {}
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
			this.getMessages()
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
					this.allMessages = data.data
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
			padding: 5px;
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
  	 	margin:10px 5px;
  	 	border-radius: 5px;
  	 }
</style>