import { createRouter, createWebHistory } from 'vue-router';
// Ajustado o caminho para entrar na pasta 'src/views'
import HomeView from '../src/views/HomeView.vue';
import LoginView from '../src/views/LoginView.vue';
import RegisterItemView from '../src/views/RegisterItemView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterItemView
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// Trava de segurança do MAGI
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;