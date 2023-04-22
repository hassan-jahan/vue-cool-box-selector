<template>
  <component :is="tag" :class="$parent.selected === name ? activeClass : ''" @click='$parent.Select(name)'>
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'cool-box-item',
  props: {
    'name': {
      required: true
    },
    'tag': {
      type: String,
      default: 'div',
    },
  },

  data() {
    return {
    }
  },
  computed: {
    activeClass(){
      return this.$parent.activeClass || 'vue-cool-box-selector__active'
    }
  },

  created() {
  },
  methods: {
    // Select(){
    //     this.$parent.selected=this.name
    // }
  }
}
</script>
