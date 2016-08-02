<template>
	<div>
    <div class="topic-header">
    	<h3>{{topic.title}}</h3>
      <vuserpanel :avatar="topic.author.avatar_url">
            <p slot="one">{{topic.author.loginname}}</p>
            <p slot="two">发布时间：{{topic.create_at | getLastTimeStr true}}</p>
          </vuserpanel>

    
      <div class="right">
        <p class="tab top">{{tabToName(topic.tab)}}</p>
        <p>{{topic.visit_count}}次浏览</p>
      </div>
    </div>
    <div class="topic-content">
      {{{topic.content}}}
    </div>
    <vreplylist :replies="topic.replies" :topic-id="topic.id"></vreplylist>
    <div>
      <form @submit.prevent="replyHandler" class="reply-form">
        <textarea v-model="replyContent"></textarea>
        <button type="submit">回复</button>
      </form>
    </div>
  </div>
</template>

<script>
	import api from "../api"
  import vReplyList from "../components/vReplyList"
  import vUserPanel from "../components/vUserPanel"
	export default {
    components: {
      vreplylist: vReplyList,
      vuserpanel: vUserPanel
    },
		data: function(){
      return {
        topic: {},
        replyContent: ""
      }
		},
   
		created: function(){
        // this.getTopic()
		},
    watch: {
      topicId: function(){
        
      }
    },
    route: {
      data: function(transition){
        var topicId = transition.to.params.id
        console.log("As")
        this.getTopic(topicId)
      }
    },
    methods:{
      tabToName: function(tab){
        var name = "";
        switch(tab) {
          case "good": name = "置顶"; break;
          case "ask": name = "问答"; break;
          case "share": name = "分享"; break;
          case "job": name = "招聘"; break;
          default: name="未能识别"
        }
        return name;
      },
      getTopic: function(id){
        var self = this;
        
        api.topic.getTopic({
          _id: id
        }, function(data){
          data.data.replies.forEach(function(reply, index){
            reply.isShowReply = false
          })
          self.topic = data.data
        })
      },
      replyHandler: function(){
        var self = this

        api.reply.newReply({
          accesstoken: "5f9f0171-db81-4578-8af4-9033031b69c2",
          topic_id: self.topicId,
          content: self.replyContent
        }, function(data){
          if(data.success){
            self.getTopic() // 更新数据
          }
        })
      }
    }
	}
</script>


<style scoped>
  .tab{
      border-radius: 4px;
      padding: 2px 6px;
      color: #fff;
      font-size: 14px;
      margin-right: 6px;
      text-align: center;
  }
  .top.tab {
    background-color: #E74C3C
  }
  
  .share.tab {
    background-color: #1ABC9C
  }
  
  .job.tab {
    background-color: #9B59B6
  }
  
  .question.tab {
    background-color: #3498DB
  }

.reply-form textarea{
  min-height: 80px;
}
	.topic-header{
    overflow: hidden;
  }
  .topic-header h3{
    margin-bottom: 15px;
    line-height: 1.5
  }
  .topic-header{
    padding: 6px 8px
  }
  .topic-header{
    border-bottom: 1px solid #e5e5e5
  }
  .topic-header p{
    font-size: 14px;
    line-height: 1.6
  }

  .topic-header .right p{
    margin-bottom: 0;
  }
  .topic-content{
    padding: 20px 10px 10px;
    margin: 0 10px;
  }
  .topic-content a{
    color: #4078c0;
    text-decoration: none;
  }
  .topic-content a:hover{
    text-decoration: underline;
  }
  .topic-content ul{
    list-style: inside disc;
    line-height: 1.42
  }
  .topic-content h1{
    font-size: 32.5px;
    margin: 30px 0 15px;
    border-bottom: 1px solid #eee
  }
  .topic-content p{
    font-size: 15px;
    line-height: 1.6
  }
  .topic-header img{
    width: 44px;
    height: 44px;
    border-radius: 4px;
    margin-right: 6px
  }

  .left{
    float: left;
  }

  .right{
    float: right;
  }

</style>
<style>
  .markdown-text p{
    margin-bottom: 15px;
    white-space: pre-wrap;
    word-wrap: break-word;
    line-height: 1.7em;
 }
 .markdown-text img{
    vertical-align: middle;
 }
</style>