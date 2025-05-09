<template>
    <div class="products-view">
        <h2>{{ categoria }}</h2>
        <input type="text" placeholder="Buscar Productos" v-model="busqueda" class="search-input" />
        <section class="products-grid">
            <AppProduct
                v-for="(producto, index) in productosFiltrados" :key="index"
                :mode="'normal'"
                :producto="producto"
            />
        </section>
        <h3 v-if="productosFiltrados.length < 1" class="noResults">No Hay Productos Que Coincidan en la categoría {{ categoria }}</h3>
    </div>
</template>

<script>
import AppProduct from '../components/AppProduct.vue';

export default {
    name: 'ProductosView',
    emits: ['eventoPersonalizado'],
    computed: {
        categoria() {
            return this.$route.params.category;
        },
        // Filtrar productos por nombre
        productosFiltrados() {
            return this.productos.filter(producto => {
                return producto.nombre.toLowerCase().includes(this.busqueda.toLowerCase());
            });
        },
    },
    components: {
        AppProduct,
    },
    data() {
        return {
            busqueda : "",
            resultados: [],
            // Pruebas sin BD (Estos son los mismos valores que debe devolver el JSON del endpoint "obtenerProductosPorCategoria(categoria)")
            productos: [
            { id:1, nombre: "Leche Latti", precio: 500, descripción: 'Leche Latti 1 litro', imagen: '/ruta'},
            { id:2, nombre: "Galleta Maria", precio: 200, descripción: 'Leche Latti 1 litro', imagen: '/ruta'},
            { id:3, nombre: "Jamón Plumrouse", precio: 1000, descripción: 'Leche Latti 1 litro', imagen: '/ruta'},
            { id:4, nombre: "Jamón Plumrouse", precio: 1000, descripción: 'Leche Latti 1 litro', imagen: '/ruta'},
            ],
        };
    },
};
</script>
<style scoped>

.products-view{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: var(--fondo);
    min-height: calc(100vh - 80px);
}

h2{
    font-size: 2.5em;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    color: var(--letras);
}

.search-input{
    width: 90%;
    max-width: 500px;
    height: 40px;
    padding: 5px 10px;
    border-radius: 20px;
    border: 1px solid var(--letras);
    background-color: white;
    color: var(--texto);
    font-size: 1em;
    margin-bottom: 20px;
}

.noResults{
    font-size: 1.5em;
    color: var(--letras);
    margin-top: 20px;
}

.products-grid {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--fondo);
    text-align: center;
    gap: 20px;
    margin: 20px 0;
}

/* Adaptación a pantallas más grandes */
@media (min-width:670px){
    .products-grid {
        width: calc(300px * 2 + 20px);
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(auto, 1fr);
        gap: 20px;
    }
}

@media (min-width:990px){
    .products-grid {
        width: calc(300px * 3 + 40px);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(auto, 1fr);
        gap: 20px;
    }
}
</style>