<template>
    <section id="productDetailsView">
        <article class="preview_producto">
            <div class="imagen-descripcion">
                <div id="imagen_box">
                    <img src="../assets/banner_categoria2.webp" class="imagen_preview"  alt="{{ producto.modelo }}">
                </div>
                <div class="detalles_preview">
                    <p class="nombre">{{ producto.nombre }}</p>
                    <div id="descripcion_article">
                        <div id="descripcion_completa">
                            <p>{{ producto.descripcion }}</p>
                        </div>
                    </div>
                    <p class="precio_preview"> <span>USD$</span> {{ producto.precio }} </p>
                    <p class="stock_preview">Quedan {{ producto.stock }} unidades en stock</p>
                    <p class="cantidad_preview">Cantidad</p>
                    <div class="cantidad-selector">
                        <button type="button" id="decremento" @click="decrementar()">-</button>
                        <input type="number" id="cantidad" name="cantidad" v-model="cantidad" :min="1" :max="producto.stock" readonly>
                        <button type="button" id="incremento" @click="incrementar()">+</button>
                    </div>
                    <div class="acciones_producto_preview">
                        <button class="add_cart_button_preview" type="submit" @click="agregarAlCarrito()">Agregar Al Carrito</button>
                    </div>
                </div>
            </div>
        </article>
        <div id="btn_regresar">
            <a @click="goBack()">Regresar a la tienda</a>
        </div>
    </section>
</template>

<script>

export default {
    name: 'ProductsDetails',
    emits: ['eventoPersonalizado'],
    computed: {
        id() {
            return this.$route.params.product;
        },
    },
    data() {
        return {
            // Pruebas sin BD (Estos son los mismos valores que debe devolver el JSON del endpoint "obtenerProductoPorID(id)")
            producto: 
            { id:23, nombre: "Leche Latti", precio: 500, descripcion: 'Leche Latti 1 litro, ideal para hacer tortas!', imagen: 'banner_categoria2.webp', stock: 23},
            cantidad: 1,
        };
    },
    methods: {
        goBack() {
        this.$router.back(); // Navega a la ruta anterior
        },
        incrementar() {
            if (this.cantidad < this.producto.stock) {
                this.cantidad++;
            }
        },
        decrementar() {
            if (this.cantidad > 1) {
                this.cantidad--;
            }
        },
        agregarAlCarrito() {
            // logica para agregar producto con cantidad al local storage
            const productoConCantidad = {
                id: this.producto.id,
                cantidad: this.cantidad,
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
            console.log('Producto agregado al carrito:', productoConCantidad);
        },
    },
};
</script>
<style scoped>
*{
    margin: 0;
}
#productDetailsView{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    background-color:var(--fondo);
    min-height: calc(100vh - 80px);
}

.preview_producto{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    max-width: 950px;
    box-sizing: border-box;
    padding: 20px;
    gap: 10px;
    margin-top: 20px;
    background-color: var(--tarjeta);
    border-radius: var(--border-radius-box);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.7s ease-in-out;
}

@keyframes fadeIn {
    0% { opacity: 0;}
    100% { opacity: 1; }
}

.imagen-descripcion{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
}

#imagen_box{
    width: 90%;
    min-width: 300px;
    box-sizing: content-box;
    aspect-ratio: 1/1;
}

.imagen_preview{
    width: 100%;
    box-sizing: content-box;
    aspect-ratio: 1/1;
    align-items: left;
    object-fit: cover;
    border-radius: 10px;
}

.detalles_preview{
    display: flex;
    justify-content: right;
    align-items: start;
    flex-direction: column;
    width: 90%;
    gap: 13px;
}

.detalles_preview .nombre{
    font-weight: 800;
    font-size: 2rem;
}

.detalles_preview .precio_preview{
    font-weight: 600;
    font-size: 1.6rem;
}

.detalles_preview .precio_preview span{
    margin-top: 5px;
    font-weight: 700;
}

.detalles_preview .stock_preview{
    font-weight: 400;
    font-size: 0.9rem;
    margin: 2px 0;
}

.detalles_preview .cantidad_preview{
    font-weight: 500;
    font-size: 1.5rem;
    margin-top: 2px;
}

.acciones_producto_preview{
    width: 100%;
    display: flex;
    justify-content:flex-start;
    align-items: center;
}

.add_cart_button_preview{
    border-radius: 10px;
    background-color: var(--boton);
    margin-top: 15px;
    padding: 5px 10px;
    color: var(--texto-inverso);
    border: none;
    font-size: 1.2rem;
    justify-content: center;
    align-items: center;
    font-family: "Cal Sans", sans-serif;
}

.add_cart_button_preview:hover{
    cursor: pointer;
    background-color: var(--boton-hover);
}

/* Descripcion completa */

#descripcion_article{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 90%;
    gap: 10px;
    margin-bottom: 20px;
    color: var(--texto);
    font-family: "Poppins", sans-serif;
    font-size: 1em;
    font-weight: 400;
    max-height: 200px;
    overflow-y: auto;
    overflow-x: hidden;
}

#descripcion_article h2{
    width: 100%;
}

/* Cantidad selector */

/* Estilos básicos para el contenedor */
.cantidad-selector{
    display: flex;
    align-items: center;
}

/* Estilos para el input */
.cantidad-selector input{
    width: 50px;
    text-align: center;
    margin: 0 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px;
}

/* Estilos para los botones */
.cantidad-selector button{
    padding: 5px 10px;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f9f9f9;
}

/* Efecto al pasar el mouse sobre los botones */
.cantidad-selector button:hover{
    background-color: #ddd;
}

#btn_regresar{
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50px;
}

#btn_regresar a{
    background-color: var(--boton);
    padding: 5px 10px;
    text-decoration: none;
    border-radius: 10px;
    color: var(--texto-inverso);
}

#btn_regresar a:hover{
    background-color: var(--boton-hover);
    cursor: pointer;
}


/* Adaptacion a pantallas mas grandes */

@media (min-width:700px){
    .imagen-descripcion{
        flex-direction: row;
        gap: 100px;
    }

    .preview_producto{
        min-height: 350px;
        animation: fadeInUp 1.5s ease forwards;
    }

    #descripcion_article{
        animation: fadeInUp 2s ease forwards;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
}

</style>