<script setup lang="ts">
import ServiceTile from './ServiceTile.vue'
</script>

<template>
  <div class="service-wrapper">
    <ServiceTile logoPath="src/assets/nextcloud-logo.svg" logoAlt="Nextcloud logo" />
    <ServiceTile logoPath="src/assets/immich-logo.svg" logoAlt="Immich logo" />
  </div>
</template>

<style scoped>
.service-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>
