<template>
	<div>
    <div class="post-header">
    	<h3>{{post.title}}</h3>
      <div class="left">
        <img :src="post.author.avatar_url" alt="">
        <div>
          <p class="author">{{post.author.loginname}}</p>
          <p class="post_time">发帖时间：{{post.create_at}}</p>
        </div>
      </div>
      <div class="right">
        <p class="tab top">{{tabToName(post.tab)}}</p>
        <p>{{post.visit_count}}次浏览</p>
      </div>
    </div>
    <div class="post-content">
      {{{post.content}}}
    </div>
    <vreplylist :replies="post.replies"></vreplylist>
  </div>
</template>

<script>
	import api from "../api"
  import vReplyList from "./vReplyList"

	export default {
    components: {
      vreplylist: vReplyList
    },
		data: function(){
      return {
        post: {}
      }
		},
		props:{
      postId: {
        type: String,
        required: true
      }
		},
		created: function(){
        var self = this;
        api.topic.getTopic({
          _id: self.postId
        }, function(data){
          console.log(data)
          self.post = data.data
        })
		},
    watch: {
      postId: function(){
        console.log("ahhaa")
        // var self = this;
        // api.topic.getTopic({
        //   _id: self.postId
        // }, function(data){
        //   console.log(data)
        //   self.post = data.data
        // })
      }
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
    }
	}
</script>


<style scoped>
  .tab{
      border-radius: 4px;
      padding: 4px 6px;
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


	.post-header{
    overflow: hidden;
  }
  .post-header h3{
    margin-bottom: 15px;
    line-height: 1.5
  }
  .post-header{
    padding: 6px 8px
  }
  .post-header{
    border-bottom: 1px solid #e5e5e5
  }
  .post-header p{
    font-size: 14px;
    line-height: 1.6
  }
  .post-content{
    padding: 10px;
    margin: 0 10px;
  }
  .post-content a{
    color: #4078c0;
    text-decoration: none;
  }
  .post-content a:hover{
    text-decoration: underline;
  }
  .post-content ul{
    list-style: inside disc;
    line-height: 1.42
  }
  .post-content h1{
    font-size: 32.5px;
    margin: 30px 0 15px;
    border-bottom: 1px solid #eee
  }
  .post-content p{
    font-size: 15px;
    line-height: 1.6
  }
  .left{
    float: left;
  }
  .right{
    float: right;
  }
</style>