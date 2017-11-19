<template>
	<div>
		<!-- <h3><b>COMMON NOTICE</b></h3> 와 매핑-->
		<slot></slot>
		<!-- <p slot="blueContents">{{blueContents?blueContents:noContents}}</p> 와 매핑 -->
		<slot name="blueContents"></slot>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			contents: 'No contents',
		}
	},
	// activated와 deactivated는 keep-alive 사용시에만 호출됨
	activated: function() {
		// load contents
		console.log('Blue Template activated.');
	},
	deactivated: function() {
		console.log('Blue Template deactivated.');
	},
	// destroyed는 keep-alive 미사용시에만 호출됨
	destroyed: function() {
		console.log('Blue Template destroyed.');
	}
}
</script>

<style scoped>
div {
	border: 1px solid blue;
	background-color: lightblue;
	padding: 30px;
	margin: 20px auto;
	text-align: center
}
</style>