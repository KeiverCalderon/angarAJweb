<template>
    <div class="area_banner_category">
        <img class="image-category" src="../assets/banner_categoria.webp" alt="Banner de Categoría"/>
    </div>
</template>

<script>
export default {
    name: 'AppCategory',
};
</script>

<style scoped>
.area_banner_category{
    width: 100%;
    height: 300px;
    position: relative;
    overflow: hidden;
    text-align: center;
    display: flex; 
    justify-content: center; 
    align-items: center;
}

.image-category{
    width: 100%;
    max-width: 400px;
    height: 100%;
    object-fit: cover; 
    display: block;
    border-radius: var(--border-radius);
}
</style>