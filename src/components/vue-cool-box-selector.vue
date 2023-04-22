<template>
  <div>
    <!--        {{selected}}-->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vue-cool-box-selector',
  props: ['value', 'modelValue', 'active-class'],
  // mode: {
  //     type: String,
  // default: 'light'
  // }
  // },


  data() {
    return {
      selected: '', // the index of the selected tab,
    }
  },
  // watch: {
  //     selected(val) {
  //         this.$emit('input', this.selected)
  //     }
  // },
  created() {

    this.selected = this.value
    this.selected = this.modelValue
    // this.options = this.$children
  },
  mounted() {
    // this.selectTab(0)
  },
  methods: {
    Select(name) {
      this.selected = (this.selected !== name) ? name : '' //unselect

      this.$emit('input', name)
      this.$emit('update:modelValue', name) //vue 3

    },
    // selectTab (i) {
    //     this.selectedIndex = i
    //
    //     // loop over all the tabs
    //     this.options.forEach((option, index) => {
    //         option.isActive = (index === i)
    //     })
    // }
  }
}
</script>
