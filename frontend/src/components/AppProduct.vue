<template>
    <router-link v-if="mode == 'normal'" :to="{ name: 'Producto', params: { product: producto.id } }" class="product-card">
        <div class="product-image">
            <img src="../assets/banner_categoria.webp" alt="Product Image" />
        </div>
        <div class="product-info">
            <h3>{{ producto.nombre }}</h3>
            <p class="price">${{ producto.precio }}</p>
            <button @click="agregarAlCarrito()">Añadir al Carrito</button>
        </div>
    </router-link>
    <router-link v-else :to="{ name: 'Producto', params: { product: producto.id } }" class="product-card-fixed">
        <div class="product-image">
            <img src="../assets/banner_categoria.webp" alt="Product Image" />
        </div>
        <div class="product-info">
            <h3>{{ producto.nombre }}</h3>
            <p class="price">${{ producto.precio }}</p>
            <button @click="agregarAlCarrito()">Añadir al Carrito</button>
        </div>
    </router-link>
    
</template>
<script>
import { push } from 'notivue'

export default {
    name: 'AppProduct',
    props: {
        mode: {
            type: String,
            default: 'normal',
        },
        producto: {
            type: Object,
            required: true,
        },
    },
    methods: {
        agregarAlCarrito() {
            // logica para agregar producto con cantidad al local storage
            const productoConCantidad = {
                id: this.producto.id,
                cantidad: '1',
            };
            // Obtener el carrito del local storage
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            // Verificar si el producto ya está en el carrito
            const productoExistente = carrito.find(item => item.id === productoConCantidad.id);
            if (productoExistente) {
                // Si el producto ya está en el carrito, actualizar la cantidad
                productoExistente.cantidad += this.cantidad;
            } else {
                // Si no está, agregarlo al carrito
                carrito.push(productoConCantidad);
            }
            // Guardar el carrito actualizado en el local storage
            localStorage.setItem('carrito', JSON.stringify(carrito));
            let text = 'agregaste ' + productoConCantidad.cantidad + ' al carrito';
            push.success({
            title: 'Agregado',
            message: text
            })
        },
    }
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
    text-decoration: none;
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
    text-decoration: none;
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
    padding: 15px;
    border-radius: 0 0 10px 10px;
}
.product-info h3 {
    font-size: 1.5em;
    margin: 0;
    margin-bottom: 5px;
    color: var(--letras);
}
.product-info .price {
    font-size: 1.2em;
    color: var(--letras);
    margin: 0;
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