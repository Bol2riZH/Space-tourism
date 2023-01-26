<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import { watch, reactive } from 'vue';
import Header from '@/Layout/Header.vue';

const route = useRoute();
const background = reactive({
  url: 'src/assets/image/home/background-home-mobile.jpg',
  size: 'cover',
});

const concatBackgroundOption = (pageName: string | string[]): any => {
  return `no-repeat url('src/assets/image/${pageName}/background-${pageName}-mobile.jpg')`;
};

watch(route, () => {
  let pageName: string | string[];

  route.params.name === undefined
    ? (pageName = 'home')
    : (pageName = route.params.name);

  background.url = concatBackgroundOption(pageName);

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
