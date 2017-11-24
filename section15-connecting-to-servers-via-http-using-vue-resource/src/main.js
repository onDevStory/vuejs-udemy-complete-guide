import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource); // $http 사용하려면 필수

// http global config (not $http)
// https://github.com/pagekit/vue-resource/blob/develop/docs/config.md
Vue.http.options.root = 'https://vuejs-http-a88d5.firebaseio.com';

new Vue({
	el: '#app',
	render: h => h(App)
})