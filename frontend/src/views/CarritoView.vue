<template>
    <section class="area-carrito">
        <article class="contenido-carrito">
            <h2 class="titulo">Carrito de Compras</h2>
            <div v-if="elementos.length > 0" class="carrito">
                <div class="compra">
                    <div class="producto" v-for="(elemento, index) in elementos" :key='index'>
                        <div class="imagenYnombre">
                            <div id="btn_borrar_del_carrito">
                                <a href="" class="btn_borrar_icon"><img src="../assets/close-svgrepo-com.svg"></a>
                            </div>
                            <a :href="'/product/' + elemento.id" class="img_elemento">
                                <img src="../assets/banner_categoria.webp" :alt="elemento.nombre">
                            </a>
                            <div class="producto-detalles">
                                <h2>{{ elemento.nombre }}</h2>
                                <span>Disponibles: {{elemento.stock}}</span>
                            </div>
                        </div>
                        <div class="cantidad-selector-carrito">
                            <div class="cantidad-selector">
                                <input type="number" id="cantidad" name="cantidad" v-model="elemento.cantidad" :min="1" :max="elemento.stock" readonly>
                                <div class="botones">
                                    <span class="btn-incremento" @click="incrementar(index)"><img src="../assets/incremento.svg"></span>
                                    <span class="btn-decremento" @click="decrementar(index)"><img src="../assets/decremento.svg"></span>
                                </div>
                            </div>
                            <div class="producto-precio">
                                <span>{{elemento.precio}}$</span> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="info">
                    <h2 class="info_title"><i class='bx bx-info-circle' ></i> Detalles</h2><br>
                    <div class="subtotal">
                        Subtotal: {{ total }} <span>$</span>
                    </div>
                    <div class="total">
                        Total: {{ total }} <span>$</span>
                    </div>
                    <button class="comprar_btn">Comprar Ahora ‎<i class='bx bxl-whatsapp'></i></button>
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
        incrementar(index) {
            let stock = this.elementos[index].stock;
            if (this.elementos[index].cantidad < stock) {
                this.elementos[index].cantidad++;
            }
        },
        decrementar(index) {
            if (this.elementos[index].cantidad > 1) {
                this.elementos[index].cantidad--;
            }
        },
    },
};
</script>
<style scoped>

/* *{
    font-weight: 400;

} */

.titulo{
    margin-top: 10px;
    font-size: 2em;
    font-family: "Cal Sans";
    color: #333;
    font-weight: 400;
}

.area-carrito{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: var(--fondo);
    min-height: calc(100vh - 80px);
    font-family: 'Roboto', sans-serif;
}

.contenido-carrito{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    max-width: 1000px;
    box-sizing: border-box;
    padding: 10px;
    gap: 10px;
    margin-bottom: 20px;
    background-color: var(--tarjeta);
    border-radius: var(--border-radius-box);
    box-shadow: var(--box-shadow);
}

.carrito{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 900px;
    box-sizing: border-box;
}

.compra{
    width: 100%;
    box-sizing: border-box;
    padding: 2px 2px;
}

.info{
    width: 100%;
    box-sizing: border-box;
    padding: 20px 10px;
}

.info_title{
    display: flex;
    align-items: center;
    font-size: 1.8em;
    margin-bottom: 0px;
}

h2{
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.3em;
}

.producto{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    border-bottom: solid 1px #A3A3A3;
    padding: 15px 0px;
    box-sizing: border-box;
    color: var(--texto);
    gap: 10px;
}

.producto:nth-child(2){
    border-top: solid 1px #A3A3A3;
}

.img_elemento{
    height: 100%;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
}

.img_elemento img{
    width: 50px;
    height: 50px;
    border-radius: 5px;
}

.imagenYnombre{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
}

#btn_borrar_del_carrito{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    aspect-ratio: 1/1;
    border-radius: 10px;
}

.btn_borrar_icon{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}

.btn_borrar_icon img{
    width: 15px;
    height: 15px;
}

.producto-detalles{
    display: flex;
    flex-direction: column;
    margin: 0;
}

.producto-detalles span{
    margin-top: 5px;
    font-size: 0.9em;
    color: var(--textoSecundario);
    font-family: "Cal Sans";
    color: #333;
    font-weight: 400;
}

.producto-precio{
    display: flex;
    font-weight: bold;
    font-size: 1.2em;
}

.subtotal {
    font-size: 1.3em;
    margin-bottom: 5px;
}

.total {
    font-weight: bold;
    font-size: 1.4em;
    margin-bottom: 30px;
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

.cantidad-selector{
    display: flex;
    align-items: center;
    margin-right: 10px;
}

/* Estilos para el input */
.cantidad-selector input{
    width: 50px;
    text-align: center;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 7px 0px 0px 7px;
    padding-top: 9.7px;
    padding-bottom: 9.9px;
}

.botones {
    display: flex;
    flex-direction: column;
}

/* Estilos para los botones */
.btn-incremento, .btn-decremento {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    cursor: pointer;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    user-select: none;
}

.btn-incremento {
    border-radius: 0px 7px 0px 0px;
    border-bottom: none;
}

.btn-decremento {
    border-radius: 0px 0px 7px 0px;
    border-top: none;
}

.btn-incremento img, .btn-decremento img {
    width: 10px;
    padding: 7px 7px;
    object-fit: cover;
}

/* Efecto al pasar el mouse sobre los botones */
.btn-incremento:hover, .btn-decremento:hover {
    background-color: #ddd;
}

.cantidad-selector-carrito{
    margin-top: 30px;
    max-height: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
}

.cantidad-selector-carrito input[type="number"]{
    width: 40px;
    height: 20px;
    font-size: 16px;
    text-align: center;
    /* Deshabilitar escritura en el input */
    /* pointer-events: none; */
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
    margin: 0 auto;
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
        border-bottom: none;
    }
    .producto{
        display: flex;
        align-items: center;
        padding: 20px 0;
    }
    .producto-precio{
        padding-right: 20px;
    }
    .info{
        width: 30%;
        padding-top: 0;
        padding-left: 20px;
    }
    .cantidad-selector-carrito{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        margin: 0;
        width: 250px;
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
    .comprar_btn{
        margin: 0;
    }
    .img_elemento img{
        width: 75px;
        height: 75px;
        border-radius: 5px;
    }
    .btn_borrar_icon img{
        width: 15px;
        height: 15px;
        margin-right: 15px;
    }
    .imagenYnombre{
        gap: 15px;
    }
}

@media (min-width: 900px) {
    .contenido-carrito{
        padding: 20px 40px;
    }
    .compra{
        width: 70%;
        padding-right: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        border-bottom: none;
    }
    
    .info{
        width: 30%;
        padding-top: 0;
        padding-left: 20px;
    }
}
</style>