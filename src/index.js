import VueCoolBoxSelector from './components/vue-cool-box-selector.vue'
import CoolBoxItem from './components/cool-box-item.vue'

let installed = false

// Declare install function executed by Vue.use()
function install(Vue, opts = {}) {
  // Don't install more than once
  if (installed)
    return
  installed = true

  Vue.component('VueCoolBoxSelector', VueCoolBoxSelector)
  Vue.component('CoolBoxItem', CoolBoxItem)

  // Register components
  // Object.entries(components).forEach(([componentName, component]) => {
  //     Vue.component(`${defaults.componentPrefix}${componentName}`, component);
  // });

  // GLOBAL PROPS $test
  // const props = vue.observable({
  //     theme: options?.theme || "light", //'dark'
  // });
  // Vue.prototype.$test = props;
}

// Create module definition for Vue.use()
const plugin = {
  install,
  // ...components,
  // ...utils,
}

// Use automatically when global Vue instance detected (CDN / Vue 2) Maybe with import Vue from 'vue (??)
let GlobalVue = null
if (typeof window !== 'undefined')
  GlobalVue = window.Vue
else if (typeof global !== 'undefined')
  GlobalVue = global.Vue

if (GlobalVue)
  GlobalVue.use(plugin)

export { VueCoolBoxSelector, CoolBoxItem }

// Default export is library as a whole, registered via Vue.use()
export default plugin

// Allow component use individually
// export * from './components';
