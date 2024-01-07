<script setup lang="ts">
import ServiceTile from './ServiceTile.vue'
import nextcloudLogo from '@/assets/nextcloud-logo.svg'
import immichLogo from '@/assets/immich-logo.svg'
</script>

<template>
  <p>Self-hosted services, links for my and my friends' convenience coming soon</p>
  <br />
  <div class="service-wrapper">
    <ServiceTile :logoPath="nextcloudLogo" logoAlt="Nextcloud logo" />
    <ServiceTile :logoPath="immichLogo" logoAlt="Immich logo" />
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
