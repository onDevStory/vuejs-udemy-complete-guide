<template>
	<div>
		<div id="on" :class="{active: value}" @click="switched(true)">On</div>
		<div id="off" :class="{active: !value}" @click="switched(false)">Off</div>
	</div>
</template>

<script>
export default {
	props: {
		// form 양식이기 때문에 필드명은 value 여야만 함
		value: Boolean
	},
	methods: {
		switched(isOn) {
			this.$emit('input', isOn); // v-model 은 input 이벤트 발생 시 동기화됨
		}
	}
}
</script>

<style scoped>
#on, #off {
	width: 40px;
	height: 20px;
	background-color: lightgray;
	padding: 2px;
	display: inline-block;
	margin: 10px -2px;
	box-sizing: content-box;
	cursor: pointer;
	text-align: center;
}
#on:hover, #on.active {
	background-color: lightgreen;
}
#off:hover, #off.active {
	background-color: lightcoral;
}
</style>