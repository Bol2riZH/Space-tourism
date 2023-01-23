<script>
import { defineComponent } from "vue";
import Button from "@/component/Button.vue";

export default defineComponent({
  components: { Button },
});
</script>

<template>
  <main>
    <section class="section section__home">
      <h2 class="subHeading-1">So, you want to travel to</h2>
      <h1 class="section__home--title heading-1">Space</h1>
      <p class="section__home--paragraphe">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
      <Button />
    </section>
  </main>
</template>
