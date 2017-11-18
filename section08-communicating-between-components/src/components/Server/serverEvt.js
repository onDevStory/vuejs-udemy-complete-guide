import Vue from 'vue';

export const evt = new Vue({
	methods: {
		initServerDetail(server) {
			this.$emit('initServerDetail', server);
		},
		clickServer(server) {
			this.$emit('clickServer', server);
		}
	}
});