<template>
    <section id="productDetailsView">
        <article class="preview_producto">
            <div class="imagen-descripcion">
                <div id="imagen_box">
                    <img src="../assets/banner_categoria.webp" class="imagen_preview"  alt="{{ producto.modelo }}">
                </div>
                <div class="detalles_preview">
                    <p class="marca_preview">{{ producto.marca }}</p>
                    <p class="modelo_preview">{{ producto.modelo }}</p>
                    <p class="precio_preview"> <span>USD$</span> {{ producto.precio }} </p>
                    <p class="stock_preview">Quedan {{ producto.stock }} unidades en stock</p>
                    <p class="cantidad_preview">Cantidad</p>
                    <form action="" method="POST">
                        <div class="cantidad-selector">
                            <button type="button" id="decremento">-</button>
                            <input type="number" id="cantidad" name="cantidad" value="1" min="1" max="{{ producto.stock }}" readonly>
                            <button type="button" id="incremento">+</button>
                        </div>
                        <div class="acciones_producto_preview">
                            <!-- <input type="hidden" name="producto_id" value="{{ producto.id }}">
                            <input type="hidden" name="next" value="{{ request.path }}"> -->
                            <button class="add_cart_button_preview" type="submit">Agregar Al Carrito</button>
                        </div>
                    </form>
                </div>
            </div>
        </article>
        <article id="descripcion_article">
            <h2>Descripción del Producto</h2>
            <section id="descripcion_completa">
                <p>{{ producto.descripcion }}</p>
            </section>
        </article>
        <div id="btn_regresar">
            <a href="/">Regresar a la tienda</a>
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
            { id:23, nombre: "Leche Latti", precio: 500, descripción: 'Leche Latti 1 litro', imagen: 'banner_categoria2.webp', stock: 23},
        };
    },
};
</script>
<style scoped>
#productDetailsView{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin-top: 20px;
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
    background-color: var(--tarjeta);
    border-radius: var(--border-radius-box);
    box-shadow: 2px 2px 5px black;
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
}

.detalles_preview{
    display: flex;
    justify-content: right;
    align-items: start;
    flex-direction: column;
    width: 90%;
    gap: 13px;
}

.detalles_preview .marca_preview{
    font-weight: 800;
    font-size: 2rem;
}

.detalles_preview .modelo_preview{
    font-weight: 600;
    font-size: 1.2rem;
    margin: 5px 0;
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
    justify-content:center;
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
}

.add_cart_button_preview:hover{
    cursor: pointer;
    box-shadow: 2px 2px 5px black;
}

/* Descripcion completa */

#descripcion_article{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 90%;
    max-width: 950px;
    gap: 10px;
    margin-bottom: 20px;
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