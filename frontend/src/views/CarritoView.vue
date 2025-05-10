<template>
    <section class="area-carrito">
        <article class="contenido-carrito">
            <div v-if="elementos.length > 0" class="carrito">
                <div class="compra">
                    <h2>Carrito de Compras</h2>
                    <div v-for="(elemento, index) in elementos" :key='index' class="producto">
                        <div id="elemento_del_carrito">
                            <div class="producto-detalles"><br><br>
                                <h2>{{ elemento.nombre }}</h2><br>
                            </div>
                            <div class="cantidad-selector-carrito">
                                <form action="" method="POST" class="form-cantidad">
                                    <label for="cantidad">Cantidad:</label>
                                    <input type="number" name="cantidad" value="{{ elemento.cantidad }}" min="1" max="{{ elemento.stock }}">
                                    <button type="submit" class="btn-actualizar">Actualizar🔄</button>
                                </form>
                                <div class="producto-cantidad-disponible">
                                    <span>Disponibles:</span> {{elemento.stock}}
                                </div>
                                <br>
                            </div>
                            <div class="producto-precio"><br>
                                <span>USD$</span> {{elemento.precio}} c/u
                            </div>
                        </div>
                        <div id="btn_borrar_del_carrito">
                            <a href="" class="btn_borrar_icon"><i class='bx bx-trash'></i></a>
                        </div>
                    </div>
                </div>
                <div class="info">
                    <h2>Información de la compra</h2><br>
                    <div class="subtotal">
                        Subtotal: {{ total }} <span>USD$</span>
                    </div>
                    <div class="total">
                        Total: {{ total }} <span>USD$</span>
                    </div>
                    <form id="form-pago" action="" method="POST">
                        <label for="metodo_pago">Método de Pago:</label>
                        <select name="metodo_pago" id="metodo_pago" required>
                            <option value="" disabled selected>Sin seleccionar</option>
                            <option value="paypal">PayPal</option>
                            <option value="tarjeta de crédito">Tarjeta de Crédito</option>
                        </select>
                        <button type="button" id="btn-pagar" class="checkout-button">COMPRAR</button>
                    </form>
                </div>
            </div>
            <div v-else class="carrito">
                <div class="compra error_carrito">
                    <div class="carrito_vacio">
                        <h2>Vaya! Aún no has añadido nada al carrito</h2>
                        <img src="" alt="">
                    </div>
                </div>
            </div>

            <div id="ventana-paypal" class="ventana-pago">
                <div class="contenido-ventana">
                    <h3>Ingresar datos de PayPal</h3>
                    <form id="form-paypal" onsubmit="document.getElementById('form-pago').submit(); return false;">
                        <input type="email" id="paypal-email" placeholder="Correo electrónico" required>
                        <p id="correoElectronicoError"></p>
                        <button type="submit" id="paypalPayBtn" disabled>Aceptar</button>
                        <button type="button" id="btn-cerrar-paypal">Cerrar</button>
                    </form>
                </div>
            </div>
            <div id="ventana-tarjeta" class="ventana-pago">
                <div class="contenido-ventana">
                    <h3>Ingresar datos de Tarjeta</h3>
                    <form id="form-tarjeta" onsubmit="document.getElementById('form-pago').submit(); return false;">
                        <input type="text" id="tarjeta-numero" placeholder="Número de tarjeta" required>
                        <input type="text" id="tarjeta-cvv" placeholder="CVV" required>
                        <input type="text" id="tarjeta-fecha" placeholder="MM/AA" required>
                        <p id="consolaErrorCreditCard"></p>
                        <button type="submit" id="creditCardBtn" disabled>Aceptar</button>
                        <button type="button" id="btn-cerrar-tarjeta">Cerrar</button>
                    </form>
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
    name: 'CarritoView',
    data() {
        return {
            // Pruebas sin BD (Estos son los elementos guardados en el local storage)
            elementos: [
            { id:23, nombre: "Leche Latti", precio: 500, descripcion: 'Leche Latti 1 litro, ideal para hacer tortas!', imagen: 'banner_categoria2.webp', stock: 23, cantidad: 2},
            ],
            total: 1000,
        };
    },
    methods: {
        goBack() {
        this.$router.back(); // Navega a la ruta anterior
        },
    },
};
</script>
<style scoped>
.area-carrito{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: var(--fondo);
    min-height: calc(100vh - 80px);
}

