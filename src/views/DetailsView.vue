<template>
  <div class="details-wrapper" v-if="character">
    <div class="details-container" :style="{ '--char-color': getCharColor }">
      
      <div class="header-navigation">
        <router-link to="/" class="back-btn">◀ RETORNAR AO TERMINAL PRINCIPAL</router-link>
      </div>

      <div class="wiki-layout">
        
        <aside class="wiki-sidebar">
          <div class="sidebar-header">
            <h2>{{ character.name }}</h2>
            <div class="type-badge">{{ character.type.toUpperCase() }}</div>
          </div>
          
          <div class="main-image-container">
            <img :src="getImageUrl(character.imageName)" :alt="character.name" class="main-image" />
          </div>

          <table class="spec-table">
            <tr>
              <td><strong>Designação:</strong></td>
              <td>{{ character.designation }}</td>
            </tr>
            <tr>
              <td><strong>Classificação:</strong></td>
              <td>{{ character.type === 'eva' ? 'Célula Humana Artificial' : 'Semente da Vida / Anjo' }}</td>
            </tr>
            <tr>
              <td><strong>Status:</strong></td>
              <td>{{ character.description }}</td>
            </tr>
          </table>
        </aside>

        <main class="wiki-content">
          <h1>REGISTRO TÁTICO // {{ character.name }}</h1>
          <p class="status-line">> ACESSANDO BANCO DE DADOS... CONEXÃO CRIPTOGRAFADA MAGI OK.</p>
          
          <section class="text-section">
            <h3>DESCRIÇÃO DO ARQUIVO</h3>
            <p>{{ character.longDescription }}</p>
          </section>

          <section class="text-section">
            <h3>ANÁLISE DE IMPACTO</h3>
            <p>Objeto sob constante monitoramento pelas diretrizes de segurança da NERV. Qualquer anomalia ou flutuação nos níveis de onda portadora deve ser reportada imediatamente ao centro de comando central.</p>
          </section>
        </main>

      </div>
    </div>
  </div>
  
  <div v-else class="error-wrapper">
    <p>ERRO 404: ARQUIVO NÃO ENCONTRADO NO SISTEMA MAGI.</p>
    <router-link to="/" class="back-btn">VOLTAR AO TERMINAL</router-link>
  </div>
</template>

<script>
export default {
  name: 'DetailsView',
  data() {
    return {
      character: null,
      // Banco de dados idêntico ao da sua HomeView para mapear os IDs perfeitamente
      database: [
        { id: 1, type: 'eva', class: 'eva-01', name: 'EVA-01', designation: 'Protótipo de Testes', imageName: 'Eva01.webp', longDescription: 'A Unidade Evangelion-01 é o protótipo de testes da série de Evangelions. Pilotada pela Third Children, Shinji Ikari, possui uma propensão única de entrar em estado Berserk, agindo de forma completamente autônoma e violenta.' },
        { id: 2, type: 'eva', class: 'eva-00', name: 'EVA-00', designation: 'Protótipo Inicial', imageName: 'Eva00_old_new.png', longDescription: 'O primeiro Evangelion funcional de sucesso criado pela NERV. Operado pela First Children, Rei Ayanami, como plataforma de testes de sincronização neural.' },
        { id: 3, type: 'eva', class: 'eva-02', name: 'EVA-02', designation: 'Unidade de Produção', imageName: 'eva02.webp', longDescription: 'Construído pela filial alemã da NERV, o EVA-02 é o primeiro modelo de produção em massa focado puramente em combate tático real, pilotado por Asuka Langley Soryu.' },
        { id: 7, type: 'eva', class: 'eva-08', name: 'EVA-08', designation: 'Unidade Provisória', imageName: 'Eva_08.webp', longDescription: 'Unidade configurada para combates de suporte de longa distância com blindagem modificada e alto poder de fogo.' },
        { id: 8, type: 'eva', class: 'mark-06', name: 'Mark.06', designation: 'Unidade Autônoma', imageName: 'mark06.png', longDescription: 'Construído secretamente na base lunar Tabgha sob a supervisão direta da SEELE. Dispensa cabos umbilicais convencionais.' },
        
        { id: 11, type: 'anjo', class: 'anjo-white', name: 'Adão', designation: '1º Anjo', imageName: 'Adam_Giant_of_Light.webp', longDescription: 'A primeira Semente da Vida depositada na Terra. Descoberto na Antártida, seu despertar causou o Segundo Impacto e a subsequente redução drástica da população humana.' },
        { id: 12, type: 'anjo', class: 'anjo-white', name: 'Lilith', designation: '2º Anjo', imageName: 'lilith.webp', longDescription: 'A segunda Semente da Vida na Terra e progenitora dos Lilins (a humanidade). Mantida presa no Terminal Dogma abaixo do quartel-general da NERV.' },
        { id: 4, type: 'anjo', class: 'anjo-white', name: 'Sachiel', designation: '3º Anjo', imageName: 'sachiel.webp', longDescription: 'O primeiro Anjo a atacar Neo Tokyo-3 após quinze anos de inatividade dessas entidades. Possui capacidades regenerativas velozes.' },
        { id: 5, type: 'anjo', class: 'anjo-white', name: 'Ramiel', designation: '5º Anjo', imageName: 'Ramiel.webp', longDescription: 'Uma gigantesca fortaleza flutuante octaédrica capaz de perfurar as camadas blindadas superiores do GeoFront com um feixe de partículas altamente letal.' },
        { id: 6, type: 'anjo', class: 'anjo-white', name: 'Zeruel', designation: '14º Anjo', imageName: 'zeruel.webp', longDescription: 'Uma das entidades de combate mais devastadoras registradas, capaz de destruir as defesas físicas da NERV com facilidade absurda usando braços laminares.' },
        { id: 9, type: 'anjo', class: 'anjo-white', name: 'Shamshel', designation: '4º Anjo', imageName: 'Shamshel.webp', longDescription: 'Entidade voadora em formato de inseto que utiliza chicotes de energia térmica/luz de alta intensidade para fatiar seus alvos.' },
        { id: 10, type: 'anjo', class: 'anjo-white', name: 'Gaghiel', designation: '6º Anjo', imageName: 'Gaghiel.webp', longDescription: 'Uma gigantesca criatura aquática que atacou a frota de transporte da ONU no Oceano Pacífico em busca do embrião de Adão.' }
      ]
    };
  },
  created() {
    // Captura o ID passado na URL quando o card envia o clique
    const charId = this.$route.params.id;
    this.character = this.database.find(item => item.id == charId);
  },
  computed: {
    getCharColor() {
      const colors = {
        'eva-01': '#bb66ff',
        'eva-00': '#0088ff',
        'eva-02': '#ff3333',
        'eva-08': '#ff88cc',
        'mark-06': '#174a76',
        'anjo-white': '#ffffff'
      };
      return colors[this.character.class] || '#ff5500';
    }
  },
  methods: {
    getImageUrl(name) {
      return new URL(`../assets/${name}`, import.meta.url).href;
    }
  }
};
</script>

