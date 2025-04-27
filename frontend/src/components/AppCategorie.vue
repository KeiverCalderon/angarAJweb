<template>
    <div class="area_banner_categorie">
        <img class="image-categorie" src="../assets/banner_categoria.webp" alt="Banner de Categoría"/>
    </div>
</template>

<script>
export default {
    name: 'AppCategorie',
};
</script>

<style scoped>
.area_banner_categorie{
    width: 100%;
    height: 300px;
    position: relative;
    overflow: hidden;
    text-align: center;
    display: flex; 
    justify-content: center; 
    align-items: center;
}

.image-categorie{
    width: 100%;
    max-width: 400px;
    height: 100%;
    object-fit: cover; 
    display: block;
    border-radius: var(--border-radius);
}
</style>