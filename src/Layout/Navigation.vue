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
    <Transition>
      <NavigationLinks v-if="!toggleMenu" :onToggleMenu="onToggleMenu" />
    </Transition>
  </nav>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 500ms ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
