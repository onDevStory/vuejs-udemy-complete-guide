<template>
	<li class="list-group-item" @click="clickServer(server)">
		Server #{{server.id}} {{updated}}
	</li>
</template>

<script>
import {evt} from './serverEvt';

export default {
	props: {
		server: Object
	},
	data: function() {
		return {
			updated: ''
		}
	},
	methods: {
		clickServer: function(server) {
			evt.clickServer(server);
		}
	},
	watch: {
		server: {
			deep: true, // if data is Object
			handler: function(oldVal, newVal) {
				var _this = this;
				this.updated = 'updated';
				setTimeout(function() {
					_this.updated = '';
				}, 3000);
			}
		}
	}
}
</script>

<style>
	li {
		cursor: pointer
	}
</style>