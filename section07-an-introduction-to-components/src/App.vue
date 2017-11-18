<template>
	<div class="container">
		<app-header></app-header>
		<hr>
		<div class="row">
			<app-servers></app-servers>
			<app-server-details></app-server-details>
		</div>
		<hr>
		<app-footer></app-footer>
	</div>
</template>

<script>
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';
import Servers from './components/server/Servers.vue';
import ServerDetail from './components/server/ServerDetail.vue';

export default {
	components: {
		'app-header': Header,
		'app-servers': Servers,
		'app-server-details': ServerDetail,
		'app-footer': Footer
	}
}
</script>