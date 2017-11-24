import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource); // $http 사용하려면 필수

// http global config (not $http)
// https://github.com/pagekit/vue-resource/blob/develop/docs/config.md
Vue.http.options.root = 'https://vuejs-http-a88d5.firebaseio.com';

// http interceptor
Vue.http.interceptors.push((request, next) => {
	console.warn('Vue.http.interceptors: {}', request);
	if (request.method == 'POST') {
		request.method = 'PUT'; // firebase로 put요청 시에는 uuid를 만들지 않고, 데이터 자체를 override
	}

	// intercept response
	next(response => {
		response.json = () => {
			return {
				responseBody: response.body
			}
		}
	});
});

new Vue({
	el: '#app',
	render: h => h(App)
})