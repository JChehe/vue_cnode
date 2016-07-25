<template>
	<div>
		<div class="user-info">
			<img :src="userInfo.avatar_url">
			<p>{{userInfo.loginname}}</p>
			<div class="right">
				<p>注册时间：{{userInfo.create_at}}</p>
				<p>积分：{{userInfo.score}}</p>
			</div>
		</div>
		<div>
			<div class="">
				
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
	export default {
		data: function(){
			return {
				activeItem: 0,
				userInfo: {
        "loginname": "alsotang", 
        "avatar_url": "https://avatars.githubusercontent.com/u/1147375?v=3&s=120", 
        "githubUsername": "alsotang", 
        "create_at": "2012-09-09T05:26:58.319Z", 
        "score": 13260, 
        "recent_topics": [
            {
                "id": "5759bef0e5fa62531af6e151", 
                "author": {
                    "loginname": "alsotang", 
                    "avatar_url": "https://avatars.githubusercontent.com/u/1147375?v=3&s=120"
                }, 
                "title": "async/await 比 yield 好在哪里？", 
                "last_reply_at": "2016-06-22T11:31:49.232Z"
            }, 
            {
                "id": "572afb6b15c24e592c16e1e6", 
                "author": {
                    "loginname": "alsotang", 
                    "avatar_url": "https://avatars.githubusercontent.com/u/1147375?v=3&s=120"
                }, 
                "title": "新的社区推荐客户端：Noder", 
                "last_reply_at": "2016-07-07T13:24:42.321Z"
            }, 
            {
                "id": "570924d294b38dcb3c09a7a0", 
                "author": {
                    "loginname": "alsotang", 
                    "avatar_url": "https://avatars.githubusercontent.com/u/1147375?v=3&s=120"
                }, 
                "title": "timer 的 unref 函数", 
                "last_reply_at": "2016-04-17T02:47:26.232Z"
            }, 
            {
                "id": "570907402a1f230a25be8aab", 
                "author": {
                    "loginname": "alsotang", 
                    "avatar_url": "https://avatars.githubusercontent.com/u/1147375?v=3&s=120"
                }, 
                "title": "【深圳】NodeParty 2016.04.09 总结", 
                "last_reply_at": "2016-05-04T07:03:08.211Z"
            }, 
            {
                "id": "56f364c7532839c33a99d17e", 
                "author": {
                    "loginname": "alsotang", 
                    "avatar_url": "https://avatars.githubusercontent.com/u/1147375?v=3&s=120"
                }, 
                "title": "【深圳】NodeParty at 腾讯大厦 2016.04.09", 
                "last_reply_at": "2016-04-09T07:31:57.629Z"
            }, 
            {
                "id": "56a3c5d77ec020ed4b96b2cc", 
                "author": {
                    "loginname": "alsotang", 
                    "avatar_url": "https://avatars.githubusercontent.com/u/1147375?v=3&s=120"
                }, 
                "title": "微博上前端撕得那么狠，没撕到我们 Node 社区来....", 
                "last_reply_at": "2016-06-04T14:57:56.259Z"
            }, 
            {
                "id": "565c6973c4fa25cb27cc3c81", 
                "author": {
                    "loginname": "alsotang", 
                    "avatar_url": "https://avatars.githubusercontent.com/u/1147375?v=3&s=120"
                }, 
                "title": "js 中文字符串判断（根据 unicode 编码区间判断）", 
                "last_reply_at": "2015-12-09T11:50:30.737Z"
            }, 
            {
                "id": "565710b51c0503a051e5dac1", 
                "author": {
                    "loginname": "alsotang", 
                    "avatar_url": "https://avatars.githubusercontent.com/u/1147375?v=3&s=120"
                }, 
                "title": "Hello, and welcome to hacking node.js!", 
                "last_reply_at": "2015-11-27T01:14:59.020Z"
            }, 
            {
                "id": "564a1ae51ba2ef107f854cfc", 
                "author": {
                    "loginname": "alsotang", 
                    "avatar_url": "https://avatars.githubusercontent.com/u/1147375?v=3&s=120"
                }, 
                "title": "解析 node-murmurhash 库：说说 Node.js 二进制操作", 
                "last_reply_at": "2016-01-26T13:35:52.568Z"
            }, 
            {
                "id": "5647957589b4b49902e7fbf1", 
                "author": {
                    "loginname": "alsotang", 
                    "avatar_url": "https://avatars.githubusercontent.com/u/1147375?v=3&s=120"
                }, 
                "title": "一个在 co 中，控制 timeout 的库：ko-timeout", 
                "last_reply_at": "2015-11-15T10:06:27.429Z"
            }, 
            {
                "id": "5646147789b4b49902e7fbd5", 
                "author": {
                    "loginname": "alsotang", 
                    "avatar_url": "https://avatars.githubusercontent.com/u/1147375?v=3&s=120"
                }, 
                "title": "cnpmjs.org 搭建", 
                "last_reply_at": "2015-11-15T13:04:25.048Z"
            }, 
            {
                "id": "562bd9b7004756b058c237e9", 
                "author": {
                    "loginname": "alsotang", 
                    "avatar_url": "https://avatars.githubusercontent.com/u/1147375?v=3&s=120"
                }, 
                "title": "一个简单的 mysql 队列问题", 
                "last_reply_at": "2015-10-30T17:19:16.617Z"
            }, 
            {
                "id": "55f7c56122faedef379f66bc", 
                "author": {
                    "loginname": "alsotang", 
                    "avatar_url": "https://avatars.githubusercontent.com/u/1147375?v=3&s=120"
                }, 
                "title": "Node.js + OneAPM 试用体验", 
                "last_reply_at": "2015-09-26T15:26:41.987Z"
            }, 
            {
                "id": "55dbd0e77837f5f80795ca93", 
                "author": {
                    "loginname": "alsotang", 
                    "avatar_url": "https://avatars.githubusercontent.com/u/1147375?v=3&s=120"
                }, 
                "title": "【公告】结束关站，备案成功", 
                "last_reply_at": "2015-09-08T05:01:07.171Z"
            }, 
            {
                "id": "55c5f8ee39273b921933630d", 
                "author": {
                    "loginname": "alsotang", 
                    "avatar_url": "https://avatars.githubusercontent.com/u/1147375?v=3&s=120"
                }, 
                "title": "【开源项目赞助】可与阿里巴巴开源委员会、UCloud、七牛等厂商牵线搭桥", 
                "last_reply_at": "2015-09-01T02:45:02.627Z"
            }
        ], 
        "recent_replies": [
            {
                "id": "5790f7c44265959826e7b1be", 
                "author": {
                    "loginname": "esplendo", 
                    "avatar_url": "https://avatars.githubusercontent.com/u/7158020?v=3&s=120"
                }, 
                "title": "有些酷酷的程序员已经开始用代码约妹子了", 
                "last_reply_at": "2016-07-22T08:43:07.985Z"
            }, 
            {
                "id": "57905b30b78759e813a57b38", 
                "author": {
                    "loginname": "bugall", 
                    "avatar_url": "https://avatars.githubusercontent.com/u/8531791?v=3&s=120"
                }, 
                "title": "关于并发插入数据唯一性的问题", 
                "last_reply_at": "2016-07-22T04:18:11.510Z"
            }, 
            {
                "id": "578f086bb78759e813a57ab0", 
                "author": {
                    "loginname": "g8up", 
                    "avatar_url": "https://avatars.githubusercontent.com/u/8005686?v=3&s=120"
                }, 
                "title": "ES6 的“奇葩”执行，yield 相关", 
                "last_reply_at": "2016-07-21T11:57:30.204Z"
            }, 
            {
                "id": "578d8401992ec53c14676770", 
                "author": {
                    "loginname": "blackjack", 
                    "avatar_url": "//gravatar.com/avatar/66f5e67f825ebdfcc60d3e22cb4e14b5?size=48"
                }, 
                "title": "请问 vue里面怎么v-if 直接就 v-else ，怎么没有v-ifelse", 
                "last_reply_at": "2016-07-21T01:34:57.996Z"
            }, 
            {
                "id": "578c402b992ec53c1467671c", 
                "author": {
                    "loginname": "Prumeth-shen", 
                    "avatar_url": "https://avatars.githubusercontent.com/u/20083353?v=3&s=120"
                }, 
                "title": "三目运算符在js中应用有何缺陷", 
                "last_reply_at": "2016-07-18T07:58:08.397Z"
            }
        ]
    }
			}
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
	}
	.right{
		float: right;
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