import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource); // $http 사용하려면 필수

new Vue({
	el: '#app',
	render: h => h(App)
})