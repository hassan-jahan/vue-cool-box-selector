[![License](https://img.shields.io/github/license/logustra/vivu-npm)](https://github.com/hassan-jahan/vue-cool-box-selector/blob/master/license.md)
[![Code Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Vue Cool Box Selector 🪄✨

[//]: # ([![Commitizen]&#40;https://img.shields.io/badge/commitizen-friendly-brightgreen.svg&#41;]&#40;http://commitizen.github.io/cz-cli&#41;)

[//]: # (> [Demo →]&#40;https://stackblitz.com/edit/vitejs-vite-e7qhxx?file=src%2FApp.vue&#41;)

Versatile element selector for vue 

## Features
- Flexible, choose from any element (division, button, image or custom component)
- Style-free, use our optional provided style or your own classes
- Works with Vue 2 and 3
- Lightweight ~1KB gzipped

## Requirement
  - [node.js ](http://nodejs.org/) > 14

[//]: # (  - [pnpm]&#40;https://pnpm.js.org/en/installation&#41;)


[//]: # (## tag git history)

[//]: # (#$ git tag v0.0.1 -m 'v0.0.1')

[//]: # (#)

[//]: # (## push tag to git)

[//]: # (#$ git push origin --tags)


## Usage
### Setup
```bash
npm install vue-cool-box-selector
##OR
yarn add vue-cool-box-selector
##OR
pnpm add vue-cool-box-selector
```


```js
import { CoolBoxItem, VueCoolBoxSelector } from 'vue-cool-box-selector'

// Optional, you can use your own classes
import 'vue-cool-box-selector/dist/style.css'

// For Vue 2
import Vue from 'vue'

Vue.use(CoolBoxItem)
Vue.use(VueCoolBoxSelector)

// or Vue 3
app.use(CoolBoxItem)
app.use(VueCoolBoxSelector)
```

### Basic Usage
```html

<div>
  Selected box: {{ selected }}
  <VueCoolBoxSelector v-model="selected" active-class="vue-cool-box-selector__active">
    <CoolBoxItem name="Item1" class="vue-cool-box-selector__item" key="1">
      Item Box 1
    </CoolBoxItem>
    <CoolBoxItem name="Item2" class="vue-cool-box-selector__item" key="2">
      Item Box 2
    </CoolBoxItem>
    <CoolBoxItem name="Item3" class="vue-cool-box-selector__item" key="3">
      Item Box 3
    </CoolBoxItem>
  </VueCoolBoxSelector>
</div>
```
## Props

- VueCoolBoxSelector 
  - active-class (String): Will be added when the box was selected
  - tag (String) (Default: 'div')

- CoolBoxItem
  - name (String) (Required)
  - tag (String) (Default: 'div')

[//]: # (## Cheers me on)

[//]: # (Love my works? give me 🌟 or cheers me on here :&#41; <br>)

[//]: # (Your support means a lot to me. It will help me sustain my projects actively and make more of my ideas come true. <br>)

[//]: # (Much appreciated! ❤️ 🙏)

[//]: # (→ [Github]&#40;https://github.com/sponsors/hassan-jahan&#41;<br>)

## Thanks
- Faizal Andyka for vivu-npm
- Anthony Fu for vue-demi

## License
MIT License © 2023 Hassan Jahan
