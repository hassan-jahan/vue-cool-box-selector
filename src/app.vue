<script lang="ts">
import {defineComponent} from 'vue'
// import HelloWorld from './helloWorld.vue'
import VueCoolBoxSelector from './components/vue-cool-box-selector.vue'
import CoolBoxItem from './components/cool-box-item.vue'

// todo: fully vue 2 test
// todo: grid cooler samples
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
      selected: '123',
    }
  },
})
</script>

<template>
  <!--  <HelloWorld /> -->
  <div>
    Selected box: {{ selected }}
    <VueCoolBoxSelector v-model="selected" active-class="" ta2g="">
      <CoolBoxItem key="1" class="something" name="Tab1" ta2g="">
        Hello From Tab 1
      </CoolBoxItem>
      <CoolBoxItem key="2" class="something" name="Tab2" ta2g="">
        Hello From Tab 2
      </CoolBoxItem>
      <CoolBoxItem class="something" tag="li" name="">
        Hello From
      </CoolBoxItem>
      <!--    &lt;!&ndash;  -->
    </VueCoolBoxSelector>
  </div>
</template>
