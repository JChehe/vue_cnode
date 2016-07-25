<template>
  <div id="app" :class="{ 'offcanvas-page': isShowSidebar, 'show-offcanvas': isShowSidebar}" >
    <vSidebar :is-show-sidebar.sync="isShowSidebar" :current-view.sync="currentView" :tab.sync="tab"></vSidebar>  
    <main>
      <vheader :title="title" :is-show-sidebar.sync="isShowSidebar"></vheader>
      
      <div id="content">
        <component  :post-id.sync="postId" :is="currentView" :current-view.sync="currentView" :tab.sync="tab">
          <vlist></vlist>
          <vpost></vpost>
          <vabout></vabout>
          <vmessage></vmessage>  
          <vlogin></vlogin>
          <vperinfo></vperinfo>
          <vnewpost></vnewpost>
        </component>
      </div>
    </main>
  </div>
</template>

<script>
import vheader from './components/vHeader'
import vsidebar from './components/vSidebar'
import vlist from './components/vList'
import vpost from './components/vPost'
import vabout from './components/vAbout'
import vmessage from './components/vMessage'
import vperinfo from './components/vPerInfo'
import vnewpost from './components/vNewPost'
import vlogin from './components/vLogin'

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
    vlogin: vlogin
  },
  data: function(){
    return {
      title: "hahaha",
      isShowSidebar: false,
      currentView: "vlist",
      postId: "",
      tab: "all"
    }
  },
  watch:{
    isShowSidebar: function(){
      if(this.isShowSidebar){
        document.body.style.position = "fixed"
      }else{
        setTimeout(function(){
          document.body.style.position = "static"
        }, 300)
      }
    }
  }
}
</script>

<style>
  
  #app{
    width: 100%;
  }
  #content{
    padding-top: 44px;
  }
  #app.show-offcanvas .offcanvas{
    visibility: visible;
  }
  
  #app.show-offcanvas .offcanvas {
    background-color: rgba(0, 0, 0, .5);
  }
  
  #app.show-offcanvas main {
    -webkit-transform: translateX(270px);
    -ms-transform: translateX(270px);
    -o-transform: translateX(270px);
    transform: translateX(270px);
  }
  
  #app.show-offcanvas .offcanvas-bar {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  

</style>
