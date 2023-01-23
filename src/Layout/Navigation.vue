<script setup lang="ts">
import BurgerMenu from '@/component/BurgerMenu.vue';
import { ref } from 'vue';
const collapse = ref(true);
</script>

<template>
  <nav class="navigation">
    <BurgerMenu @click="collapse = !collapse" />
    <div class="navigation__links" v-if="!collapse">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/destination">Destination</RouterLink>
      <RouterLink to="/crew">Crew</RouterLink>
      <RouterLink to="/technology">Technology</RouterLink>
    </div>
  </nav>
</template>
