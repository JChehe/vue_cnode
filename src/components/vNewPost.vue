<template>
	<form>
		<div class="form-group">
			<label>
				<select>
					<option value="">分享</option>
				</select>
			</label>
		</div>
		<div class="form-group">
			<input type="text" name="title" placeholder="标题，字数10字以上">
		</div>
		<div class="form-group">
			<textarea placeholder="支持Markdown语法"></textarea>
		</div>
		<button type="button">发布</button>
	</form>
</template>

<script>
	export default{

	}
</script>

<style scoped>
	textarea{
		width: 100%;
		min-height: 260px;
	}
	.form-group{
		width: 100%;
	}
	button{
		background-color: #80bd01;
		border: 0;
		color: #fff;
		max-width: 120px;
		width: 60%;
		height: 26px;
		border-radius: 5px;
	}
</style>