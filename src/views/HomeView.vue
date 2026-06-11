<template>
  <div class="home-wrapper">
    <!-- Componente de animação -->
    <NervSplash v-if="isLoading" @splash-finished="onSplashFinished" />

    <!-- Conteúdo principal -->
    <div v-else class="home-container">
      <header class="system-header">
        <h1>SISTEMA TÁTICO MAGI // INICIALIZADO</h1>
        <p class="status-alert">STATUS: OPERACIONAL (MÍDIAS LOCAIS)</p>
      </header>

      <section class="control-panel">
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Buscar codinome do EVA ou Anjo..." 
          class="search-input"
        />
        
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
  components: {
    NervSplash
  },
  data() {
    return {
      isLoading: true,
      searchQuery: '',
      filterType: 'todos',
      database: [
        { id: 1, type: 'eva', name: 'EVA-01', designation: 'Protótipo de Testes', description: 'Unidade pilotada por Shinji Ikari. Contém a alma de Yui Ikari.', imageName: 'eva01.webp' },
        { id: 2, type: 'eva', name: 'EVA-00', designation: 'Protótipo Inicial', description: 'Primeira unidade funcional, pilotada por Rei Ayanami.', imageName: 'eva00.webp' },
        { id: 3, type: 'eva', name: 'EVA-02', designation: 'Unidade de Production', description: 'Construído na Alemanha, pilotado por Asuka Langley Soryu.', imageName: 'eva02.webp' },
        { id: 4, type: 'anjo', name: 'Sachiel', designation: '3º Anjo', description: 'Primeiro Anjo a atacar Neo Tokyo-3 após 15 anos de hiato.', imageName: 'sachiel.webp' },
        { id: 5, type: 'anjo', name: 'Ramiel', designation: '5º Anjo', description: 'Fortaleza voadora com formato octaédrico e broca de alta perfuração.', imageName: 'ramiel.webp' },
        { id: 6, type: 'anjo', name: 'Zeruel', designation: '14º Anjo', description: 'Entidade de combate físico devastador com braços em formato de lâminas.', imageName: 'zeruel.webp' }
      ]
    };
  },
  computed: {
    filteredItems() {
      return this.database.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                              item.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                              item.type.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                              item.designation.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesFilter = this.filterType === 'todos' || item.type === this.filterType;
        return matchesSearch && matchesFilter;
      });
    }
  },
  methods: {
    onSplashFinished() {
      this.isLoading = false;
    },
    getImageUrl(name) {
      return new URL(`../assets/${name}`, import.meta.url).href;
    }
  }
};
</script>

<style scoped>
.home-container { padding: 10px; }
.system-header { text-align: center; margin-bottom: 30px; }
.status-alert { color: #00ff00; font-weight: bold; animation: blink 1.5s infinite; }
.control-panel { display: flex; flex-direction: column; gap: 15px; margin-bottom: 30px; background-color: #111; padding: 20px; border: 1px solid #ff5500; }
.search-input { background-color: #000; border: 1px solid #ff5500; color: #ff5500; padding: 12px; font-family: inherit; font-size: 16px; width: 100%; }
.filter-buttons { display: flex; gap: 10px; }
.filter-buttons button { background-color: #000; border: 1px solid #ff5500; color: #ff5500; padding: 8px 15px; cursor: pointer; font-family: inherit; font-weight: bold; }
.filter-buttons button.active { background-color: #ff5500; color: #000; }
.database-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
.card-item { background-color: #0d0d0d; border: 1px solid #ff5500; padding: 20px; position: relative; display: flex; flex-direction: column; gap: 10px; }
.card-badge { position: absolute; top: 10px; right: 10px; font-size: 11px; padding: 2px 6px; border: 1px solid currentColor; z-index: 2; background-color: #0d0d0d; }
.card-image-container { width: 100%; height: 220px; overflow: hidden; border: 1px solid #333; background-color: #000; display: flex; align-items: center; justify-content: center; }
.card-image { width: 100%; height: 100%; object-fit: cover; }
.card-item.eva { color: #bb66ff; border-color: #bb66ff; }
.card-item.eva .card-image-container { border-color: #bb66ff; }
.card-item.anjo { color: #ff3333; border-color: #ff3333; }
.card-item.anjo .card-image-container { border-color: #ff3333; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

@media (max-width: 768px) {
  .system-header h1 { font-size: 20px; padding: 0 10px; }
  .control-panel { padding: 15px; }
  .filter-buttons { flex-direction: column; gap: 8px; }
  .filter-buttons button { width: 100%; padding: 12px; font-size: 14px; }
  .database-grid { grid-template-columns: 1fr; gap: 15px; }
  .card-image-container { height: 200px; }
}
</style>