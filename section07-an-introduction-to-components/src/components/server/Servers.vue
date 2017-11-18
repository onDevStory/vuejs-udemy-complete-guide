<template>
	<div class="col-xs-12 col-sm-6">
		<ul class="list-group">
			<app-server v-for="index in 5" :index="index"></app-server>
		</ul>
	</div>
</div>
</template>

<script>
import Server from './Server.vue';

export default {
	components: {
		'app-server':Server
	}
}
</script>