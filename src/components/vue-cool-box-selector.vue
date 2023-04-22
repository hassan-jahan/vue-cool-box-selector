<script>
// import { Vue2, Vue3 } from 'vue-demi'

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
    this.selected = this.value
    this.selected = this.modelValue

    // if (Vue2)
    //   alert('this is vue2')
    //
    // if (Vue3)
    //   alert('this is vue3')
  },
  mounted() {
    // this.selectTab(0)
  },
  methods: {
    Select(name) {
      this.selected = (this.selected !== name) ? name : '' // unselect

      this.$emit('input', name)
      this.$emit('update:modelValue', name) // vue 3
    },
  },
}
</script>

<template>
  <component :is="tag">
    <slot />
  </component>
</template>

<style>
.vue-cool-box-selector__active {
  border: 2px solid #2c3ab6;
  /*padding: .5rem;*/
  border-radius: 0.3rem;
}
</style>
