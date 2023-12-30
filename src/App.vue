<script setup lang="ts">
import MainNavbar from './components/MainNavbar.vue'
import SocialLinks from './components/SocialLinks.vue'
</script>

<template>
  <div class="app-wrapper">
    <header><MainNavbar /></header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <SocialLinks />
    </footer>
  </div>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5vh;
}

header {
  width: 100%;
}

footer {
  padding-top: 40px;
}
</style>
