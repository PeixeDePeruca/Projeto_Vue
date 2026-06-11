<template>
  <div v-if="showSplash" class="splash-screen">
    <img src="../assets/NERV_Logo.png" class="logo-splash" alt="Nerv Logo" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showSplash = ref(true);
const emit = defineEmits(['splash-finished']);

onMounted(() => {
  setTimeout(() => {
    showSplash.value = false;
    emit('splash-finished'); // Avisa que terminou
  }, 3000);
});
</script>

<style scoped>
.splash-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
}
.logo-splash {
  width: 300px;
  height: auto;
}
</style>