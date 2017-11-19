<template>
	<div>
		<slot></slot>
		<slot name="redContents"></slot>
	</div>
</template>

<script>
export default {
	// activated와 deactivated는 keep-alive 사용시에만 호출됨
	activated: function() {
		console.log('Red Template activated.');
	},
	deactivated: function() {
		console.log('Red Template deactivated.');
	},
	// destroyed는 keep-alive 미사용시에만 호출됨
	destroyed: function() {
		console.log('Red Template destroyed.');
	}
}
</script>

<style scoped>
div {
	border: 1px solid red;
	background-color: lightcoral;
	padding: 30px;
	margin: 20px auto;
	text-align: center
}
</style>