<script lang="ts">
import {defineComponent} from 'vue-demi'

// import HelloWorld from './helloWorld.vue'
import {CoolBoxItem, VueCoolBoxSelector} from './index'
// import CoolBoxItem from './components/cool-box-item.vue'

// todo: fully vue 2 test X
// todo: grid cooler samples X
// todo: export component to index.js X

// todo: read me with gifs and examples and emoji and vue 2 / vue 3
// todo: github hooks
// todo: publish v1

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
  <!--  <HelloWorld /> s-->
  <div>
    Selected box: {{ selected }}
    <VueCoolBoxSelector v-model="selected" active-class="">
      <CoolBoxItem key="1" class="vue-cool-box-selector-item" name="Item1">
        Hello From Box 1
      </CoolBoxItem>
      <CoolBoxItem key="2" class="vue-cool-box-selector-item" name="Item2">
        Hello From Box 2
      </CoolBoxItem>
      <CoolBoxItem class="something" tag="li" name="">
        Hello From nothing
      </CoolBoxItem>
      <!--    &lt;!&ndash;  -->
    </VueCoolBoxSelector>
  </div>
</template>

<style>
.vue-cool-box-selector-item {
  /*width: 50px;*/
  /*height: 50px;*/
  box-shadow: inset 0 0 1px #aaa;
  border-radius: .3rem;
  cursor: pointer;
  display: inline-block;
  padding: 10px;
  margin: 5px;
}
</style>
