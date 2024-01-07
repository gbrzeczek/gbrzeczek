<script setup lang="ts">
defineProps({
  logoPath: String,
  logoAlt: String
})
</script>

<template>
  <div class="service-tile">
    <img class="service-logo" :src="logoPath" :alt="logoAlt" />
  </div>
</template>

<style scoped>
.service-tile {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background-color: #121220;
  border: 1px solid white;
}

.service-logo {
  width: 130px;
  height: 130px;
  filter: brightness(0) invert(1);
}

.service-tile:hover {
  background-color: white;
  border: 1px solid #121220;
  transition: background-color 0.5s ease;
}

.service-tile:hover .service-logo {
  filter: brightness(0) invert(0);
  transition: filter 0.5s ease;
}
</style>
