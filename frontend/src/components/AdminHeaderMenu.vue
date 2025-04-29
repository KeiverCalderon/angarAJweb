<template>
    <header>
        <h1>Administración ‎ Angar</h1>
        <div class="user-info">
            <i class='bx bx-user'></i>
            <div class="user-data">
                <h2>{{ usuario }}</h2>
                <p>{{ rol }}</p>
            </div>
        </div>
        <div class="menu-button">
            <button @click="toggleMenu">
                <img src="../assets/menu.svg" alt="Menu">
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
                <li><a href="" class="logout"><i class='bx bx-log-out'></i>Cerrar sesión</a></li>
            </ul>
            <div class="user-info">
                <i class='bx bx-user'></i>
                <div class="user-data">
                    <h2>{{ usuario }}</h2>
                    <p>{{ rol }}</p>
                </div>
            </div>
        </nav>
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
    mounted() {
    // Llama a handleResize al cargar la página para ajustar el menú según el tamaño inicial
    this.handleResize();

    // Escucha los cambios en el tamaño de la ventana
    window.addEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
        const menu = document.getElementById('lateral-menu');
        const isWideScreen = window.matchMedia('(min-width: 768px)').matches;

        if (isWideScreen) {
            // Si la pantalla es mayor a 768px, muestra el menú
            this.menuVisible = true;
            menu.style.display = 'block';
            menu.classList.remove('menu-close');
        } else {
            // Si la pantalla es menor a 768px, oculta el menú
            this.menuVisible = false;
            menu.style.display = 'none';
            menu.classList.add('menu-close');
        }
    },
        toggleMenu() {
            this.menuVisible = !this.menuVisible;
            const menu = document.getElementById('lateral-menu');
            if (this.menuVisible) {
                menu.style.display = 'block';
                menu.classList.remove('menu-close');
            } 
            else {
                menu.classList.add('menu-close');

                setTimeout(() => {
                    menu.style.display = 'none';
                }, 300);
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
    background-color: var(--header-admin);
}

header h1{
    font-size: 1.5em;
    font-weight: 500;
    color: #ffffff;
}
header .user-info{
    display: none;
    }

header .menu-button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: var(--header-admin);
}

header .menu-button button{
    background-color: transparent;
    border: none;
    cursor: pointer;
}

header .menu-button img{
    width: 30px;
    height: 30px;
}

#lateral-menu{
    background-color: #393E46;
    position: fixed;
    left: 0px;
    top: 70px;
    height: 100%;
    width: 230px;
    animation: slideIn 0.4s ease-in-out;
}

#menu-options{
    padding: 1px 0;
    padding-left: 20px;
    width: 230px;  
    background-color: var(--header-admin);
    overflow-x: auto;
    height: 100%;
}

#menu-options ul{
    list-style: none;
    padding: 0px;
    margin: 0px;
}

#menu-options li{
    margin: 20px 0px;
}

#menu-options li a{
    text-decoration: none;
    font-size: 1.1em;
    color: #ffffff;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    gap: 15px;
    transition: transform 0.3s ease; 
}

#menu-options li .logout i{
    color: #df4848;
}

#menu-options li a:hover{
    transform: scale(1.1);
}

#menu-options .user-info{
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: #393E46;
    border-radius: var(--border-radius-box);
    position: fixed;
    bottom: 20px;
    z-index: 5000;
    animation: fadeIn 1s ease-in-out;
}

.user-info i{
    font-size: 2em;
    color: #ffffff;
    padding-left: 25px;
}
.user-data{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
}

.user-data h2, .user-data p{
    font-size: 1em;
    color: #ffffff;
    margin: 0;
    padding: 0 10px;
}

.menu-close {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    display: none; 
}

.active i{
    color: var(--header-admin);
    background-color: #ffffff;
    padding: 5px 5px;
    margin: -5px;
    border-radius: var(--border-radius);
}

.active:hover{
    border-radius: var(--border-radius);
}

/* Adaptación a pantallas más grandes */

@media (min-width: 768px) {
    header{
        padding: 0px 20px;
    }
    header .user-info{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
    header .menu-button{
        display: none;
    }
    .menu-close{
        position: absolute;
        display: block;
    }
    #menu-options .user-info{
        display: none;
    }
    #lateral-menu{
        position: absolute;
        animation: none;
    }
}

@media (max-height: 620px) {
    #menu-options ul{
        padding-bottom: 200px;
    }
    #menu-options li a:hover{
    transform: scale(1.0);
}
}

/* Adaptación a pantallas más pequeñas */

@media (max-width: 302px) {
    header h1{
        font-size: 1.2em;
    }
}

/* animaciones */

@keyframes slideIn {
    0% { opacity: 0; transform: translateX(-200px); }
    100% { opacity: 1; transform: translateX(0); }
    }

@keyframes slideOut {
    0% { opacity: 1; transform: translateX(0); }
    100% { opacity: 0; transform: translateX(-200px); }
    }

@keyframes fadeIn {
    0% { opacity: 0; transform: translateY(100px); }
    100% { opacity: 1; transform: translateY(0); }
    }
</style>