<template>
  <div class="login-container">
    <div class="login-box">
      <h2>{{ isRegister ? 'CADASTRO DE OPERADOR' : 'AUTENTICAÇÃO REQUERIDA' }}</h2>
      <p class="security-warning">ACESSO RESTRITO // PESSOAL AUTORIZADO APENAS</p>
      
      <form @submit.prevent="handleSubmit">
        <div v-if="isRegister" class="input-group">
          <label>NOME COMPLETO:</label>
          <input v-model="form.name" type="text" required />
        </div>

        <div class="input-group">
          <label>CÓDIGO DE ACESSO (EMAIL):</label>
          <input v-model="form.email" type="email" required />
        </div>

        <div class="input-group">
          <label>CHAVE CRIPTOGRÁFICA (SENHA):</label>
          <input v-model="form.password" type="password" required />
        </div>

        <button type="submit" class="btn-submit">
          {{ isRegister ? 'EFETIVAR REGISTRO' : 'CONECTAR AO MAGI' }}
        </button>
      </form>

      <p @click="isRegister = !isRegister" class="toggle-mode">
        {{ isRegister ? 'Já possui credenciais? Ir para Autenticação' : 'Solicitar novo registro de operador' }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      isRegister: false,
      form: { name: '', email: '', password: '' }
    };
  },
  methods: {
    handleSubmit() {
      if (this.isRegister) {
        alert(`Operador ${this.form.name} pré-registrado com sucesso! Credenciais enviadas para validação do Comandante Ikari.`);
        this.isRegister = false;
      } else {
        alert(`Conexão estabelecida! Bem-vindo de volta ao terminal central da NERV.`);
        this.$router.push('/');
      }
    }
  }
};
</script>


<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
}
.login-box {
  background-color: #0d0d0d;
  border: 2px solid #ff5500;
  padding: 40px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 0 20px rgba(255, 85, 0, 0.2);
}
h2 { text-align: center; margin-bottom: 5px; }
.security-warning { color: #ff3333; text-align: center; font-size: 12px; font-weight: bold; margin-bottom: 25px; animation: pulse 2s infinite; }
.input-group { display: flex; flex-direction: column; gap: 5px; margin-bottom: 15px; }
.input-group label { font-size: 12px; font-weight: bold; }
.input-group input { background-color: #000; border: 1px solid #ff5500; color: #ff5500; padding: 10px; font-family: inherit; }
.btn-submit { background-color: #ff5500; color: #000; border: none; width: 100%; padding: 12px; font-family: inherit; font-weight: bold; cursor: pointer; margin-top: 15px; }
.toggle-mode { text-align: center; font-size: 12px; margin-top: 20px; text-decoration: underline; cursor: pointer; }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
</style>