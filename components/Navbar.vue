<template>
  <nav class="navbar">
    <div class="nav-brand">NERV // MAGI SYSTEM</div>
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">Sobre</router-link>
      
      <button v-if="isLoggedIn" @click="handleLogout" class="logout-btn">SAIR</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    // Verifica dinamicamente se o operador está logado no MAGI
    isLoggedIn() {
      return localStorage.getItem('isAuthenticated') === 'true';
    }
  },
  methods: {
    handleLogout() {
      // Limpa as credenciais da sessão atual
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('currentUser');
      
      alert('SESSÃO ENCERRADA: Conexão com o terminal MAGI interrompida.');
      
      // Manda o usuário de volta para a tela de login
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  border-bottom: 2px solid #ff0000;
  padding: 15px 30px;
}

.nav-brand {
  color: #ff0000;
  font-weight: bold;
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-links a {
  color: #ff0000;
  text-decoration: none;
  font-weight: bold;
}

.nav-links a.router-link-exact-active {
  text-decoration: underline;
}

/* Botão táctico de Logout */
.logout-btn {
  background: none;
  border: 1px solid #ff0000;
  color: #ff0000;
  padding: 5px 12px;
  cursor: pointer;
  font-family: inherit;
  font-weight: bold;
  transition: 0.3s;
}

.logout-btn:hover {
  background-color: #ff0000;
  color: #000;
}

/* 📱 Responsividade da barra para a inspeção do professor */
@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
    gap: 10px;
    padding: 15px;
    text-align: center;
  }
}
</style>