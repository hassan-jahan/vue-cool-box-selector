<script>
import {isVue2} from 'vue-demi'

export default {
  name: 'VueCoolBoxSelector',
  props: {
    value: {},
    modelValue: {},
    activeClass: {
      type: String,
      // default: 'vue-cool-box-selector__active', //doesn't work
    },
    tag: {
      type: String,
      default: 'div',
    },
  },

  data() {
    return {
      selected: '',
    }
  },
  created() {
    if (isVue2)
      this.selected = this.value
    else
      this.selected = this.modelValue
  },
  mounted() {
    // this.selectTab(0),
  },
  methods: {
    Select(name) {
      this.selected = (this.selected !== name) ? name : '' // unselect

      if (isVue2)
        this.$emit('input', name)
      else
        this.$emit('update:modelValue', name) // vue 3
    },
  },
}
</script>

<template>
  <component :is="tag">
    <slot/>
  </component>
</template>

<style>
.vue-cool-box-selector__active {
  border: 1px solid #2c3ab6;
  /*padding: .5rem;*/
  border-radius: 0.3rem;
}
</style>
