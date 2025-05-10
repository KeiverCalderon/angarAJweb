<template>
    <section class="area-carrito">
        <article class="contenido-carrito">
            <h2 class="titulo">Carrito de Compras</h2>
            <div v-if="elementos.length > 0" class="carrito">
                <div class="compra">
                    <div v-for="(elemento, index) in elementos" :key='index' class="producto">
                        <div id="elemento_del_carrito">
                            <div class="producto-detalles"><br><br>
                                <h2>{{ elemento.nombre }}</h2><br>
                            </div>
                            <div class="cantidad-selector-carrito">
                                <form action="" method="POST" class="form-cantidad">
                                    <label for="cantidad">Cantidad:</label>
                                    <input type="number" name="cantidad" v-model="elemento.cantidad" :min="1" :max="elemento.stock">
                                    <button type="submit" class="btn-actualizar">Actualizar <i class='bx bx-sync'></i></button>
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
                    <h2 class="info_title"><i class='bx bx-info-circle' ></i> Detalles</h2><br>
                    <div class="subtotal">
                        Subtotal: {{ total }} <span>USD$</span>
                    </div>
                    <div class="total">
                        Total: {{ total }} <span>USD$</span>
                    </div>
                    <button class="comprar_btn">Comprar Ahora<i class='bx bxl-whatsapp'></i></button>
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

.titulo{
    color: var(--letras);
    font-size: 2.5em;
    margin-bottom: 0px;
}

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
    max-width: 1000px;
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
    max-width: 900px;
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

.info_title{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: var(--letras);
    font-size: 2em;
    margin-bottom: 0px;
}

h2{
    margin-top: 0;
    margin-bottom: 0;
}

.producto{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--border-radius-box);
    border: solid 1px #A3A3A3;
    padding: 20px;
    box-sizing: border-box;
    color: var(--letras);
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
    background-color: var(--boton);
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
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
}

.producto-precio{
    display: flex;
    justify-content: end;
    align-items: center;
    font-weight: bold;
    font-size: 1.2em;
    margin-bottom: 5px;
}

.subtotal {
    font-size: 1.4em;
    margin-bottom: 5px;
}

.total {
    font-weight: bold;
    font-size: 2em;
    color: var(--letras);
    margin-bottom: 20px;
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

.form-cantidad{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: var(--boton);
    box-shadow: var(--box-shadow);
    color: var(--texto-inverso);
    padding: 4px;
    border: none;
}

.btn-actualizar i{
    font-size: 20px;
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

.comprar_btn{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--boton);
    color: var(--texto-inverso);
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1em;
    font-weight: bold;
}

.comprar_btn i{
    font-size: 30px;
}

.comprar_btn:hover{
    background-color: var(--boton-hover);
    cursor: pointer;
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

/* Responsive Carrito */

@media (min-width:750px){
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
        padding: 20px 20px;
    }

    .compra{
        width: 60%;
        padding-right: 20px;
        border-bottom: none;
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

@media (min-width: 900px) {
    .contenido-carrito{
        padding: 20px 40px;
    }
    .compra{
        width: 70%;
        padding-right: 20px;
        border-bottom: none;
    }
    
    .info{
        width: 30%;
        padding-left: 20px;
    }
}
</style>