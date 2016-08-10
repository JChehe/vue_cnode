<template>
	<ul>
		<li>
			<h4>关于项目</h4>
			<p>该项目是我出于学习实践的目的，采用Vue.js（1.0），并基于CNodejs.org的API编写的Web App。</p>

		</li>
		<li>
			<h4>源码地址</h4>
			<p><a href="https://github.com/JChehe/vue_cnode" target="_blank">https://github.com/JChehe/vue_cnode</a></p>
		</li>
		<li>
			<h4>意见反馈</h4>
			<p><a href="https://github.com/JChehe/vue_cnode/issues" target="_blank">发表意见或者提需求</a></p>
		</li>
		<li>
			<h4>当前版本</h4>
			<p>V1.0 beta</p>
		</li>
	</ul>
</template>

<script>
	export default {
		props: {
			isShowSidebar: {
				type: Boolean,
				twoway: true
			}
		},
		created(){
			this.isShowSidebar = false
		}
	}
</script>

<style scoped>
	ul{
		padding: 0 15px 0;
		background-color: #f7f7f7
	}
	ul li{
		padding: 15px 0;
	}
	ul li:not(:last-child){
		border-bottom: 1px solid #d5dbdb;

	}
	ul li h4{
		font-size: 16px;
		line-height: 1.5;
		color: #2c3e50;
		margin-bottom: 8px;
	}
	ul li h4+p{
		font-size: 14px;
		margin-bottom: 0
	}
</style>