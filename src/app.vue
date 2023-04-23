<script lang="ts">
import { defineComponent } from 'vue-demi'

// import HelloWorld from './helloWorld.vue'
import { CoolBoxItem, VueCoolBoxSelector } from './index'
// import CoolBoxItem from './components/cool-box-item.vue'

// todo: fully vue 2 test X
// todo: grid cooler samples X
// todo: export component to index.js X

// todo: read me with gifs and examples and emoji and vue 2 / vue 3 X
// todo: gifs
// todo: github hooks husky
// todo: publish v1
// todo: test with vue 2 vue 3
// todo: multi select

export default defineComponent({
  name: 'App',
  components: {
    // HelloWorld,
    VueCoolBoxSelector,
    CoolBoxItem,
  },
  data() {
    return {
      selected: 'initialValue',
    }
  },
  // data:{
  //   selected: 'initialValue',
  // }
})
</script>

<template>
  <!--  <HelloWorld /> s -->
  <div>
    Selected box: {{ selected }}
    <VueCoolBoxSelector v-model="selected" active-class="vue-cool-box-selector__active">
      <CoolBoxItem key="1" class="vue-cool-box-selector__item" name="Item1">
        Item Box 1
      </CoolBoxItem>
      <CoolBoxItem key="2" class="vue-cool-box-selector__item" name="Item2">
        Item Box 2
      </CoolBoxItem>
      <CoolBoxItem key="3" class="vue-cool-box-selector__item" name="Item3">
        Item Box 3
      </CoolBoxItem>
    </VueCoolBoxSelector>
  </div>
</template>

<style>
</style>
