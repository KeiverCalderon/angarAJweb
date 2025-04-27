import { createRouter, createWebHistory } from 'vue-router';
import IndexView from '@/views/IndexView.vue';
import Login from '../views/LoginView.vue';
import Register from '../views/RegisterView.vue';
import AdminPanel from '../layouts/AdminPanel.vue';
import Dashboard from '../views/admin/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: IndexView },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    {
      path: '/admin',
      component: AdminPanel,
      children: [
        {
          path: 'dashboard',
          component: Dashboard
        },
      ]
    },
  ],
});

export default router;