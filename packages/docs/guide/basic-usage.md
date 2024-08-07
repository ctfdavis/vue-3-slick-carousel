# Basic Usage

If you use a package manager like npm to install this library, you can import the component and styles in your Vue application like below:

```js
import 'v-slick-carousel/style.css'
import { VSlickCarousel } from 'v-slick-carousel'
```

For example, in a Vue SFC, you can use the component as follows:

```vue
<template>
  <div class="carousel">
    <VSlickCarousel v-bind="settings">
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
    </VSlickCarousel>
  </div>
</template>

<script setup lang="ts">
import 'v-slick-carousel/style.css'
import { VSlickCarousel } from 'v-slick-carousel'
import type { Settings } from 'v-slick-carousel'

const settings: Settings = {
  slidesToShow: 1
  // ...
}
</script>

<style scoped>
.carousel {
  padding: 28px;
}
</style>
```

For the full list of `settings` and their usages, see the [Settings](/guide/settings) section.