.contenido-carrito{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    max-width: 1150px;
    box-sizing: border-box;
    padding: 20px;
    gap: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: var(--tarjeta);
    border-radius: var(--border-radius-box);
    box-shadow: var(--box-shadow);
}

.carrito{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    padding: 20px;
    box-sizing: border-box;
}

.compra{
    width: 100%;
    box-sizing: border-box;
    padding: 20px 2px;
}

.info{
    width: 100%;
    box-sizing: border-box;
    padding: 20px 2px;
}

h2{
    margin-top: 0;
}

.producto{
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: solid 1px #dddddd;
}

#elemento_del_carrito{
    width: calc(100% - 40px);   
}

#btn_borrar_del_carrito{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    aspect-ratio: 1/1;
    background-color: rgb(192, 33, 33);
    border-radius: 10px;
}

.btn_borrar_icon{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}

.btn_borrar_icon i{
    font-size: 30px;
    color: white;
}

.producto-detalles{
    flex-grow: 1;
}

.producto-precio{
    display: flex;
    justify-content: end;
    align-items: center;
    font-weight: bold;
    font-size: 1.2em;
    margin-bottom: 5px;
}

.total {
    font-weight: bold;
    margin-top: 20px;
}

.checkout-button {
    background-color: var(--botonGeneral);
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    width: 100%;
    margin-top: 20px;
    border-radius: var(--radioGeneral);
}

.checkout-button:hover {
    background-color: var(--botonHover);
    box-shadow: var(--sombrasDeCajas);
}

.carrito_vacio{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    padding: 20px;
    gap: 20px;
    box-sizing: border-box;
    width: 100%;
}

.carrito_vacio img{
    min-width: 120px;
    width: 100%;
    max-width: 400px;
    aspect-ratio: 1/1;
    margin-left: -20px;
}

.carrito_vacio h2{
    text-align: center;
}

.cantidad-selector-carrito{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 5px;
    margin-top: 5px;
}

/* Estilo para las flechas (spinners) */
.cantidad-selector-carrito
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    /* Habilitar las flechas */
    pointer-events: auto;
}

.cantidad-selector-carrito input[type="number"]{
    margin-left: 10px;
    width: 40px;
    height: 20px;
    font-size: 16px;
    text-align: center;
    /* Deshabilitar escritura en el input */
    /* pointer-events: none; */
    }

.btn-actualizar{
    border-radius: 5px;
    background-color: var(--boton);
    box-shadow: var(--box-shadow);
    color: var(--texto-inverso);
    padding: 4px;
    border: none;
}

.btn-actualizar:hover{
    background-color: var(--boton-hover);
    cursor: pointer;
}
.producto-cantidad-disponible{
    margin-bottom: -20px;
}

.ventana-pago{
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.contenido-ventana{
    background-color: #fff;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 300px;
    text-align: center;
}

.contenido-ventana input{
    width: 90%;
    padding: 10px;
    margin: 10px 0;
}

.contenido-ventana button{
    padding: 10px 20px;
    margin: 10px;
}

/* Responsive Carrito */

@media (min-width:700px){
    .carrito{
        flex-direction: row;
    }

    .carrito_vacio{
        flex-direction: row;
    }

    .carrito_vacio img{
        width: 30%;
    }

    .carrito_vacio h2{
        text-align: left;
    }

    .contenido-carrito{
        padding: 70px;
    }

    .compra{
        width: 60%;
        padding-right: 20px;
        border-bottom: none;
        border-right: 1px solid #dddddd;
    }

    .producto{
        border-right: none;
    }

    .error_carrito{
        border-right: none;
    }
    
    .info{
        width: 40%;
        padding-left: 20px;
    }
    .cantidad-selector-carrito input[type="number"]{
        margin-left: 10px;
        width: 40px;
        height: 20px;
        font-size: 16px;
        text-align: center;
        /* Deshabilitar escritura en el input */
        pointer-events: none;
    }
}
</style>