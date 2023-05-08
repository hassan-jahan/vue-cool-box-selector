<script lang="ts">
// import {CoolBoxItem, VueCoolBoxSelector} from './../dist/'
// import { CoolBoxItem, VueCoolBoxSelector } from './index'

// import VueCoolBox from './index'

// import Vue from 'vue' // vue 2
// Vue.use(VueCoolBox)  // vue 2

// import 'vue-cool-box-selector/dist/style.css'

// todo: fully vue 2 test X
// todo: grid cooler samples X
// todo: export component to index.js X
// todo: export plug and autoinstall X
// todo: read me with gifs and examples and emoji and vue 2 / vue 3 X
// todo: gifs X
// todo: github hooks husky X [removed]
// todo: publish v1 X
// todo: test with vue 2 vue 3 see vue-fluent (link in actions) X
// todo: multi select
// todo: more cool badge for read me
// todo: checkbox style X

// how to release: commit first / create a new tag (maybe from the commit in git log tab) push it with push tag all (you may need create first)
// you can also create release from github simpler but not npm publish

export default {
  name: 'App',
  components: {
    // VueCoolBoxSelector,
    // CoolBoxItem,
  },
  data() {
    return {
      selected: 'Item2',
    }
  },
  // data:{
  //   selected: 'initialValue',
  // }
}
</script>

<template>
  <div style="font-family: Verdana;margin:20px;">
    Selected box: {{ selected }}
    <VueCoolBoxSelector v-model="selected" active-class="cb__active">
      <CoolBoxItem key="1" name="Item1" class="vue-cool-box-selector__item">
        Item Box 1
      </CoolBoxItem>
      <CoolBoxItem key="2" name="Item2" class="vue-cool-box-selector__item">
        Item Box 2
      </CoolBoxItem>
      <CoolBoxItem key="3" name="Item3" class="vue-cool-box-selector__item">
        Item Box 3
      </CoolBoxItem>
    </VueCoolBoxSelector>

    <div style="margin-top:20px;" />

    <VueCoolBoxSelector v-model="selected" active-class="cb__active cb__circle">
      <CoolBoxItem key="1" name="Item1" class="vue-cool-box-selector__item px-3" style="width:48px;text-align:center">
        <img src="/img.svg" alt="">
        <small>Img1</small>
      </CoolBoxItem>
      <CoolBoxItem key="2" name="Item2" class="vue-cool-box-selector__item px-3" style="width:48px;text-align:center">
        <img src="/img2.svg" alt="">
        <small>Img2</small>
      </CoolBoxItem>
    </VueCoolBoxSelector>

    <div style="margin-top:20px;" />

    <VueCoolBoxSelector v-model="selected" active-class="cb__active cb__triangle">
      <CoolBoxItem key="1" name="Item1" class="vue-cool-box-selector__item px-3" style="width:38px;">
        <img src="/img.svg" alt="">
      </CoolBoxItem>
      <CoolBoxItem key="2" name="Item2" class="vue-cool-box-selector__item px-3" style="width:38px;">
        <img src="/img2.svg" alt="">
      </CoolBoxItem>
    </VueCoolBoxSelector>

    <div style="margin-top:20px;" />

    <VueCoolBoxSelector v-model="selected" active-class="cb__active cb__square">
      <CoolBoxItem key="1" name="Item1" class="vue-cool-box-selector__item small" style="padding-right:18px;padding-left:18px;">
        One
      </CoolBoxItem>
      <CoolBoxItem key="2" name="Item2" class="vue-cool-box-selector__item small" style="padding-right:18px;padding-left:18px;">
        Two
      </CoolBoxItem>
    </VueCoolBoxSelector>
  </div>
</template>

<style>
</style>
