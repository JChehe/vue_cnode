<template>
	<div class="userPanel">
		<img :src="avatar" alt="">
		<div>
			<slot name="one"></slot>
			<slot name="two"></slot>
		</div>
	</div>
</template>

<script>
	export default{
		props: {
			avatar: {
				type: String,
				required: true
			}
		}
	}
</script>

<style scoped>
	div{
		/*float: left;*/
	}
	img{
		float: left;
		width: 44px;
		height: 44px;
		border-radius: 4px;
		margin-right: 6px;
	}
	div p{
		margin-bottom: 0;
		line-height: 22px;
	}

</style>
<style>
	.userPanel p{
		margin-bottom: 0;
		line-height: 22px;
	}

	.userPanel div>p:first-child{
		cursor: pointer;
	}
</style>