<template>
	<div class="col-xs-12 col-sm-6">
		Server Id : {{server.id}}<br>
		Server Status : {{server.status}}
	</div>
</template>

<script>
import {evt} from '../../event';

export default {
	data: function(){
		return {
			server: {id:0, status:''}
		}
	},
	created: function() {
		evt.$on('clickServer', (server) => {
			this.server = server;
		});
	}
}
</script>