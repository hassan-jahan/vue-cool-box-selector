<script lang="ts">
import {defineComponent} from 'vue'
// import HelloWorld from './helloWorld.vue'
import VueCoolBoxSelector from './components/vue-cool-box-selector.vue'
import CoolBoxItem from './components/cool-box-item.vue'


export default defineComponent({
  name: 'App',
  components: {
    // HelloWorld,
    VueCoolBoxSelector,
    CoolBoxItem
  },
  data() {
    return {
      selected: '123'
    }
  },
})
</script>

<template>
  <!--  <HelloWorld />-->
  <div>
    Selected box: {{ selected }}
    <vue-cool-box-selector v-model="selected" active-class="bg-info text-dark">
      <cool-box-item class="something" name="Tab1">Hello From Tab 1</cool-box-item>
      <cool-box-item class="something" name="Tab2">Hello From Tab 2</cool-box-item>
      <!--    &lt;!&ndash;  -->
    </vue-cool-box-selector>
  </div>
</template>
