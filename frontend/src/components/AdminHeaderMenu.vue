<template>
    <header>
        <h1>Administración ‎ Angar</h1>
        <div class="user-info">
            <a href="/" class="return-store"><i class='bx bx-store'></i>Ver tienda</a>
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
    <div class="content">
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
                <div id="return-store" class="return-store">
                    <i class='bx bx-store'></i><a href="/">Ver tienda</a>
                </div>
                <div id="user-info" class="user-info">
                    <i class='bx bx-user'></i>
                    <div class="user-data">
                        <h2>{{ usuario }}</h2>
                        <p>{{ rol }}</p>
                    </div>
                </div>
            </nav>
        </div>
        <main>
        <router-view />
        </main>
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
            const userInfo = document.getElementById('user-info');
            const returnStore = document.getElementById('return-store');
            if (window.innerWidth < 768) {
                if (this.menuVisible) {
                menu.classList.add('menu-open');
                userInfo.classList.add('menu-open');
                returnStore.classList.add('menu-open');
                } else {
                    menu.classList.remove('menu-open');
                    userInfo.classList.remove('menu-open');
                    returnStore.classList.remove('menu-open');
                }
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
    padding: 5px 10px;
    height: 70px;
    background-color: var(--header-admin);
}

header h1{
    font-size: 1.5em;
    font-weight: 500;
    color: #ffffff;
}

header a.return-store{
    display: flex;
    align-items: center;
    flex-direction: row;
    text-decoration: none;
    color: #ffffff;
    font-size: 1.1em;
    background-color: #393E46;
    border-radius: var(--border-radius-box);
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

.content{
    display: flex;
    flex-direction: row;
}

main{
    background-image: url('../assets/fondoAdmin.png');
    /* background-image: url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100'); */
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: calc(100vh - 70px);
}

#lateral-menu{
    background-color: var(--header-admin);
    position: fixed;
    left: 0px;
    top: 70px;
    height: 100%;
    width: 230px;
    transform: translateX(-100%);
    opacity: 0;
    transition: transform 0.4s ease-in-out, opacity 0.3s ease-in-out;
    z-index: 1000;
}

#lateral-menu.menu-open {
    transform: translateX(0);
    opacity: 1;
}

#menu-options{
    padding: 1px 0;
    padding-left: 15px;
    width: 230px;  
    background-color: var(--header-admin);
    overflow-x: auto;
    height: 100%;
}

#menu-options ul{
    list-style: none;
    padding: 0px;
    margin: 0px;
    overflow-x: hidden;
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
    padding: 5px 20px;
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
    bottom: 90px;
    z-index: 5000;
    transform: translateY(200%);
    opacity: 0;
    transition: transform 1s ease-in-out, opacity 0.5s ease-in-out;
}

#user-info.menu-open {
    transform: translateX(0);
    opacity: 1;
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

#menu-options .return-store{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: #393E46;
    border-radius: var(--border-radius-box);
    position: fixed;
    padding: 10px 23px;
    bottom: 150px;
    z-index: 5000;
    transform: translateY(260%);
    opacity: 0;
    transition: transform 1s ease-in-out, opacity 0.5s ease-in-out;
}

#menu-options .return-store:hover{
    animation: up 0.5s ease-in-out;
}
@keyframes up{
    0%{transform: scale(1);}
    100%{transform: scale(1.1);}
}

.return-store i{
    font-size: 1.7em;
    color: #ffffff;
    padding-left: 5px;
}

.return-store a{
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 1.2em;
    color: #ffffff;
    padding-left: 20px;
    padding-right: 10px;
}

#return-store.menu-open{
    transform: translateX(0);
    opacity: 1;
}

/* Adaptación a pantallas más grandes */

@media (min-width: 768px) {
    header{
        padding: 0px 20px;
        position:sticky;
        top: 0px;
    }
    header a.return-store{
        padding: 5px 10px;
        margin: 0px 23px;
        gap: 5px;
        transition: transform 0.3s ease;
    }
    header a.return-store i{
        font-size: 1.5em;
    }
    header a.return-store:hover{
        transform: scale(1.1);
    }
    header .user-info{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
    header .user-info i{
        padding-left: 0;
    }
    header .user-data{
        padding:0
    }
    header .menu-button{
        display: none;
    }
    .menu-close{
        position: relative;
        display: block;
    }
    #menu-options .user-info{
        display: none;
    }
    #lateral-menu{
        transform: translateX(0) !important;
        opacity: 1 !important;
        transition: none !important;
        display: block !important;
        width: 250px;
        overflow-y: hidden;
    }
    main{
        width: calc(100% - 250px);
        margin-left: 250px;
    }
    #menu-options .return-store{
        display: none;
    }
}

@media (max-height: 630px) and (max-width: 768px) {
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

</style>