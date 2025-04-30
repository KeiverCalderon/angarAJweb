<template>
    <div class="widget">
        <div class="widget-content">
            <div class="notification">
                <h2>{{ texto }}</h2>
                <p>{{ valor }}</p>
            </div>
            <a href="/admin/orders" class="go-button">Ver Ahora <i class='bx bxs-right-top-arrow-circle' style='color:#ffffff; font-size: 30px;' ></i></a>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        texto: {
            type:String,
            default: 'Error al Cargar el Widget',
        },
        valor: {
            type:String,
            default: '0',
        },
    },
    name: 'PendingOrders',
};
</script>
<style scoped>
    .widget{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background: linear-gradient(to top right, #4b5563, #171717, #020617);
        margin: 0;
        font-family: roboto;
        height: 250px;
    }

    .widget-content{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        font-size: 1em;
    }

    .notification{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 50px;
        width: 200px;
        height: 50px;
        padding: 10px 20px;
    }

    .notification h2{
        font-size: 2em;
        color: white;
    }

    .notification p{
        background-color: #a91a4c;
        border-radius: 50px;
        color: #ffffff;
        padding: 20px;
        font-size: 1.5em;
        width: 60px;
        aspect-ratio: 1/1;
        display: flex;
        align-items: center;
        justify-content: center;
    }


    .go-button{
        padding: 10px 20px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1em;
        text-decoration: none;
        color: white;
        background-color: #a91a4c;
    }
</style>