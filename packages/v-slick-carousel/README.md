<div align="center">
<h1>V Slick Carousel</h1>
<img src="../docs/public/logo.svg" alt="V Slick Carousel" />
</div>

A Carousel component with TypeScript support and numerous features made for Vue 3.

## Features

V Slick Carousel is a carousel component with TypeScript support and features including the following:

- Vue 3 suppoort (Vue 2 is not supported)
- Multiple slides per group
- Responsiveness
- Lazy loading
- Vertical mode
- Auto play
- Pagination
- Accessibility via keyboard navigation
- Right-to-left support
- SSR support
- Typescript support

See [Why V Slick Carousel](../docs/guide/why-v-slick-carousel.md) for more details.

## Installation

```bash
npm install v-slick-carousel
```

See [Installation](../docs/guide/installation.md) for more details.

## Quick Start

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

## Settings

See [Settings](../docs/guide/settings.md).

## License

V Slick Carousel is open source and released under the [MIT License](../../LICENSE).