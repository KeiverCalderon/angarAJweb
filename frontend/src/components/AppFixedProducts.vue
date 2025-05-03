<template>
    <section class="products-area">
        <h2>Productos Destacados</h2>
        <div class="products-carrousel">
        <Splide :options="{
            perPage: 3,
            arrows: true,
            gap: '1rem',
            padding: '20px',
            height: '400px',
            }"
        >
                <SplideSlide v-for="(producto, index) in productos" :key="index">
                    <AppProduct
                        :nombre="producto.nombre"
                        :precio="producto.precio"
                        :imagen="producto.imagen"
                    />
                </SplideSlide>
        </Splide>
        </div>
    </section>
</template>
<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import AppProduct from './AppProduct.vue';


export default {
    name: 'AppFixedProducts',
    components: {
        Splide,
        SplideSlide,
        AppProduct
    },
    data() {
        return {
            // Pruebas sin BD (Estos son los mismos valores que debe devolver el JSON del endpoint "obtenerProductosDestacados")
            productos: [
            { nombre: "Levadura Instantánea", precio: 560, imagen: '/ruta'},
            { nombre: "Leche Líquida", precio: 50, imagen: '/ruta'},
            { nombre: "Chocolate en Barra", precio: 60, imagen: '/ruta'},
            { nombre: "Levadura Instantánea", precio: 560, imagen: '/ruta'},
            { nombre: "Levadura Instantánea", precio: 560, imagen: '/ruta'},
            { nombre: "Levadura Instantánea", precio: 560, imagen: '/ruta'},
            ],
        };
    },
};
</script>
<style scoped>
    .products-area h2 {
        color: var(--letras);
        font-size: 2.5em;
        font-weight: 350;
        margin-bottom: 20px;
        text-align: center;
        margin: 40px;
    }
    .products-area {
        width: 100%;
        height: calc(100vh - 80px);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        overflow: hidden;
        padding: 0 20px;
        box-sizing: border-box;
    }

    .products-carrousel {
        width: 100%;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        overflow: hidden;
    }
    .product-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: row;
        overflow: hidden;
        padding: 20px;
        box-sizing: border-box;
        background-color: aquamarine;
    }
</style>