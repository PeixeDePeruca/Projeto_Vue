<template>
  <div class="splash-container">
    <img src="/NERV_Logo.png" alt="NERV Logo" class="logo-fade" />
  </div>
</template>

<script>
export default {
  name: 'NervSplash',
  mounted() {
    // 2.5 segundos para o tempo total de exibição
    setTimeout(() => {
      this.$emit('splash-finished');
    }, 2500);
  }
};
</script>

<style scoped>
.splash-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.logo-fade {
  /* Altere este valor para o tamanho desejado (ex: 300px, 400px) */
  width: 400px; 
  height: auto; /* Mantém a proporção da imagem */
  animation: fadeOutOnly 2.5s forwards;
}

@keyframes fadeOutOnly {
  0% {
    opacity: 1;
  }

  60% {
    opacity: 1;
  }

  /* Segura a logo opaca por 1.5s */
  100% {
    opacity: 0;
  }

  /* Fade-out gradual no final */
}
</style>