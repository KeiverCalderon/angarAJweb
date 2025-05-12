import { createRouter, createWebHistory } from 'vue-router';
import IndexView from '@/views/IndexView.vue';
import Login from '../views/LoginView.vue';
import Register from '../views/RegisterView.vue';
import AdminPanel from '../layouts/AdminPanel.vue';
import ClientPanel from '../layouts/ClientPanel.vue';
import Dashboard from '../views/DashboardView.vue';
import CategoriesView from '../views/CategoriesView.vue';
import ProductosView from '../views/ProductosView.vue';
import ProductsDetails from '../views/ProductsDetails.vue';
import CarritoView from '../views/CarritoView.vue'; 
import MyAccountView from '@/views/ProfileView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { 
      path: '/',
      component: ClientPanel,
      children: [
        {
          path: '',
          component: IndexView,
        },
        {
          path: 'categories',
          component: CategoriesView,
        },
        {
          path: 'cart',
          component: CarritoView,
        },
        {
          path: '/:category',
          name: 'Categoria',
          component: ProductosView,
        },
        {
          path: '/product/:product',
          name: 'Producto',
          component: ProductsDetails,
        },
        {
          path: 'account',
          component: MyAccountView,
        },
      ]
    },
    {
      path: '/admin',
      component: AdminPanel,
      children: [
        {
          path: '',
          component: Dashboard
        },
      ]
    },
  ],
      scrollBehavior() {
        // Siempre desplázate al inicio de la página
        return { top: 0 };
    },
});

export default router;