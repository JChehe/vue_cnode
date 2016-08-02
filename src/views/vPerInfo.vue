<template>
	<div>
		<div class="user-info">
			<img :src="userInfo.avatar_url">
			<p>{{userInfo.loginname}}</p>
			<div class="right">
				<p>注册时间：{{userInfo.create_at | getLastTimeStr true}}</p>
				<p>积分：{{userInfo.score}}</p>
			</div>
		</div>
	</div>

	<div class="tab">
		<ul class="tab-nav">
			<li :class="{'active': activeItem === 0}" @click="changeItem(0)">已读信息</li>
			<li :class="{'active': activeItem === 1}" @click="changeItem(1)">未读信息</li>
		</ul>
		<div class="tab-content">
			<div class="tabpanel" :class="{'active': activeItem === 0}">
				<ul>
					<li v-for="topic in userInfo.recent_topics">
						<div class="header">
							<vuserpanel :avatar="topic.author.avatar_url">
								<p slot="one">{{topic.title}}</p>
								<p slot="two">{{topic.author.loginname}}</p>
							</vuserpanel>
							<!-- <div class="left">
								<img :src="topic.author.avatar_url">
								<div>
									<p>{{topic.title}}</p>
									<p>{{topic.author.loginname}}</p>
								</div>
							</div> -->
							<div class="right">
								<p>{{topic.last_reply_at | getLastTimeStr true}}</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="tabpanel" :class="{'active': activeItem === 1}">
				<ul>
					<li v-for="topic in userInfo.recent_replies">
						<div class="header">
							<div class="left">
								<img :src="topic.author.avatar_url">
								<div>
									<p>{{topic.title}}</p>
									<p>{{topic.author.loginname}}</p>
								</div>
							</div>
							<div class="right">
								<p>{{topic.last_reply_at}}</p>
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

    
	export default {
		components: {
			vuserpanel: vUserPanel
		},
    data: function(){
      return {
        activeItem: 0,
        userInfo: {}
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
    	var self = this
        api.user.getUserInfo({
          loginname: "JChehe",
        }, function(data){
          self.userInfo = data.data
        })
    },
    methods: {
			changeItem: function(itemIndex){
				this.activeItem = itemIndex
			}
		}
	}
</script>

<style scoped>
	.user-info{
		text-align: center;
		overflow: hidden;
		padding-top: 10px;
	}
	.user-info .right{
		padding-right: 15px;
	}
	.user-info .right>p{
		text-align: right;
	}
	.user-info img{
		width: 96px;
		height: 96px;
		border-radius: 50%;
		box-shadow: 0 0 8px rgba(0,0,0,.5)
	}
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
			width: 100%;
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
  	 .right p{
  	 	margin-bottom: 0;
  	 }
  	 .related-topic{
  	 	background-color: #f0f0f0;
  	 	padding: 5px;
  	 	margin:10px 5px;
  	 	border-radius: 5px;
  	 }
</style>

<style>
	
</style>