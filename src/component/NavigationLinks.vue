<script setup lang="ts">
import { RouterLink } from 'vue-router';
defineProps(['onToggleMenu']);
</script>

<template>
  <ul class="navigation__links--close-cross" @click="onToggleMenu">
    <li class="navigation__links--item">
      <img
        src="src/assets/image/shared/icon-close.svg"
        alt="close navigation menu"
      />
    </li>
    <li class="navigation__links--item">
      <RouterLink to="/">Home</RouterLink>
    </li>
    <li class="navigation__links--item">
      <RouterLink to="/destination">Destination</RouterLink>
    </li>
    <li class="navigation__links--item">
      <RouterLink to="/crew">Crew</RouterLink>
    </li>
    <li class="navigation__links--item">
      <RouterLink to="/technology">Technology</RouterLink>
    </li>
  </ul>
</template>
