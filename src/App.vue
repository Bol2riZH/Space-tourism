<script setup lang="ts">
import { watch, reactive } from 'vue';
import { RouterView, useRoute } from 'vue-router';

import Header from '@/Layout/Header.vue';

const route = useRoute();

const tablet: number = 768;
const desktop: number = 1440;

const screen = reactive({
  width:
    (window.screen.width <= tablet && 'mobile') ||
    (window.screen.width <= desktop && 'tablet') ||
    (window.screen.width > desktop && 'desktop'),
});

const background = reactive({
  url: 'src/assets/image/home/background-home-mobile.jpg',
  size: 'cover',
  width: screen.width,
});

const concatBackgroundUrlOption = (
  pageName: string | string[],
  format: string | boolean
): string => {
  return `no-repeat url('src/assets/image/${pageName}/background-${pageName}-${format}.jpg')`;
};

watch(route, () => {
  let pageName: string | string[];

  route.params.name === undefined
    ? (pageName = 'home')
    : (pageName = route.params.name);
  background.url = concatBackgroundUrlOption(pageName, screen.width);
  document.body.style.background = background.url;
  document.body.style.backgroundSize = background.size;
});
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
</template>
