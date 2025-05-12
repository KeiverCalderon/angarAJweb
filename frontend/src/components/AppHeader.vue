<template>
    <header>
        <h1><a href="/"><img src="../assets/logo.png" alt=""></a></h1>
        <div class="buttons-area">
            <a v-if="$route.path === '/cart' || $route.path === '/account'" href="/"><p class="a_text">Inicio</p><i class='bx bx-home' ></i></a>
            <a v-else href="/cart"><p class="a_text">Carrito</p><i class='bx bx-cart' ></i></a>
            <a v-if="session===0" href="/login"><p class="a_text">Cuenta</p><i class='bx bx-user' ></i></a>
            <a v-else-if="session===1 && $route.path != '/account'" href="/account"><p class="a_text">Perfil</p><i class='bx bx-user' ></i></a>
            <a v-else href="/admin"><p class="a_text">Volver</p><i class='bx bx-reply' ></i></a>
        </div>

        <!-- Herramientas de desarrollo -->
        <!-- Selector oculto -->
        <div v-if="selectorVisible" class="hidden-selector" style="display:flex; align-items: center; justify-content: center; flex-direction: column; position: fixed; top: 90; left: 20; background-color: azure; z-index: 9999;">
            <h2>DEVELOPER OPTIONS</h2>
            <p>Nivel de sesión</p>
            <input type="number" v-model="session" placeholder="LEVEL" min="0" max="4">
            <p>Presione Z para cerrar</p>
        </div>

    </header>
</template>

<script>
import 'boxicons/css/boxicons.min.css';

export default {
    name: 'AppHeader',
    data() {
        return {
            session: 0, // 0: No logueado, 1: Cliente, 2: Admin, 3: Supervisor, 4: Jefe
            selectorVisible: false, // TEST
        };
    },
    methods: {
        toggleSelector(event) { // TEST
            if (event.key === 'z') { // TEST
                this.selectorVisible = !this.selectorVisible; // TEST
            } // TEST
        }, // TEST
    },
    mounted() {
        window.addEventListener('keydown', this.toggleSelector);// TEST
    },
};
</script>

<style scoped>

*{
    font-family: "Cal Sans", sans-serif;
}

header {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
    }

header h1 {
    color: #202020;
    font-weight: 350;
    font-size: 1.5em;
    }

header h1 a {
    text-decoration: none;
    color: #202020;
    transition: all 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    }

h1 a img{
    height: 80px;
    width: 200px;
    transition: all 0.3s ease-in-out;
    }

.buttons-area {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;
    }

.a_text{
        display: none;
    }

.buttons-area a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #202020;
    height: 50px;
    aspect-ratio: 1/1;
    transition: all 0.3s ease-in-out;
    }

.buttons-area a i {
    font-size: 40px;
    transition: all 0.3s ease-in-out;
    font-weight: 100;
    }

.buttons-area a:hover {
    color: var(--boton-hover);
    transform: scale(1.1);
    }

#bugfix_lenght {
    font-size: 60px;
    }

/* Adaptación a pantallas mas grandes */

@media (min-width:640px){
    header{
        padding: 5px 20px;
    }
    header h1 {
        font-size: 2.3em;
    }
    .a_text {
        display: inline;
        font-size: 20px;
    }
    .buttons-area a i {
        font-size: 30px;
    }
    #bugfix_lenght {
    font-size: 32px;
    }
    .buttons-area {
    gap: 25px;
    }
}

</style>