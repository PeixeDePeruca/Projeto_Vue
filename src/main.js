import { createApp } from 'vue';
import App from './App.vue'; // Correto, pois estão na mesma pasta 'src' agr essa praga n dá + problema
import router from '../router/index.js'; //Ajustado para subir um nível e entrar na pasta 'router'
import './assets/global.css'; 

const app = createApp(App);
app.use(router);
app.mount('#app');