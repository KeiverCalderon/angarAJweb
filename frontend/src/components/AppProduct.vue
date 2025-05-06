<template>
    <article v-if="mode == 'normal'" class="product-card">
        <div class="product-image">
            <img src="../assets/banner_categoria.webp" alt="Product Image" />
        </div>
        <div class="product-info">
            <h3>{{ nombre }}</h3>
            <p class="price">${{ precio }}</p>
            <button>Añadir al Carrito</button>
        </div>
    </article>
    <article v-else class="product-card-fixed">
        <div class="product-image">
            <img src="../assets/banner_categoria.webp" alt="Product Image" />
        </div>
        <div class="product-info">
            <h3>{{ nombre }}</h3>
            <p class="price">${{ precio }}</p>
            <button>Añadir al Carrito</button>
        </div>
    </article>
</template>
<script>
export default {
    props: {
        mode: {
            type: String,
            default: 'normal',
        },
        nombre: {
            type: String,
            required: true,
        },
        precio: {
            type: String,
            required: true,
        },
        imagen: {
            type: Number,
            required: true,
        },
    },
    name: 'AppCategory',
};
</script>
<style scoped>
/* La carta que se muestra en el slide */
.product-card-fixed { 
    width: 100%;
    height: 300px;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background-color:var(--tarjeta);
}
.product-card-fixed:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.product-card { 
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background-color:var(--tarjeta);
}

.product-image {
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 10px 10px 0 0;
}
.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}
.product-info {
    padding: 20px;
    border-radius: 0 0 10px 10px;
}
.product-info h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
    color: var(--letras);
}
.product-info .price {
    font-size: 1.2em;
    color: var(--letras);
    margin-bottom: 10px;
}

.product-info button {
    padding: 10px 20px;
    background-color: var(--boton);
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
.product-info button:hover {
    background-color: var(--boton-hover);
}
</style>