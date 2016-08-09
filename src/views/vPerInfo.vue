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
			<li v-for="tabItem in tabDataSet" :class="{'active': activeItem === $index}" @click="changeItem($index)">{{ $index === 0 ? "创建的话题" : "参与的话题"}}</li>
		</ul>
		<div class="tab-content">
			<div v-for="tabData in tabDataSet" class="tabpanel" :class="{'active': activeItem === $index}">
				<ul>
					<li v-for="item in tabData">
						<div class="header">
							<vuserpanel :avatar="item.author.avatar_url">
								<p slot="one" v-link="{path: '/perinfo/' + item.author.loginname}">{{item.author.loginname}}</p>
								<p slot="two" v-link="{path: '/topic/' + item.id}">{{item.title}}</p>
							</vuserpanel>
							<div class="right">
								<p class="date">{{item.last_reply_at | getLastTimeStr true}}</p>
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
    data(){
      return {
        activeItem: 0,
        userInfo: {},
        tabDataSet: []
      }
    },
    props: {
    	isShowSidebar: {
    		type: Boolean,
    		required: true,
    		twoway: true
    	},
    	loginname: {
    		type: String,
    		required: true
    	}
    },
   
    created(){
    	this.isShowSidebar = false
    	console.log(this.$route.params.loginname)
      this.getUserInfo()
    },
    route: {
    	data(transition){ //  监听
	    	this.getUserInfo()
	    }	
    },
 
    methods: {
			changeItem(itemIndex){
				this.activeItem = itemIndex
			},
			getUserInfo(){
				api.user.getUserInfo({
	        loginname:  this.$route.params.loginname || this.loginname,
	      }, (data) => {
	        this.userInfo = data.data
	        this.tabDataSet.$set(0, data.data.recent_topics)
	        this.tabDataSet.$set(1, data.data.recent_replies)
	        console.log(data.data)
	      })
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
		cursor: pointer;
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
		position: relative;
		padding: 5px;
		border-bottom: solid 1px #d4d4d4
	}
	.tabpanel .header div>p{
		margin-bottom: 0;
		overflow: hidden;
		line-height: 22px;
	}
	.header{
		overflow: hidden;
	}
	.header .date{
		position: absolute;
		right: 5px;
		top: 5px;
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