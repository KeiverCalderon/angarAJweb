<template>
    <section class="products-area">
        <h2>Productos Destacados</h2>
        <div class="products-carrousel">
            <Splide :options="{
                perPage: 3,
                arrows: true,
                pagination: false,
                gap: '1rem',
                padding: '50px',
                autoWidth: false,
                width:'100%',
                breakpoints: {
                    776: {
                        perPage: 1,
                        gap: '0.5rem',
                        arrows: true,
                        width:'100%',
                    },
                    1024: {
                        perPage: 2,
                        gap: '1rem',
                        arrows: true,
                        width:'100%',
                    },
                },
                }"
            >
                <SplideSlide v-for="(producto, index) in productos" :key="index">
                    <AppProduct
                        :mode="'slider'"
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
/* First Mobile */
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
        min-height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        overflow: hidden;
        box-sizing: border-box;
    }

    .products-carrousel {
        width: 100%;
        max-width: 1200px;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        overflow: hidden;
    }

    .products-carrousel .splide__slide {
        max-width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }

    .products-carrousel .splide__slide > * {
        width: 300px;
        height: 300px;
        box-sizing: border-box;
    }

    /* Adapciones a pantallas más grandes */

    @media (min-width: 776px) {
        .products-carrousel .splide__slide {
            flex: 0 0 auto; /* Asegura que los elementos no se expandan automáticamente */
            width: 300px;
        }
        .products-carrousel .splide__slide > * {
            width: 100%;
        }
    }
</style>