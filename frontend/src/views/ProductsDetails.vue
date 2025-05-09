<template>
    <section id="area_descripcion">
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