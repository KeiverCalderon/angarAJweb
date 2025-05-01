<template>
    <header>
            <h1><a href="/"><img src="../assets/logo.png" alt=""></a></h1>
            <div class="buttons-area">
                <a href="/"><p class="a_text">Carrito</p><i class='bx bx-cart' ></i></a>
                <a href="/login"><p class="a_text">Cuenta</p><i class='bx bx-user' ></i></a>
            </div>
    </header>
</template>

<script>
import 'boxicons/css/boxicons.min.css';

export default {
    name: 'AppHeader',
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