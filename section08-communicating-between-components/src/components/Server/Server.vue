<template>
	<li class="list-group-item">
		Server #{{server.id}} {{updated}}
	</li>
</template>

<script>
import {evt} from '../../event';

export default {
	props: {
		server: Object
	},
	data: function() {
		return {
			updated: ''
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