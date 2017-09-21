// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import Home from './components/index.vue'
import B1 from './components/背景和边框/半透明边框.vue'
import B2 from './components/背景和边框/多重边框.vue'
import B3 from './components/背景和边框/灵活的背景定位.vue'
import B4 from './components/背景和边框/边框内圆角.vue'
import B5 from './components/背景和边框/条纹背景.vue'
import B6 from './components/背景和边框/复杂的背景图案.vue'
import B7 from './components/背景和边框/伪随机背景.vue'
import B8 from './components/背景和边框/连续的图像边框.vue'


Vue.use(VRouter)
Vue.config.productionTip = false


let router = new VRouter({
	hashbang: true,
	history: false,
	routes: [
		{
			path: '/',
			redirect: '/home'
		},{
			path: '/home',
			component: Home,
		},{
			path: '/home/b1',
			component: B1
		},
		{
			path: '/home/b2',
			component: B2
		},
		{
			path: '/home/b3',
			component: B3
		},
		{
			path: '/home/b4',
			component: B4
		},
		{
			path: '/home/b5',
			component: B5
		},
		{
			path: '/home/b6',
			component: B6
		},
		{
			path: '/home/b7',
			component: B7
		},
		{
			path: '/home/b8',
			component: B8
		}
	]
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})