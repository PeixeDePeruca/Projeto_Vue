<template>
  <div class="auth-container">
    <div class="auth-box">
      <h2>NÉRV // REGISTRO DE OPERADOR</h2>
      <form @submit.prevent="handleRegister">
        <div class="input-group">
          <label>Nome de Usuário</label>
          <input v-model="username" type="text" required placeholder="Ex: shinji_ikari" />
        </div>
        <div class="input-group">
          <label>Senha de Acesso</label>
          <input v-model="password" type="password" required placeholder="********" />
        </div>
        <button type="submit" class="auth-btn">CADASTRAR CADETE</button>
      </form>
      <p class="switch-auth">
        Já possui credenciais? <router-link to="/login">Efetuar Login</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterItemView',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleRegister() {
      if (this.username && this.password) {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const userExists = users.some(u => u.username === this.username);
        
        if (userExists) {
          alert('ERRO: Este codinome já está em uso no sistema.');
          return;
        }

        users.push({ username: this.username, password: this.password });
        localStorage.setItem('users', JSON.stringify(users));
        
        alert('CADASTRO CONCLUÍDO: Credenciais enviadas ao MAGI.');
        this.$router.push('/login');
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
  min-height: 85vh; 
  padding: 20px;
  box-sizing: border-box;
}

/* Reduzido sutilmente para 610px e ajustado o respiro interno */
.auth-box { 
  background-color: #0d0d0d; 
  border: 2px solid #ff0000; 
  padding: 45px 38px; 
  width: 100%; 
  max-width: 610px; 
  box-shadow: 0 0 25px rgba(255, 0, 0, 0.2); 
  box-sizing: border-box;
}

h2 { 
  color: #ff0000; 
  text-align: center; 
  margin-bottom: 38px; 
  font-size: 24px; /* Ajuste sutil no tamanho do título */
  letter-spacing: 2px; 
  font-weight: bold;
}

.input-group { 
  display: flex; 
  flex-direction: column; 
  gap: 10px; 
  margin-bottom: 30px; 
}

.input-group label { 
  color: #ff0000; 
  font-size: 15px; /* Fonte ajustada */
  font-weight: bold; 
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Inputs ligeiramente mais baixos e elegantes */
.input-group input { 
  background-color: #000; 
  border: 1px solid #ff0000; 
  color: #ff0000; 
  padding: 15px; 
  font-family: inherit; 
  font-size: 17px; 
  box-sizing: border-box;
  width: 100%;
}

.input-group input::placeholder {
  color: #550000;
}

/* Botão balanceado proporcionalmente */
.auth-btn { 
  background-color: #ff0000; 
  color: #000; 
  border: 2px solid #ff0000; 
  padding: 15px; 
  width: 100%; 
  font-family: inherit; 
  font-size: 17px; 
  font-weight: bold; 
  cursor: pointer; 
  margin-top: 10px; 
  transition: all 0.3s ease; 
  letter-spacing: 1px;
}

.auth-btn:hover { 
  background-color: #000; 
  color: #ff0000; 
}

.switch-auth { 
  color: #888; 
  text-align: center; 
  margin-top: 30px; 
  font-size: 15px; 
}

.switch-auth a { 
  color: #ff0000; 
  text-decoration: none; 
  font-weight: bold; 
}

/* 📱 Mantém a responsividade impecável no inspetor do professor */
@media (max-width: 768px) {
  .auth-box {
    padding: 35px 20px;
    max-width: 100%;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 25px;
  }

  .input-group {
    margin-bottom: 20px;
  }

  .input-group input, .auth-btn {
    padding: 12px;
    font-size: 15px;
  }

  .switch-auth {
    font-size: 13px;
  }
}
</style>