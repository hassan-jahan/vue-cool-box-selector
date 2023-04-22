<script>
export default {
  name: 'CoolBoxItem',
  props: {
    name: {
      required: true,
    },
    tag: {
      type: String,
      default: 'div',
    },
  },

  data() {
    return {
    }
  },
  computed: {
    activeClass() {
      return this.$parent.activeClass || 'vue-cool-box-selector__active'
    },
  },

  created() {
  },
  methods: {
    // Select(){
    //     this.$parent.selected=this.name
    // }
  },
}
</script>

<template>
  <component :is="tag" :class="$parent.selected === name ? activeClass : ''" @click="$parent.Select(name)">
    <slot />
  </component>
</template>
