<template>
  <div class="auth-container">
    <div class="auth-box">
      <h2>SISTEMA MAGI // AUTENTICAÇÃO</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label>Codinome do Operador</label>
          <input v-model="username" type="text" required placeholder="Digite seu usuário..." />
        </div>
        <div class="input-group">
          <label>Código de Segurança</label>
          <input v-model="password" type="password" required placeholder="Digite sua senha..." />
        </div>
        <button type="submit" class="auth-btn">CONECTAR AO TERMINAL</button>
      </form>
      <p class="switch-auth">
        Novo na NERV? <router-link to="/register">Solicitar Registro</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.username === this.username && u.password === this.password);

      if (user) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('currentUser', this.username);
        this.$router.push('/');
      } else {
        alert('ACESSO NEGADO: Credenciais incorretas ou inexistentes.');
      }
    }
  }
};
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  background-image: url('/MagiSystem.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #000;
}

.auth-box {
  background-color: #0d0d0d;
  border: 2px solid #ff0000;
  padding: 20px 25px; 
  width: 90%;
  max-width: 387.6px; 
  box-shadow: 0 0 15px rgba(255, 0, 0, 0.3);
  z-index: 10;
  box-sizing: border-box;
  
  /* Ajustado de 50px para 40px para subir a caixa em 2% */
  margin-top: 40px; 
}

h2 {
  color: #ff0000;
  text-align: center;
  margin-bottom: 20px;
  /* Aumentado 2% sobre os 16.8px */
  font-size: 17.14px; 
  letter-spacing: 1px;
  font-weight: bold;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 15px;
}

.input-group label {
  color: #ff0000;
  /* Aumentado 2% sobre os 11.5px */
  font-size: 11.73px; 
  font-weight: bold;
  text-transform: uppercase;
}

.input-group input {
  background-color: #000;
  border: 1px solid #ff0000;
  color: #ff0000;
  padding: 8px;
  font-family: inherit;
  /* Aumentado 2% sobre os 14.7px */
  font-size: 14.99px; 
  width: 100%;
  box-sizing: border-box;
}

.auth-btn {
  background-color: #ff0000;
  color: #000;
  border: 1px solid #ff0000;
  padding: 10px;
  width: 100%;
  font-family: inherit;
  /* Aumentado 2% sobre os 14.7px */
  font-size: 14.99px; 
  font-weight: bold;
  cursor: pointer;
  margin-top: 5px;
}

.auth-btn:hover {
  background-color: #000;
  color: #ff0000;
}

.switch-auth {
  color: #888;
  text-align: center;
  margin-top: 15px;
  /* Aumentado 2% sobre os 11.5px */
  font-size: 11.73px; 
}

.switch-auth a {
  color: #ff0000;
  text-decoration: none;
  font-weight: bold;
}
</style>