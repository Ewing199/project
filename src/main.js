// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import '../src/assets/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import '../src/assets/bootstrap-3.3.7-dist/js/bootstrap.min.js'
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Qs from 'qs'
// import '../static/js/validate'

axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'
Vue.use(VueAxios,axios)
Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