<style scoped>
.details-wrapper, .error-wrapper {
  min-height: 100vh;
  background-color: #000;
  color: #d0d0d0;
  font-family: 'Courier New', Courier, monospace;
  padding: 40px 20px;
  box-sizing: border-box;
}

.details-container {
  max-width: 1100px;
  margin: 0 auto;
  border: 1px solid var(--char-color);
  background: rgba(13, 13, 13, 0.95);
  padding: 30px;
}

.header-navigation {
  margin-bottom: 30px;
}

/* BOTÃO DE RETORNO COM GLOW VERDE COESO */
.back-btn {
  display: inline-block;
  color: #ff5500;
  border: 1px solid #ff5500;
  padding: 10px 20px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: bold;
  transition: all 0.3s ease;
}

.back-btn:hover {
  color: #00ff00;
  border-color: #00ff00;
  background-color: rgba(0, 255, 0, 0.05);
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.6), inset 0 0 10px rgba(0, 255, 0, 0.2);
  transform: scale(1.01);
}

/* ESTRUTURA DA WIKI */
.wiki-layout {
  display: flex;
  gap: 40px;
}

.wiki-sidebar {
  width: 300px;
  flex-shrink: 0;
  border: 1px solid var(--char-color);
  background: #080808;
  padding: 20px;
}

.sidebar-header {
  text-align: center;
  border-bottom: 1px solid var(--char-color);
  padding-bottom: 15px;
  margin-bottom: 15px;
}

.sidebar-header h2 {
  margin: 0 0 5px 0;
  color: var(--char-color);
  font-size: 1.5rem;
}

.type-badge {
  display: inline-block;
  font-size: 0.75rem;
  border: 1px solid currentColor;
  padding: 2px 8px;
  color: var(--char-color);
}

.main-image-container {
  width: 100%;
  height: 230px;
  border: 1px solid #222;
  overflow: hidden;
  margin-bottom: 15px;
  background-color: #000;
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.spec-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
}

.spec-table td {
  padding: 8px 4px;
  border-bottom: 1px solid #1c1c1c;
  vertical-align: top;
}

.spec-table td:first-child {
  color: var(--char-color);
  width: 35%;
}

.wiki-content {
  flex-grow: 1;
}

.wiki-content h1 {
  color: var(--char-color);
  margin: 0 0 5px 0;
  font-size: 1.8rem;
  border-bottom: 1px solid var(--char-color);
  padding-bottom: 10px;
}

.status-line {
  color: #00ff00;
  font-size: 0.8rem;
  margin-bottom: 30px;
}

.text-section {
  margin-bottom: 25px;
}

.text-section h3 {
  color: var(--char-color);
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  border-left: 3px solid var(--char-color);
  padding-left: 10px;
}

.text-section p {
  line-height: 1.6;
  text-align: justify;
  color: #b0b0b0;
}

@media (max-width: 820px) {
  .wiki-layout { flex-direction: column; }
  .wiki-sidebar { width: 100%; }
}
</style>