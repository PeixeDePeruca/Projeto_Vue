<template>
  <div class="home-wrapper">
    <NervSplash v-if="isLoading" @splash-finished="onSplashFinished" />

    <div v-else class="home-container">
      <header class="system-header">
        <h1>NERV // SISTEMA MAGI</h1>
        <p class="status-alert">STATUS: OPERACIONAL (MÍDIAS LOCAIS)</p>
      </header>

      <section class="control-panel">
        <input v-model="searchQuery" type="text" placeholder="Buscar codinome do EVA ou Anjo..." class="search-input" />

        <div class="filter-buttons">
          <button @click="filterType = 'todos'" :class="{ active: filterType === 'todos' }">TODOS</button>
          <button @click="filterType = 'eva'" :class="{ active: filterType === 'eva' }">EVAs</button>
          <button @click="filterType = 'anjo'" :class="{ active: filterType === 'anjo' }">ANJOS</button>
        </div>
      </section>

      <section class="database-grid">
        <div v-for="item in filteredItems" :key="item.id" class="card-item" :class="item.type">
          <div class="card-badge">{{ item.type.toUpperCase() }}</div>

          <div class="card-image-container">
            <img :src="getImageUrl(item.imageName)" :alt="item.name" class="card-image" />
          </div>

          <h3>{{ item.name }}</h3>
          <p><strong>Designação:</strong> {{ item.designation }}</p>
          <p>{{ item.description }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NervSplash from '../components/NervSplash.vue';

export default {
  name: 'HomeView',
  components: { NervSplash },
  data() {
    return {
      isLoading: true,
      searchQuery: '',
      filterType: 'todos',
      database: [
        { id: 1, type: 'eva', name: 'EVA-01', designation: 'Protótipo de Testes', description: 'Unidade pilotada por Shinji Ikari.', imageName: 'Eva01.webp' },
        { id: 2, type: 'eva', name: 'EVA-00', designation: 'Protótipo Inicial', description: 'Primeira unidade funcional.', imageName: 'Eva00_old_new.png' },
        { id: 3, type: 'eva', name: 'EVA-02', designation: 'Unidade de Produção', description: 'Construído na Alemanha.', imageName: 'eva02.webp' },
        { id: 4, type: 'anjo', name: 'Sachiel', designation: '3º Anjo', description: 'Primeiro Anjo a atacar Neo Tokyo-3.', imageName: 'sachiel.webp' },
        { id: 5, type: 'anjo', name: 'Ramiel', designation: '5º Anjo', description: 'Fortaleza voadora octaédrica.', imageName: 'Ramiel.webp' },
        { id: 6, type: 'anjo', name: 'Zeruel', designation: '14º Anjo', description: 'Entidade de combate devastador.', imageName: 'zeruel.webp' }
      ]
    };
  },
  computed: {
    filteredItems() {
      return this.database.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesFilter = this.filterType === 'todos' || item.type === this.filterType;
        return matchesSearch && matchesFilter;
      });
    }
  },
  methods: {
    onSplashFinished() { this.isLoading = false; },
    getImageUrl(name) { return new URL(`../assets/${name}`, import.meta.url).href; }
  }
};
</script>

<style scoped>
/* O container principal que recebe a imagem de fundo */
.home-wrapper {
  min-height: 100vh;
  background-image: url('/SystemOnline.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-color: #000;
}

/* Container de conteúdo com fundo escurecido para contraste */
.home-container {
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  min-height: 100vh;
}

.system-header {
  text-align: center;
  margin-bottom: 30px;
  color: #ff5500;
}

.status-alert {
  color: #00ff00;
  font-weight: bold;
  animation: blink 1.5s infinite;
}

.control-panel {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
  background-color: #111;
  padding: 20px;
  border: 1px solid #ff5500;
}

.search-input {
  background-color: #000;
  border: 1px solid #ff5500;
  color: #ff5500;
  padding: 12px;
  width: 100%;
  font-family: monospace;
}

.filter-buttons {
  display: flex;
  gap: 10px;
}

.filter-buttons button {
  background-color: #000;
  border: 1px solid #ff5500;
  color: #ff5500;
  padding: 8px 15px;
  cursor: pointer;
  font-weight: bold;
}

.filter-buttons button.active {
  background-color: #ff5500;
  color: #000;
}

.database-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.card-item {
  background-color: #0d0d0d;
  border: 1px solid #ff5500;
  padding: 20px;
  position: relative;
  color: #ff5500;
}

.card-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 11px;
  padding: 2px 6px;
  border: 1px solid currentColor;
}

.card-image-container {
  width: 100%;
  height: 220px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #333;
  margin-bottom: 15px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-item.eva {
  border-color: #bb66ff;
  color: #bb66ff;
}

.card-item.anjo {
  border-color: #ff3333;
  color: #ff3333;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
</style>