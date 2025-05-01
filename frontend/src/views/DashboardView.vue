<template>
    <div id="dashboard">
        <div id="div1">
            <SimpleWidget :texto="'Pedidos'"/>
        </div>
        <div id="div2">
            <SimpleWidget :texto="'Productos'" :color="'#003092'"/>
        </div>
        <!-- <div id="div3">div3</div>
        <div id="div4">div4</div>
        <div id="div5">div5</div>
        <div id="div6">div6</div> -->
    </div>
</template>
<script>
import SimpleWidget from '../components/widgets/SimpleWidget.vue';
export default {
    name: 'DashboardView',
    components: {
        SimpleWidget,
    },
};
</script>
<style scoped>
    #dashboard {
        box-sizing: border-box;
        display: grid;
        grid-template-rows: repeat(6, 1fr);
        grid-template-columns: 1fr;
        gap: 30px 30px;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
        height: 100%;
        padding: 40px;
        box-sizing: border-box;
    }

    #dashboard div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #div1 {
        grid-area: 1 / 1 / 2 / 2;
    }
    #div2 {
        grid-area: 2/1/3/2;
    }
    #div3 {
        grid-area: 3/1/4/2;
        background-color: rgba(174,149,19, 0.5);
    }
    #div4 {
        grid-area: 4/1/5/2;
        background-color: rgba(125,119,124, 0.5);
    }
    #div5 {
        grid-area: 5/1/6/2;
        background-color: rgba(52,180,204, 0.5);
    }
    #div6 {
        grid-area: 6/1/7/2;
        background-color: rgba(189,173,50, 0.5);
    }

/* Adaptación a pantallas más grandes */
@media (min-width: 600px) {
    #dashboard {
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
        width: 100%;
        height: 100%;
    }
    #div1 {
        grid-area: 1 / 1 / 2 / 3;
    }
    #div2 {
        grid-area: 2/1/3/2;
    }
    #div3 {
        grid-area: 2/2/3/3;
    }
    #div4 {
        grid-area: 3/1/4/2;
    }
    #div5 {
        grid-area: 3/2/4/3;
    }
    #div6 {
        grid-area: 4/1/5/2;
    }
}

@media (min-width: 1000px) {
    #dashboard {
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
        width: 100%;
        height: 100%;
    }
    #div1 {
        grid-area: 1 / 1 / 2 / 3;
    }
    #div2 {
        grid-area: 1/3/1/3;
    }
    #div3 {
        grid-area: 2/2/3/3;
    }
    #div4 {
        grid-area: 3/1/4/2;
    }
    #div5 {
        grid-area: 3/2/4/3;
    }
    #div6 {
        grid-area: 4/1/5/2;
    }
}
</style>