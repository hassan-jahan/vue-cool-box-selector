import Vue from 'vue'
import App from './app.vue'

// vue 3
// import { createApp } from 'vue'

// vue 2

// vue2:
// "vue": "2.7.14",
// "@vitejs/plugin-vue2": "^2.2",
// also update vite.config

// vue 2
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')

// vue 3
// createApp(App).mount('#app')
