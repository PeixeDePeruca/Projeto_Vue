<template>
  <nav class="nerv-nav">
    <div class="logo">NERV // MAGI SYSTEM</div>
    <div class="links">
      <router-link to="/">Home</router-link> | 
      <router-link to="/about">Sobre</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>

<style scoped>
.nerv-nav {
  background-color: #000000;
  color: #ff5500;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 2px solid #ff5500;
  font-family: monospace;
}
.nerv-nav a {
  color: #ff5500;
  text-decoration: none;
  margin: 0 10px;
  font-weight: bold;
}
.nerv-nav a:hover, .nerv-nav a.router-link-active {
  text-shadow: 0 0 8px #ff5500;
}
</style>