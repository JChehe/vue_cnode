<template>
  <div id="app" :class="{ 'offcanvas-page': isShowSidebar, 'show-offcanvas': isShowSidebar}" >
    <vSidebar :is-show-sidebar.sync="isShowSidebar" :is-show-confirm.sync="isShowConfirm" :is-login.sync="isLogin" :title.sync="title" :avatar_url.sync="avatar_url" :loginname.sync="loginname" :unread-count.sync="unreadCount"></vSidebar>  
    <main>
      <vheader :title="title" :is-show-sidebar.sync="isShowSidebar" :show.sync="showConfirm"></vheader>
      <div id="content">
        <router-view :is-show-sidebar.sync="isShowSidebar" :is-login.sync="isLogin" :avatar_url.sync="avatar_url" :loginname.sync="loginname" :accesstoken.sync="accesstoken" :unread-count.sync="unreadCount" keep-alive></router-view>
      </div>
    </main>
    <vconfirm :is-show-confirm.sync="isShowConfirm" :is-show-sidebar.sync="isShowSidebar" :is-login.sync="isLogin">
      <h3 slot="body">确认注销当前账号吗？</h3>
    </vconfirm>
  </div>
</template>

<script>
import api from "./api"

import vheader from './components/vHeader'
import vsidebar from './components/vSidebar'
import vlist from './views/vList'
import vpost from './views/vTopic'
import vabout from './views/vAbout'
import vmessage from './views/vMessage'
import vperinfo from './views/vPerInfo'
import vnewpost from './views/vNewTopic'
import vlogin from './views/vLogin'
import vconfirm from './components/vConfirm'

export default {
  components: {
    vheader: vheader,
    vsidebar: vsidebar,
    vlist: vlist,
    vpost: vpost,
    vabout: vabout,
    vmessage: vmessage,
    vperinfo: vperinfo,
    vnewpost: vnewpost,
    vlogin: vlogin,
    vconfirm: vconfirm
  },
  data: function(){
    return {
      title: "",
      isShowSidebar: false,
      currentView: "vlist",
      postId: "",
      tab: "all",
      isShowConfirm: false,
      isLogin: localStorage.loginname ? true : false,
      loginname: localStorage.loginname,
      avatar_url: localStorage.avatar_url,
      accesstoken: localStorage.accesstoken,
      unreadCount: 0,
      scrollTop: 0
    }
  },
  created: function(){
    var temTitle = "";
    if(this.accesstoken){
      this.getUnreadCount()
    }
    // this.$route.router.beforeEach((transition) => {
    //   this.scrollTop = 0
    // })
    this.$route.router.afterEach((transition) => {
     
      var router = transition.to
      var routerName = router.name.trim()
      if(routerName === "list"){
        switch (router.query.tab){
          case "all": temTitle = "全部"; break;
          case "good": temTitle = "精华"; break;
          case "share": temTitle = "分享"; break;
          case "ask": temTitle = "问答"; break;
          case "job": temTitle = "招聘"; break;
          default: temTitle = "全部";
        }
      }else{
        if(routerName === "message") temTitle = "消息"
        else if(routerName === "about") temTitle = "关于"
        else if(routerName === "perinfo") temTitle = "个人信息"
        else if(routerName === "login") temTitle = "登录"
        else if(routerName === "newtopic") temTitle = "发帖"
      }
      this.title = temTitle
      this.scrollTop = 0
    })
  },
  compiled: function(){
    console.log("aasdadasds")
  },
  watch:{
    isShowSidebar: function(){
      if(this.isShowSidebar){
        this.scrollTop = document.body.scrollTop
        console.log(document.body.scrollTop)
        document.body.style.marginTop = -this.scrollTop + "px"
        document.querySelector("header").style.marginTop = this.scrollTop + "px"
        document.body.style.position = "fixed"
      }else{

        setTimeout(() => {
          document.body.style.position = "static"
          document.querySelector("header").style.marginTop = 0 + "px"
          document.body.style.marginTop = 0 + "px"
          document.body.scrollTop = this.scrollTop

        }, 300)
      }
    }
  },
  methods: {
    showConfirm: function(){
      this.isShowConfirm = !this.isShowConfirm
    },
    getUnreadCount(){
      api.message.unreadCount({
        accesstoken: this.accesstoken
      },(data) => {
        this.unreadCount = data.data
      })
    }
  }
}
</script>

<style>
  
  #app{
    width: 100%;
  }
  #content{
    padding: 58px 5px 10px;
  }
  #app.show-offcanvas .offcanvas{
    visibility: visible;
  }
  #app.show-offcanvas .offcanvas {
    background-color: rgba(0, 0, 0, .3);
  }
  #app.show-offcanvas main {
    -webkit-transform: translateX(235px);
    -ms-transform: translateX(235px);
    -o-transform: translateX(235px);
    transform: translateX(235px);
  }
  
  #app.show-offcanvas .offcanvas-bar {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
</style>
