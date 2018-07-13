import Vue from 'vue'
import vueResource from 'vue-resource'
import Router from 'vue-router'
import App from './App.vue'
import index from './routers/index'
import veeValidate from 'vee-validate'

Vue.use( veeValidate )
Vue.use( Router )
Vue.use( vueResource )
Vue.config.productionTip = false

const indexRouter = new Router({
	routes: index,
	mode: 'history'
})
new Vue({
  el    : '#app',
  render: h => h(App),
  router: indexRouter
})
