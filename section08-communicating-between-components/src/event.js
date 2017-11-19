import Vue from 'vue';

export const evt = new Vue({
	methods: {
		clickServer(server) {
			this.$emit('clickServer', server);
		}
	}
});