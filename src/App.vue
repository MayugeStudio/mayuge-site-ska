<script setup>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <div class="wrap">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style>
.wrap {
  font-family: system-ui, sans-serif;
  color: var(--color-text);
  background-color: var(--color-bg);
}

</style>

