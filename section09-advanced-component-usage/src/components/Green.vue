<template>
	<div>
		<slot></slot>
		<slot name="greenContents"></slot>
	</div>
</template>

<script>
export default {
	// activated와 deactivated는 keep-alive 사용시에만 호출됨
	activated: function() {
		console.log('Green Template activated.');
	},
	deactivated: function() {
		console.log('Green Template deactivated.');
	},
	// destroyed는 keep-alive 미사용시에만 호출됨
	destroyed: function() {
		console.log('Green Template destroyed.');
	}
}
</script>

<style scoped>
div {
	border: 1px solid green;
	background-color: lightgreen;
	padding: 30px;
	margin: 20px auto;
	text-align: center
}
</style>