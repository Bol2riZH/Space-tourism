<script>
import { defineComponent } from "vue";
import Navigation from "@/Layout/Navigation.vue";

export default defineComponent({
  components: { Navigation },
});
</script>

<template>
  <header class="header">
    <div class="header__logo">
      <img
        class="header__logo--img"
        src="src/assets/image/shared/logo.svg"
        alt="logo"
      />
    </div>
    <Navigation />
  </header>
</template>
