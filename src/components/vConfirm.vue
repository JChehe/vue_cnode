<template>
	<div class="confirm" v-show="isShowConfirm" transition="confirm">
		<div class="confirm-dialog">
			<div class="confirm-body">
				<slot name="body"></slot>
			</div>
			<div class="confirm-footer clearfix">
				<slot name="footer">
					<div class="cancelBtn" @click="hide">取消</div>
					<div class="confirmBtn" @click="confirmHandler">确认</div>
				</slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props: {
			isShowConfirm: {
				type: Boolean,
				required: true,
				twoWay: true
			},
			isShowSidebar: {
				type: Boolean,
				required: true,
				twoWay: true
			},
			isLogin:{
				type: Boolean,
				required: true,
				twoWay: true
			}
		},
		methods: {
			hide(){
				this.isShowConfirm = false
			},
			confirmHandler(){
				localStorage.loginname = localStorage.avatar_url = localStorage.user_id = localStorage.accesstoken = ""
				this.isShowConfirm = false
				this.isShowSidebar = false
				this.isLogin = false
				this.$route.router.go({path: "/list"})
			}
		}
	}
</script>

<style scoped>
	.confirm{
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: rgba(0,0,0,.2);
		z-index: 1002
	}
	.confirm-body{
		padding: 15px 15px 0;
	}
	.confirm-dialog{
		width: 50%;
		max-width: 360px;
		margin: 0 auto;
		position: absolute;
		top: 50%;
		left: 50%;
		/*padding: 15px;*/
		border-radius: 5px;
		background-color: #fff;
		transform: translate(-50%, -50%) scale(1);
		transition: all .3s
	}
	.confirm-footer{
		border-top: 1px solid rgba(0,0,0,.2)
	}
	
	.cancelBtn:after{
		content: "";
		display: block;
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		width: 1px;
		background-color: rgba(0,0,0,.2);
	}
	.cancelBtn,.confirmBtn{
		width: 50%;
		float: left;
		text-align: center;
		line-height: 36px;
		position: relative;
		cursor: pointer;
	}
	
	.confirm-transition{
		transition: all .3s
	}
	.confirm-enter, .confirm-leave {
	  opacity: 0;
	}

	.confirm-enter .confirm-dialog,
	.confirm-leave .confirm-dialog {
	  -webkit-transform: translate(-50%, -50%) scale(1.1);
	  transform: translate(-50%, -50%) scale(1.1);
	}

</style>