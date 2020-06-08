// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App'
import router from './router'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import VueColumnsResizable from './plugins/vue-columns-resizable';


Vue.config.productionTip = false
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)  
// Vue.use(VueColumnsResizable);

// Vue.component('BIcon', BIcon)
// Vue.component('BIconArrowUp', BIconArrowUp)
// Vue.component('BIconArrowDown', BIconArrowDown)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
