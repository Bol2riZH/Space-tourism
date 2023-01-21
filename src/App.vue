<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import BurgerMenu from "@/component/burgerMenu.vue";
import Header from "@/Layout/Header.vue";
</script>

<template>
  <Header>
    <nav class="navigation">
      <BurgerMenu />
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/destination">Destination</RouterLink>
      <RouterLink to="/Crew">Crew</RouterLink>
      <RouterLink to="/Technology">Technology</RouterLink>
    </nav>
  </Header>

  <RouterView />
</template>

<style scoped></style>
