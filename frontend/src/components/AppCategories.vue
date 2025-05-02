<!-- Mostrar categorias -->
<!-- Maximo 3 categorias y si excede el maximo se mostrara un boton para ver todas las categorias -->
<template>
    <section class="area_categories">
        <h2>Categorías</h2>
        <h2 v-if="categorias == false" style="font-family: open sans, Arial;"><i class='bx bxs-error' style='color:var(--letras); font-size: 1.8em; transform: translateY(8px)'  > </i>No Hay Categorias Disponibles</h2>
        <div v-if="mode=='three'" class="categoriesPin">
            <AppCategorie              
                v-for="categoria in categorias.slice(0, 3)" 
                :key="categoria" 
                :nombre="categoria.nombre"
                :imagen="categoria.imagen" 
            />
        </div>
        <div v-else class="categoriesAll">
            <AppCategorie                
                v-for="categoria in categorias" 
                :key="categoria" 
                :nombre="categoria.nombre"
                :imagen="categoria.imagen" 
            />
        </div>
        <div v-if="categorias.length > 3 && mode == 'three'" class="more-categories">
            <p>Más categorías</p>
            <a href="/categories" class=""><i class='bx bx-chevron-right' style="font-size: 1.8em;"></i></a>
        </div>
        <div v-if="mode == 'all'" class="more-categories">
            <a href="/" class=""><i class='bx bx-chevron-left' style="font-size: 1.8em;"></i></a>
            <p>Volver al Inicio</p>
        </div>
    </section>
</template>

<script>
import AppCategorie from './AppCategory.vue';
export default {
    props: {
        mode: {
            type: String,
            default: 'all',
        }
    },
    name: 'AppCategories',
    components: {
        AppCategorie,
    },
    data() {
        return {
            // Pruebas sin BD (Estos son los mismos valores que debe devolver el JSON del endpoint "obtenerCategorias")
            categorias: [
            { nombre: "Envases", imagen: '/ruta'},
            { nombre: "Lacteos", imagen: '/ruta'},
            { nombre: "Decoración", imagen: '/ruta'},
            { nombre: "Cubiertos", imagen: '/ruta'},
            { nombre: "Globos", imagen: '/ruta'},
            ],
        };
    },
};
</script>

<style scoped>
*{
    font-family: "Cal Sans", sans-serif;
}
.area_categories {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--fondo);
    padding-bottom: 20px;
}

.area_categories h2 {
    color: var(--letras);
    font-size: 2.5em;
    font-weight: 350;
    margin-bottom: 20px;
    text-align: center;
    margin: 40px;
}

.categoriesPin {
    width: 90%;
    height: 800px; 
    display: flex;
    flex-direction: column;
    background-color: var(--fondo);
    text-align: center;
    gap: 20px;
}

.categoriesAll {
    width: 90%;
    display: flex;
    flex-direction: column;
    background-color: var(--fondo);
    text-align: center;
    gap: 20px;
}

.more-categories {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
}

.more-categories p {
    font-size: 1.3em;
    color: var(--letras);
}

.more-categories a {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--boton);
    color: #ffffff;
    text-decoration: none;
    border-radius: var(--border-radius);
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

@media (min-width:768px){
    .categoriesPin {
        width: 97%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
    .categoriesAll {
        width: 97%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(auto, 1fr);
        gap: 20px;
    }
    .more-categories {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        margin-top: 25px;
        gap: 10px;
    }
}
</style>