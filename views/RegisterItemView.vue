<template>
  <div class="register-item-container">
    <h2>REGISTRAR NOVA ENTIDADE // RELATÓRIO TÁTICO</h2>
    <hr class="divider" />

    <form @submit.prevent="saveItem" class="item-form">
      <div class="input-group">
        <label>CATEGORIA BIOLÓGICA / MECÂNICA:</label>
        <select v-model="newItem.type" class="form-select">
          <option value="eva">EVANGELION (MECÂNICO / SINTÉTICO)</option>
          <option value="anjo">ANJO (ENTIDADE BIOLÓGICA IDENTIFICADA)</option>
        </select>
      </div>

      <div class="input-group">
        <label>CODINOME (EX: EVA-03, GAGHIEL):</label>
        <input v-model="newItem.name" type="text" required />
      </div>

      <div class="input-group">
        <label>DESIGNAÇÃO OFICIAL (EX: 6º ANJO):</label>
        <input v-model="newItem.designation" type="text" required />
      </div>

      <div class="input-group">
        <label>URL DA IMAGEM:</label>
        <input v-model="newItem.image" type="url" placeholder="https://..." required />
      </div>

      <div class="input-group">
        <label>ANÁLISE DE COMPORTAMENTO / DESCRIÇÃO:</label>
        <textarea v-model="newItem.description" rows="4" required></textarea>
      </div>

      <button type="submit" class="btn-save">GRAVAR REGISTRO NO BANCO DO MAGI</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterItemView',
  data() {
    return {
      newItem: { type: 'eva', name: '', designation: '', description: '', image: '' }
    };
  },
  methods: {
    saveItem() {
      alert(`Dados da entidade ${this.newItem.name} transmitidos com sucesso via canais criptografados!`);
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.register-item-container { color: #ff5500; background-color: #050505; padding: 30px; border: 1px solid #ff5500; max-width: 600px; margin: 0 auto; }
.divider { border: 0; border-top: 2px solid #ff5500; margin: 20px 0; }
.item-form { display: flex; flex-direction: column; gap: 15px; }
.input-group { display: flex; flex-direction: column; gap: 5px; }
.input-group label { font-size: 13px; font-weight: bold; }
.input-group input, .form-select, .input-group textarea { background-color: #000; border: 1px solid #ff5500; color: #ff5500; padding: 10px; font-family: inherit; }
.btn-save { background-color: transparent; color: #ff5500; border: 1px solid #ff5500; padding: 12px; font-family: inherit; font-weight: bold; cursor: pointer; margin-top: 10px; transition: 0.3s; }
.btn-save:hover { background-color: #ff5500; color: #000; }
</style>