<!-- Mostrar categorias -->
<!-- Maximo 3 categorias y si excede el maximo se mostrara un boton para ver todas las categorias -->
<template>
    <section class="area_categories">
        <h2>Categorías</h2>
        <div class="categories">
            <AppCategorie />
            <AppCategorie />
            <AppCategorie />
        </div>
        <div class="more-categories">
            <p>Más categorías</p>
            <a href="/categories" class="">></a>
        </div>
    </section>
</template>

<script>
import AppCategorie from './AppCategory.vue';
export default {
    name: 'AppCategories',
    components: {
        AppCategorie,
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
    background-color: var(--categorias);
    padding-bottom: 20px;
}

.area_categories h2 {
    color: var(--tarjeta);
    font-size: 2.5em;
    font-weight: 350;
    margin-bottom: 20px;
    text-align: center;
    margin: 40px;
}

.categories {
    width: 90%;
    height: 800px; 
    display: flex;
    flex-direction: column;
    background-color: var(--categorias);
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
    color: white;
}

.more-categories a {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--boton);
    color: white;
    text-decoration: none;
    border-radius: var(--border-radius);
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

@media (min-width:768px){
    .categories {
        width: 97%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
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