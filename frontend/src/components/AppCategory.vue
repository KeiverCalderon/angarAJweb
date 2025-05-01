<template>
    <div class="area_banner_category" v-for="categoria in categorias.slice(0, 3)" v-bind:key="categoria">
        <img class="image-category" src="../assets/banner_categoria2.webp" alt="Banner de Categoría"/>
        <div class="text-category">
            <h2>{{ categoria.nombre }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        categorias: {
            type: Object,
            required: true,
        },
    },
    name: 'AppCategory',
};
</script>

<style scoped>
.area_banner_category{
    width: 100%;
    height: 280px;
    position: relative;
    overflow: hidden;
    text-align: center;
    display: flex; 
    justify-content: center; 
    align-items: center;
}

.image-category{
    width: 100%;
    max-width: 390px;
    height: 100%;
    object-fit: cover; 
    display: block;
    border-radius: var(--border-radius);
}

.text-category{
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    color: var(--texto-inverso);
    font-size: 2.5em;
    font-weight: 350;
    text-align: center;
    text-shadow: 
        -1px -1px 0px var(--letras),
        1px -1px 0px  var(--letras), 
        -1px 1px 0px  var(--letras),  
        1px 1px 0px  var(--letras); 
}

@media (min-width:768px){
    .text-category{
        transform: translateX(0);
        bottom: 0px;
        left: 40px; 
    }
}
</style>