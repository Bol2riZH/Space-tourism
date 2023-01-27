<script setup lang="ts">
import data from '../../data.json';
</script>

<template>
  <section class="section__destination">
    <h2 class="heading-5">
      <span class="heading-5__prefix">01</span>
      <span class="heading-5__title"> Pick your destination </span>
    </h2>

    <div class="section__destination--img">
      <img :src="`${data.destinations[0].images.webp}`" alt="planet" />
    </div>

    <ul class="section__destination--list">
      <li class="section__destination--items nav-link">
        {{ data.destinations[0].name }}
      </li>
      <li class="section__destination--items nav-link">
        {{ data.destinations[1].name }}
      </li>
      <li class="section__destination--items nav-link">
        {{ data.destinations[2].name }}
      </li>
      <li class="section__destination--items nav-link">
        {{ data.destinations[3].name }}
      </li>
    </ul>

    <div class="section__destination--description">
      <h1 class="heading-2">{{ data.destinations[0].name }}</h1>
      <p class="paragraph">{{ data.destinations[0].description }}</p>
    </div>

    <div class="section__destination--bottom-container">
      <div class="section__destination--information">
        <h3 class="sub-heading-2">avg. distance</h3>
        <span class="sub-heading-1">{{ data.destinations[0].distance }}</span>
      </div>
      <div class="section__destination--information">
        <h3 class="sub-heading-2">est. travel time</h3>
        <span class="sub-heading-1">{{ data.destinations[0].travel }}</span>
      </div>
    </div>
  </section>
</template>
