<template>
  <header class="site-header">
    <h1>
      <router-link to="/">Mayuge-Site-Ska</router-link>
    </h1>

    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/posts">Posts</router-link></li>
        <li><router-link to="/about">Profile</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 2rem;
  border-bottom: 1px solid #bbb;
}

nav ul {
  display: flex;
  padding-right: 50px;
  gap: 1.5rem;
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

ul li a.router-link-active {
  font-weight: bold;
  color: orange;
}

</style>
