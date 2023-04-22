<template>
  <div :class="$parent.selected===name ? $parent.activeClass : ''" @click='$parent.Select(name)'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cool-box-item',
  props: ['name'],

  data() {
    return {
      // isActive: false
    }
  },
  created() {
    console.log('this.parent', this.$parent)
  },
  methods: {
    // Select(){
    //     this.$parent.selected=this.name
    // }
  }
}
</script>
