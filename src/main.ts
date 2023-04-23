// import { createApp } from 'vue'
import Vue from 'vue'
import App from './app.vue'

// createApp(App).mount('#app')
Vue.config.productionTip = false

// to change to vue3 install these and remove vue 2 also change this file and use vue-demi. This is demo
// "vue": "2.7.14",
// "@vitejs/plugin-vue": "^3.2.0",

new Vue({
  render: h => h(App),
}).$mount('#app')
