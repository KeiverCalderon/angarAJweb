<template>
    <header>
      <h1>Decolorvers Panel</h1>
      <div class="menu-button">
        <button @click="toggleMenu">
            <i class="bx bx-menu"></i>
        </button>
      </div>
    </header>
    <div id="lateral-menu" class="menu-close">
        <nav id="menu-options">
            <ul>
                <li><a href="/admin" :class="{ active: $route.path === '/admin' }"><i class='bx bx-home'></i> Inicio</a></li>
                <li><a href="/admin/products" :class="{ active: $route.path === '/admin/products' }"><i class='bx bx-box'></i> Productos</a></li>
                <li><a href="/admin/categories" :class="{ active: $route.path === '/admin/categories' }"><i class='bx bx-category'></i> Categorías</a></li>
                <li><a href="/admin/orders" :class="{ active: $route.path === '/admin/orders' }"><i class='bx bx-cart'></i> Pedidos</a></li>
                <li><a href="/admin/sells" :class="{ active: $route.path === '/admin/sells' }"><i class='bx bx-cart'></i> Ventas</a></li>
                <li><a href="/admin/users" :class="{ active: $route.path === '/admin/users' }"><i class='bx bx-user'></i> Clientes</a></li>
                <li><a href="/admin/admins" :class="{ active: $route.path === '/admin/admins' }"><i class='bx bx-user'></i> Administradores</a></li>
                <li><a href="/admin/supervisors" :class="{ active: $route.path === '/admin/supervisors' }"><i class='bx bx-user'></i> Supervisores</a></li>
                <li><a href="/admin/settings" :class="{ active: $route.path === '/admin/settings' }"><i class='bx bx-cog'></i> Configuración</a></li>
                <li><a><i class='bx bx-log-out'></i> Cerrar sesión</a></li>
            </ul>
        </nav>
        <div class="user-info">
            <h2>{{ usuario }}</h2>
            <p>{{ rol }}</p>
        </div>
    </div>
</template>
<script>
import 'boxicons/css/boxicons.min.css';

export default {
    props: {
        usuario: {
            type:String,
            default: 'Usuario',
        },
        rol: {
            type:String,
            default: 'Jefe de tienda',
        }
    },
    name: 'AdminHeaderMenu',
    data() {
        return {
            menuVisible: false,
        };
    },
    methods: {
        toggleMenu() {
            this.menuVisible = !this.menuVisible;
            const menu = document.getElementById('lateral-menu');
            if (this.menuVisible) {
                menu.classList.remove('menu-close');
            } else {
                menu.classList.add('menu-close');
            }
        },
    },
};
</script>
<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    height: 70px;
}

#lateral-menu{
    background-color: rgb(170, 170, 170);
    position: fixed;
    left: 0px;
    top: 70px;
    height: 100%;
}

.menu-close{
    display: none;
}

.active{ 
  background-color: red;
  animation: pulsate-fwd-normal 400ms ease 0s 1 normal none; 
}

/* Adaptación a pantallas más grandes */

@media (min-width: 1000px) {
    .menu-button{
        display: none;
    }
    .menu-close{
        position: relative;
        display: block;
    }
}

/* animaciones */

@keyframes pulsate-fwd-normal {0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1);} }
</style>