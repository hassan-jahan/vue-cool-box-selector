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
    return {}
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
  position: relative;
  display: inline-block;
  border-radius: .4rem;
  cursor: pointer;
  border: 2px solid #ccc;
  padding: 12px;
  margin: 3px;
}

.cb__active {
  border: 2px solid #2c3ab6;
  /*box-shadow: inset 0 0 3px #bbb;*/
}

/* Tick part */
.cb__square:after, .cb__circle:after, .cb__triangle:after {
  content: "";
  position: absolute;
  right: 3px;
  top: 3px;
  width: 18px;
  height: 18px;
  background: #2c3ab6 url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0ZGRkZGRiIgZD0iTTM5LjM2MyA3OWwtMjMuMzYzLTIzLjUxIDExLjM0Ny0xMS40MTkgMTIuMzQ3IDEyLjQxOSAzMy4yODktMzMuNDkgMTEuMDE3IDExLjA4NS00NC42MzcgNDQuOTE1eiIvPjwvc3ZnPg==') no-repeat center center;
  background-size: 14px;
  z-index: 999;
}

.cb__circle:after {
  border-radius: 50%;
}

.cb__square:after {
  border-radius: 3px;
}

/* Tick size*/
.cb__triangle:after {
  width: 12px;
  height: 12px;
}

/* Triangle itself */
.cb__triangle:before {
  content: "";
  position: absolute;
  height: 0;
  width: 0;
  top: 0;
  right: 0;
  border-top: 15px solid #2c3ab6;
  border-right: 15px solid #2c3ab6;
  border-left: 15px solid transparent !important;
  border-bottom: 15px solid transparent !important;
  /*border-left-color: transparent !important;*/
  /*border-bottom-color: transparent !important;*/
  z-index: 900;
  border-top-right-radius: inherit;
}

/* Change vue-cool-box-selector color. e.g. var(--bs-primary) */
/*.cb__active, .cb__triangle:before{*/
/*  border-color: deeppink ;*/
/*}*/
/*.cb__square:after, .cb__circle:after, .cb__triangle:after {*/
/*  background-color: deeppink;*/
/*}*/
</style>
