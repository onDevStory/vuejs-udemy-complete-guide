<template>
	<div class="col-xs-12 col-sm-6">
		<ul class="list-group">
			<app-server v-for="(server, idx) in servers" :server="server" @click.native="clickServer(idx)"></app-server>
		</ul>
	</div>
</template>

<script>
import Server from './Server.vue';
import {evt} from '../../event';

export default {
	components: {
		'app-server': Server
	},
	data: function() {
		return {
			statusType: ['Normal', 'Critical', 'Unknow', 'Normal'],
			servers: [
				{id: 1, status: 'Normal'},
				{id: 2, status: 'Critical'},
				{id: 3, status: 'Unknown'},
				{id: 4, status: 'Normal'}
			]
		}
	},
	created: function() {
		var _this = this;
		setInterval(function() {
			var randomServerId = Math.floor(Math.random() * 3);
			var randomServerStatus = Math.floor(Math.random() * 3);
			_this.servers[randomServerId].status = _this.statusType[randomServerStatus];
		}, 5000);
	},
	mounted: function() {
		this.clickServer(0); // init ServerDetails
	},
	methods: {
		clickServer(idx) {
			evt.clickServer(this.servers[idx]);
		}
	}
}
</script>

<style>

</style>
