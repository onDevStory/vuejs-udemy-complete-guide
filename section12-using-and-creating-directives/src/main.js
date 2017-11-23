import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
	bind(el, binding, vnode) {
		var delay = 0;
		if (binding.modifiers['delayed']) {
			delay = 3000;
		}
		setTimeout(() => {
			if (binding.arg == 'background') {
				el.style.backgroundColor = binding.value;
			} else {
				el.style.color = binding.value;
			}
		}, delay);
	}
});

Vue.directive('customOn', {
	bind(el, binding) {
		// 1st
		// el.onclick = function () {
		// 	binding.value();
		// }

		// evolved
		const type = binding.arg;
		const fn = binding.value;
		el.addEventListener(type, fn);
	}
});

new Vue({
	el: '#app',
	render: h => h(App)
})