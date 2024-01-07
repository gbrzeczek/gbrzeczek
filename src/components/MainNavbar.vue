<script setup lang="ts">
import myImage from '@/assets/me.jpeg'
</script>

<template>
  <div class="navbar">
    <div class="left-wrapper">
      <h1>Grzegorz Brzęczek</h1>
      <h3>Software Engineer</h3>
      <div class="nav-links">
        <router-link class="accent" to="/">Home</router-link>
        <router-link class="accent" to="/projects">Projects</router-link>
        <router-link class="accent" to="/services">Services</router-link>
        <router-link class="accent" to="/contact">Contact</router-link>
      </div>
    </div>
    <img :src="myImage" class="me-img" alt="A photo of me, taken on an Icelandic beach" />
  </div>
</template>

<style>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.me-img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 70px;
}

h3 {
  font-weight: 300;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

@media (max-width: 600px) {
  .navbar {
    flex-direction: column-reverse;
    align-items: flex-start;
  }

  .me-img {
    margin: 0;
  }

  .nav-links {
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
