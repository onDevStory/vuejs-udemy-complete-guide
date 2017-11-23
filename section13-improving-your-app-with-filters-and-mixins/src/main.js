import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value) {
	return value.toLowerCase();
});

// not shared
Vue.mixin({
	created() {
		console.warn('Global Mixin is Created');
	}
});

new Vue({
	el: '#app',
	render: h => h(App),
	created() {
		console.warn('1st. new Vue() is created ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ')
	}
})