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
		watch :{
			isShowConfirm: function(){
				console.log("confirm")
			}
		},
		methods: {
			hide: function(){
				this.isShowConfirm = false
			},
			confirmHandler: function(){
				localStorage.loginname = localStorage.avatar_url = localStorage.user_id = localStorage.accesstoken = ""
				this.isShowConfirm = false
				this.isShowSidebar = false
				this.isLogin = false
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
		margin: 10% auto 0;
		/*padding: 15px;*/
		border-radius: 5px;
		background-color: #fff;
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

	.confirm-enter, .confirm-leave {
  opacity: 0;
}

.confirm-enter .confirm-container,
.confirm-leave .confirm-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>