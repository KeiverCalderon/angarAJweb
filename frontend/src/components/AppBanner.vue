<template>
    <section class="banner">
        <Splide
            :options="{
            type: 'loop',
            perPage: 1,
            arrows: true,
            autoplay: true,
            interval: 10000,
            }"
        >
            <SplideSlide>
                <img src="../assets/banner.png" alt="Bienvenido" class="carrousel_item">
            </SplideSlide>
            <SplideSlide>
                <img src="../assets/slide2img.jpg" alt="Bienvenido" class="carrousel_item">
                <div class="slide-content">
                    <h2>¡Bienvenido a nuestra tienda!</h2>
                    <p>Explora las categorías que tenemos para tí.</p>
                    <a href="/categories" class="slide-button">Ver Categorías</a>
                </div>
            </SplideSlide>
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
    text-align: center;
    flex-direction: column;
    overflow: hidden;
    background-color: var(--principal);
    }

.carrousel_item{
    width: 100%;
    height: calc(100vh - 80px);
    aspect-ratio: 1/1;
    object-fit: cover;
}

 /* sobreponer texto en la imagen */
.slide-content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    z-index: 1;
    width: 80%;
    max-width: 500px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
}

.slide-content h2{
    font-size: 2rem;
    margin-bottom: 10px;
    font-weight: 400;
    color:antiquewhite;
    text-shadow: 2px 2px 5px black;
}

.slide-content p{
    font-size: 1.2rem;
    margin-bottom: 20px;
    color:antiquewhite;
    text-shadow: 2px 2px 5px black;
}

.slide-button{
    margin: 0 auto;
    padding: 10px 20px;
    background-color: var(--boton);
    color: var(--texto-inverso);
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.slide-button:hover{
    background-color: var(--boton-hover);
    cursor: pointer;
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
}
}

</style>