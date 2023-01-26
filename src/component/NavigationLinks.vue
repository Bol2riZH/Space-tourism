<script setup lang="ts">
import { RouterLink } from 'vue-router';
defineProps(['onToggleMenu']);
</script>

<template>
  <div class="navigation__container">
    <div class="navigation__close-cross">
      <img
        @click="onToggleMenu"
        src="../assets/image/icon/icon-close.svg"
        alt="close navigation menu"
      />
    </div>
    <ul class="navigation__links">
      <li class="navigation__links--item nav-link">
        <RouterLink class="navigation__links--router-link" to="/"
          >Home</RouterLink
        >
      </li>
      <li class="navigation__links--item nav-link">
        <RouterLink class="navigation__links--router-link" to="/destination"
          >Destination</RouterLink
        >
      </li>
      <li class="navigation__links--item nav-link">
        <RouterLink class="navigation__links--router-link" to="/crew"
          >Crew</RouterLink
        >
      </li>
      <li class="navigation__links--item nav-link">
        <RouterLink class="navigation__links--router-link" to="/technology"
          >Technology</RouterLink
        >
      </li>
    </ul>
  </div>
</template>
