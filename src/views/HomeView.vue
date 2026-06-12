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
        <router-link 
          v-for="item in filteredItems" 
          :key="item.id" 
          :to="'/details/' + item.id"
          class="card-item" 
          :class="item.class" 
        >
          <div class="card-badge">{{ item.type.toUpperCase() }}</div>

          <div class="card-image-container">
            <img :src="getImageUrl(item.imageName)" :alt="item.name" class="card-image" />
          </div>

          <h3>{{ item.name }}</h3>
          <p><strong>Designação:</strong> {{ item.designation }}</p>
          <p class="description-text">{{ item.description }}</p>
          
          <div class="click-footer">CLIQUE PARA ACESSAR ARQUIVOS ></div>
        </router-link>
      </section>

      <div class="system-warning-box">
        <p class="warning-main">Banco de Dados incompleto...</p>
        <p class="warning-sub">Verifique o seu nível de permissão com o seu encarregado</p>
      </div>
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
        // EVAs
        { id: 1, type: 'eva', class: 'eva-01', name: 'EVA-01', designation: 'Protótipo de Testes', description: 'Unidade pilotada por Shinji Ikari.', imageName: 'Eva01.webp' },
        { id: 2, type: 'eva', class: 'eva-00', name: 'EVA-00', designation: 'Protótipo Inicial', description: 'Primeira unidade funcional.', imageName: 'Eva00_old_new.png' },
        { id: 3, type: 'eva', class: 'eva-02', name: 'EVA-02', designation: 'Unidade de Produção', description: 'Construído na Alemanha.', imageName: 'eva02.webp' },
        { id: 7, type: 'eva', class: 'eva-08', name: 'EVA-08', designation: 'Unidade Provisória', description: 'Especialista em suporte de longa distância.', imageName: 'eva08.webp' },
        { id: 8, type: 'eva', class: 'mark-06', name: 'Mark.06', designation: 'Unidade Autônoma', description: 'Construído na base lunar Tabgha.', imageName: 'mark06.webp' },
        
        // ANJOS
        { id: 4, type: 'anjo', class: 'anjo-white', name: 'Sachiel', designation: '3º Anjo', description: 'Primeiro Anjo a atacar Neo Tokyo-3.', imageName: 'sachiel.webp' },
        { id: 5, type: 'anjo', class: 'anjo-white', name: 'Ramiel', designation: '5º Anjo', description: 'Fortaleza voadora octaédrica.', imageName: 'Ramiel.webp' },
        { id: 6, type: 'anjo', class: 'anjo-white', name: 'Zeruel', designation: '14º Anjo', description: 'Entidade de combate devastador.', imageName: 'zeruel.webp' },
        { id: 9, type: 'anjo', class: 'anjo-white', name: 'Shamshel', designation: '4º Anjo', description: 'Entidade em forma de inseto com chicotes de luz.', imageName: 'shamshel.webp' },
        { id: 10, type: 'anjo', class: 'anjo-white', name: 'Gaghiel', designation: '6º Anjo', description: 'Entidade aquática massiva.', imageName: 'gaghiel.webp' }
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
/* REGRAS GERAIS */
.home-wrapper {
  min-height: 100vh;
  background-image: url('/SystemOnline.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-color: #000;
}

.home-container {
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  min-height: 100vh;
}

/* BOTÕES COM EFEITO GLOW (Global do componente) */
button, .btn-magi {
  background-color: #000;
  border: 1px solid #ff5500;
  color: #ff5500;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  font-family: monospace;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

button:hover {
  background-color: #ff5500;
  color: #000;
  box-shadow: 0 0 15px #ff5500; /* Efeito Glow */
}

/* CARDS E ANIMAÇÕES */
.database-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.card-item {
  background-color: #0d0d0d;
  border: 1px solid #ff5500;
  padding: 20px;
  position: relative;
  text-decoration: none; /* Remove underline do router-link */
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* Efeito de luz e sombra no Hover do card */
.card-item:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 0 30px var(--card-color); /* Sombra colorida baseada na classe */
  z-index: 10;
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

.click-footer {
  margin-top: 15px;
  font-size: 10px;
  text-align: right;
  opacity: 0.6;
  font-family: monospace;
}

/* 1º OBJETIVO: CORES ESPECÍFICAS */
.eva-01 { --card-color: #bb66ff; color: var(--card-color); border-color: var(--card-color); }
.eva-00 { --card-color: #0088ff; color: var(--card-color); border-color: var(--card-color); }
.eva-02 { --card-color: #ff3333; color: var(--card-color); border-color: var(--card-color); }
.eva-08 { --card-color: #ff88cc; color: var(--card-color); border-color: var(--card-color); }
.mark-06 { --card-color: #3333ff; color: var(--card-color); border-color: var(--card-color); }
.anjo-white { --card-color: #ffffff; color: var(--card-color); border-color: var(--card-color); }

/* Ajuste das badges para não sumirem no branco */
.card-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 11px;
  padding: 2px 6px;
  border: 1px solid currentColor;
  background: rgba(0,0,0,0.8);
}

.description-text {
  color: #a0a0a0;
  font-size: 0.9em;
}

/* Restante do CSS (Avisos/Header) */
.system-header { text-align: center; margin-bottom: 30px; color: #ff5500; }
.status-alert { color: #00ff00; font-weight: bold; animation: blink 1.5s infinite; }
.control-panel { display: flex; flex-direction: column; gap: 15px; margin-bottom: 30px; background-color: #111; padding: 20px; border: 1px solid #ff5500; }
.search-input { background-color: #000; border: 1px solid #ff5500; color: #ff5500; padding: 12px; width: 100%; font-family: monospace; }

@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

.system-warning-box { text-align: center; margin: 40px auto; padding: 15px; max-width: 600px; font-family: monospace; border: 1px dashed #ff3333; background: rgba(255,51,51,0.05); }

/* TAMANHOS DE FONTES FIXOS EM PIXELS */
.warning-main { 
  color: #ff3333; 
  font-weight: bold; 
  font-size: 18px; 
  margin-bottom: 6px;
  animation: blink 2s infinite; 
}
.warning-sub { 
  color: #a0a0a0; 
  font-size: 16px; 
  margin: 0;
}
</style>