<template>
  <div id="nerv-system">
    <Navbar v-if="$route.path !== '/login'" />
    
    <main class="main-content">
      <router-view />
    </main>
    
    <Footer v-if="$route.path !== '/login'" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
#nerv-system {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-content {
  flex: 1;
  padding: 20px;
  width: 100%;
}
</style>