<template>
    <section class="banner">
        <Splide
            :options="{
            type: 'loop',
            perPage: 1,
            arrows: true,
            autoplay: true,
            interval: 2000,
            }"
        >
            <SplideSlide>
                <img src="../assets/banner.png" alt="Bienvenido" class="carrousel_item">
            </SplideSlide>
            <SplideSlide>Slide 2</SplideSlide>
            <SplideSlide>Slide 3</SplideSlide>
            <SplideSlide>Slide 4</SplideSlide>
            <SplideSlide>Slide 5</SplideSlide>
        </Splide>
    </section>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

export default {
    name: 'AppBanner',
    components: {
        Splide,
        SplideSlide,
  }
};
</script>

<style scoped>
.banner {
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    text-align: center;
    display: flex; 
    justify-content: center; 
    align-items: center;
    background-color: var(--principal);
    }

.carrousel_item{
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
}

/* Adaptación a pantallas más grandes */

@media (min-width:524px){
    .carrousel_item{
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
}
}

@media (min-width:700px){
    .carrousel_item{
    width: 100%;
    aspect-ratio: 16/10;
    object-fit: cover;
}
}

@media (min-width:845px){
    .carrousel_item{
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    max-width: 930px;
}
}

</style>