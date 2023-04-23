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
  // computed: {
  //   activeClass() {
  //     // return this.$parent.activeClass || 'vue-cool-box-selector__active'
  //     return this.$parent.activeClass
  //   },
  // },

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
  <component :is="tag" :class="$parent.selected === name ? $parent.activeClass : ''" @click="$parent.Select(name)">
    <slot />
  </component>
</template>

<style>
.vue-cool-box-selector__item {
  /*width: 50px;*/
  /*height: 50px;*/
  display: inline-block;
  border-radius: .4rem;
  cursor: pointer;
  border: 2px solid #ccc;
  padding: 10px;
  margin: 3px;
}

.vue-cool-box-selector__active {
  border-color: #2c3ab6;
  box-shadow: inset 0 0 1px #aaa;
}
</style>
