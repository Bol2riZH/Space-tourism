<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/destination">Destination</RouterLink>
        <RouterLink to="/Crew">Crew</RouterLink>
        <RouterLink to="/Technology">Technology</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
