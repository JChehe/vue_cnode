<template>
	<header>
      <div class="navbar-toggle" id="show-offcanvas" @click="toggleSidebar">
        <i class="iconfont">&#xe601;</i>
      </div>
      <div class="send-btn" title="发帖" v-link="{path: '/newtopic'}">
        <i class="iconfont">&#xe609;</i>
      </div>
      <h2>{{title}}</h2>
    </header>
</template>


<script>
	export default{
		data(){
			return {

			}
		},
		props: {
			title: {
				type: String,
				default: "CNode.js",
				required: true
			},
      isShowSidebar: {
        type: Boolean,
        default: false,
        required: true,
        twoway: true
      }
		},
    methods:{
      toggleSidebar(){
        this.isShowSidebar = true
      }
    }
  }
</script>

<style scoped>
	header {
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    line-height: 44px;
    position: fixed;
    left: 0;
    right: 0;
  }
  
  header h2 {
    text-align: center;
    font-size: 16px;
    margin-bottom: 0;
    line-height: 44px;
    font-weight: 400
  }
  
  .navbar-toggle {
    float: left;
    cursor: pointer;

  }
  
  header .iconfont {
    padding: 14px;
  }
  
  .send-btn {
    float: right;
    color: #42b983;
    cursor: pointer;
    vertical-align: bottom;
  }
  .send-btn i{
    font-size: 22px;
    padding-top: 11px;
    padding-bottom: 11px;
  }
  </style>
  

