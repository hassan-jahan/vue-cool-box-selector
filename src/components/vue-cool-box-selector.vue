<script>
export default {
  name: 'VueCoolBoxSelector',
  props: {
    value: {},
    modelValue: {},
    activeClass: {
      type: String,
      // default: 'vue-cool-box-selector__active', //doesn't work // not needed
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
  watch: {
    value(newVal) {
      this.selected = newVal
    },
    modelValue(newVal) {
      this.selected = newVal
    },
  },
  created() {
    this.selected = this.value ? this.value : this.modelValue
  },
  mounted() {
    // this.selectTab(0),
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

</style>
