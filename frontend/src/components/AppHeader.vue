<template>
    <header>
            <h1><a href="/">Decolorvers</a></h1>
            <div class="buttons-area">
                <a href="/"><p class="a_text">Carrito</p><span class="material-symbols-rounded">shopping_cart</span></a>
                <a href="/login"><p class="a_text">Cuenta</p><span class="material-symbols-rounded" id="bugfix_lenght">person</span></a>
            </div>
    </header>
</template>

<script>
export default {
    name: 'AppHeader',
};
</script>

<style scoped>

header {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 5px;
    }

header h1 {
    color: #202020;
    font-weight: 350;
    font-size: 2.3em;
    }

header h1 a {
    text-decoration: none;
    color: #202020;
    transition: all 0.3s ease-in-out;
    }

.buttons-area {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
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
    height: 60px;
    aspect-ratio: 1/1;
    transition: all 0.3s ease-in-out;
    }

.buttons-area a span {
    font-size: 50px;
    transition: all 0.3s ease-in-out;
    font-family: 'Material Symbols Rounded', sans-serif;
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

@media (min-width:400px){
    header {
    padding: 5px 20px;
    }
    .buttons-area {
    gap: 20px;
    }
}

@media (min-width:600px){
    .a_text{
        display: inline;
        font-size: 20px;
    }
    .buttons-area a span {
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