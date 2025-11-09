<script setup>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app">
    <Header />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  font-family: system-ui, sans-serif;
  color: var(--color-text);
  background-color: var(--color-bg);
}

.main-content {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  flex: 1;
}

</style>

