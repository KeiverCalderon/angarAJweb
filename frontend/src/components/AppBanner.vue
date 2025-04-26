<template>
    <section class="banner">
        <img src="../assets/banner.png" class="banner-image" alt="Banner">
        <div class="banner-content">
        </div>
    </section>
</template>

<script>
export default {
    name: 'AppBanner',
};
</script>

<style scoped>
.banner {
    width: 100%;
    height: calc(100vh - 70px); 
    min-height: 400px;
    position: relative;
    overflow: hidden;
    text-align: center;
    display: flex; 
    justify-content: center; 
    align-items: center;
    }

</style>