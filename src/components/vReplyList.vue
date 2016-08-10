<template>
	<div class="reply-list">
  	<div class="header">
    	<h4>评论 已有<span> {{replies.length}} </span>回复</h4>
  	</div>
  	<ul v-if="replies.length > 0">
  		<li v-for="reply in replies">
  			<div class="user">
          <div class="right">
          	<div class="like-btn" @click="toggleUps($index)">
          		<i class="iconfont">&#xe60a;</i>{{reply.ups.length}}
          	</div>
          	<div class="reply-btn" @click="toggleReply($index)">
          		<i class="iconfont">&#xe60b;</i>
          	</div>
          </div>
          <vuserpanel :avatar="reply.author.avatar_url">
            <p slot="one">{{reply.author.loginname}}</p>
            <p slot="two">回复时间：{{reply.create_at | getLastTimeStr true}}</p>
          </vuserpanel>
  			</div>
  			<div class="reply-content">
  				{{{reply.content}}}
  			</div>
  			<div class="reply-form" v-if="reply.isShowReply">
  				<form @submit.prevent="replyToComment($index)">
            <textarea v-model="replyContent">@{{reply.author.loginname}} </textarea>
            <button type="submit">确定</button>    
          </form>
  			</div>
  		</li>
		</ul>
	</div>
</template>

<script>	
import api from "../api"
import vuserpanel from "../components/vUserPanel"

export default {
  components: {
    vuserpanel
  },
	data(){
		return{
      replyContent: ""
		}
	},
	props: {
		replies: {
			type: Array,
			required: true
		},
    accesstoken: {
      type: String,
      required: true
    },
    topicId: {
      type: String,
      required: true
    },
    loginname: {
      type: String,
      required: true
    }
	},

	methods: {
		toggleReply(index){
      
      var reply = this.replies[index] 
      this.replies.forEach((r, i) => {
        if (i !== index){
          r.isShowReply = false
        }
      })
      reply.isShowReply = !reply.isShowReply
		},

    replyToComment(index){
      if(!this.$root.isLogin){
        var link = "/login?redirect=" + encodeURIComponent(this.$route.path)
        this.$route.router.go(link)
        return;
      }


      var replyId = this.replies[index].id

      api.reply.newReply({
        accesstoken: this.accesstoken,
        topic_id: this.topicId,
        content: this.replyContent,
        reply_id: replyId
      }, (data) => {
        if(data.success){
          // self.getTopic() // 更新数据
          this.$parent.getTopic(this.topicId)
        }
      })
    },
    toggleUps(index){
      if(!this.$root.isLogin){
        var link = "/login?redirect=" + encodeURIComponent(this.$route.path)
        this.$route.router.go(link)
        return;
      }

      
      var reply = this.replies[index]
      
      if(this.loginname !== reply.author.loginname){
        api.reply.ups({
          reply_id: reply.id,
          accesstoken: this.accesstoken
        }, (data) => {
          if(data.success){
            if(data.action === "down"){
              var index = reply.ups.indexOf(this.topicId);
              reply.ups.splice(index, 1)
            }else{
              reply.ups.push(this.topicId);
            }
          }
        })
      }else{
        alert("不能为自己点赞哦。^_^")
      }
      
    }
	}
}
</script>

<style scoped>
	.left{
		float: left;
		overflow: hidden;
	}
	.left img+div{
		float: right;
	}
	.right{
		float: right;
	}
	.reply-list{
		margin-top: 15px;
	}
	.reply-list .header{
		background-color: #f6f6f6;
		padding: 10px;
		border-radius: 3px 3px 0 0;
	}
  .reply-list .header h4{
    margin-bottom: 0;
  }
	.like-btn, .reply-btn{
		float: left;
	}
	.like-btn{
		margin-right: 6px;
	}
  .reply-btn{
    margin-top: 2px
  }

	.reply-list ul li{
		padding: 6px;
		border-bottom: 1px solid #f0f0f0;
		overflow: hidden;
	}
	.reply-form{
		clear: both;
	}
	.reply-form textarea{
		width: 100%;
		resize: none;
		margin-top: 12px;
		border: 1px solid #d5dbdb;
		border-radius: 3px;
    height: 60px;
    display: block;
    margin-bottom: 5px;
	}
	.reply-form textarea+button{
    width: 80px;
		color: #fff;
		border: 0;
		line-height: 28px;
	}
	.left p{
		font-size: 14px;
		line-height: 1.6;
	}
	.reply-list .left img{
		width: 32px;
		height: 32px;
		margin-top: 6px;
	}

	.user{
		overflow: hidden;
		margin: 10px 0;
	}
  

</style>
