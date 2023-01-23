<script setup lang="ts">
import { ref } from 'vue';

import BurgerMenu from '@/component/BurgerMenu.vue';
import NavigationLinks from '@/component/NavigationLinks.vue';

const toggleMenu = ref(true);
const onToggleMenu = () => {
  toggleMenu.value = !toggleMenu.value;
};
</script>

<template>
  <nav class="navigation">
    <BurgerMenu @click="onToggleMenu" v-if="toggleMenu" />
    <NavigationLinks v-else :onToggleMenu="onToggleMenu" />
  </nav>
</template>
