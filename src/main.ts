// import Vue from 'vue'
import {createApp} from 'vue'
import App from './app.vue'
import VueCoolBox from './index'

// vue 3

// vue 2

// vue2:
// "vue": "2.7.14",
// "@vitejs/plugin-vue2": "^2.2",
// also update vite.config

// vue 2
// Vue.config.productionTip = false
// new Vue({
//   render: h => h(App),
// }).$mount('#app')

createApp(App)
  .use(VueCoolBox)
  .mount('#app') // // vue 3 mount should be last
