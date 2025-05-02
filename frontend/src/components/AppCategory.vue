<template>
    <div class="area_banner_category">
        <div class="image-category">
            <img src="../assets/banner_categoria2.webp" alt="Banner de Categoría"/>
            <div class="text-category">
                <h2>{{ nombre }}</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        nombre: {
            type: String,
            required: true,
        },
        imagen: {
            type: String,
            required: true,
        },
    },
    name: 'AppCategory',
};
</script>

<style scoped>
.area_banner_category {
    width: 100%;
    height: 280px;
    position: relative;
    overflow: hidden;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-category {
    width: 100%;
    max-width: 390px;
    height: 100%;
    position: relative; /* Necesario para que .text-category se posicione dentro */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--border-radius);
    overflow: hidden; /* Asegura que el contenido no se salga */
}

.image-category img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius);
}

.text-category {
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 0 20px;
    box-sizing: border-box;
    color: var(--texto-inverso);
    font-size: 2.3em;
    font-weight: 350;
    text-align: center;
    text-shadow: 
        -1px -1px 0px var(--letras),
        1px -1px 0px var(--letras), 
        -1px 1px 0px var(--letras),  
        1px 1px 0px var(--letras);
    width: 100%; /* Asegura que ocupe todo el ancho de .image-category */
    height: 100%; /* Asegura que ocupe toda la altura de .image-category */
    pointer-events: none; /* Evita que interfiera con eventos del mouse */
}


@media (min-width:768px){

}
</style>