<template>
	<div class="offcanvas" @click="hide">
    <nav class="offcanvas-bar" @click.stop>
      <div class="logo">
        <img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="">
      </div>
      <ul v-for="items in itemSet">
      	<li v-for="item in items" @click="changeView(item.view),changeTab(item.tab)">
      		<a href="javascript:;">
      			<i class="iconfont">{{{item.icon}}}</i>
	      		{{item.name}}
      		</a>
      	</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default{
	data:function(){
		return {
			itemSet:[
				[{
					icon: "&#xe602;",
					name: "全部",
          view: "vlist",
          tab: "all"
				},{
					icon: "&#xe605;",
					name: "精华",
          view: "vlist",
          tab: "good"
				},{
					icon: "&#xe600;",
					name:"分享",
          view: "vlist",
          tab: "share"
				},{
					icon: "&#xe608;",
					name: "问答",
          view: "vlist",
          tab: "ask"
				},{
					icon: "&#xe606;",
					name: "招聘",
          view: "vlist",
          tab: "job"
				}],[{
					icon: "&#xe607;",
					name: "消息",
          view: "vmessage"
				},{
					icon: "&#xe608;",
					name: "关于",
          view: "vabout"
				}],[{
          icon: "&#xe608;",
          name: "个人信息",
          view: "vperinfo"
        },{
          icon: "&#xe608;",
          name: "登录",
          view: "vlogin"
        },{
          icon: "&#xe608;",
          name: "发帖",
          view: "vnewpost"
        }]
			]
		}
	},
	props:{
		isShowSidebar:{
			type:Boolean,
			required: true
		},
    currentView: {
      type: String,
      required: true,
      twoway: true
    },
    tab: {
      type: String,
      twoway: true
    }
	},
	methods:{
		hide: function(){
			this.isShowSidebar = false
		},
    changeView: function(view){
      this.currentView = view
    },
    changeTab: function(tab){
      this.tab = tab;
    }
	}
}
</script>

<style scoped>
	.offcanvas {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    visibility: hidden;
    z-index: 1001;
  }
  
  .offcanvas .logo {
    text-align: center;
    padding: 14px 24px;
    box-shadow: 0 1px 0 rgba(0, 0, 0, .5), 0 2px 0 rgba(0, 0, 0, .2);
  }
  
  .offcanvas .logo img {
    width: 60%;
  }
  
  .offcanvas-bar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 270px;
    background-color: #ccc;
    max-width: 100%;
    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
    -webkit-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
  }
  
  .offcanvas-bar ul {
    padding: 0px 24px;
    margin-top: 14px;
  }
  
  .offcanvas-bar ul li {
    line-height: 1.8;
    padding: 4px;
  }
  .offcanvas-bar ul li a{
  	display: block;
  }
  .offcanvas .iconfont {
    margin-right: 8px;
  }
  
  .offcanvas a {
    color: #7f8c8d;
    text-decoration: none;
  }
  
  .offcanvas-bar ul:nth-of-type(2) li:first-child {
    box-shadow: 0 -1px 0 #aaa, 0 -2px 0 #333;
  }




</style>