<template>
	<div>
		<div class="form-group">
			<label for="firstName">firstName</label>
			<input type="text" id="firstName" class="form-control" :value="firstName" @input="valueChanged(1, $event)">
		</div>
		<div class="form-group">
			<label for="lastName">lastName</label>
			<input type="text" id="lastName" class="form-control" :value="lastName" @input="valueChanged(2, $event)">
		</div>
	</div>
</template>

<script>
export default {
	model: {
		prop: 'fullName',
		event: 'valueChanged'
	},
	props: {
		fullName: String
	},
	data: function() {
		return {
			firstName: '',
			lastName: '',
		}
	},
	methods: {
		valueChanged(type, event) {
			let value = event.target.value;
			if (type == 1) this.firstName = value;
			if (type == 2) this.lastName = value;
			this.$emit('valueChanged', this.firstName + ' ' + this.lastName); // model.event에 선언된 event명을 사용
		}
	}
}
</script>