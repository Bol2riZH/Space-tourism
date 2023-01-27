<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

import BurgerMenu from '@/component/BurgerMenu.vue';
import NavigationLinks from '@/component/NavigationLinks.vue';

const inner_nav = ref(null);
const toggleMenu = ref(true);
const onToggleMenu = () => {
  toggleMenu.value = !toggleMenu.value;
};

onClickOutside(inner_nav, () => {
  toggleMenu.value = !toggleMenu.value;
});
</script>

<template>
  <nav class="navigation">
    <BurgerMenu @click="onToggleMenu" v-if="toggleMenu" />
    <Transition>
      <NavigationLinks
        ref="inner_nav"
        v-if="!toggleMenu"
        :onToggleMenu="onToggleMenu"
      />
    </Transition>
  </nav>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 250ms linear;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
