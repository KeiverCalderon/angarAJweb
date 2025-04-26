import { createRouter, createWebHistory } from 'vue-router'; 
import Login from '../views/LoginView.vue';
import Register from '../views/RegisterView.vue';
import IndexView from '@/views/IndexView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: IndexView },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
  ],
});

export default router;