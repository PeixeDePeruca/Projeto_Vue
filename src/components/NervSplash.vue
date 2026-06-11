<template>
  <div v-if="visible" class="splash-screen">
<img src="../assets/NERV_Logo.png" alt="Nerv Logo" class="nerv-logo" />
    <div class="loading-text">CONECTANDO AO SISTEMA MAGI...</div>
  </div>
</template>

<script>
export default {
  name: 'NervSplash',
  data() {
    return { visible: true };
  },
  mounted() {
    setTimeout(() => {
      this.visible = false;
      this.$emit('splash-finished');
    }, 3000);
  }
};
</script>