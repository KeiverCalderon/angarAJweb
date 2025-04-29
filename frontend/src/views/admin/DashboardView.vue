<template>
    <div id="dashboard">
        <div id="div1">div1</div>
        <div id="div2">div2</div>
        <div id="div3">div3</div>
        <div id="div4">div4</div>
        <div id="div5">div5</div>
        <div id="div6">div6</div>
    </div>
</template>
<style scoped>
    #dashboard {
        display: grid;
        grid-template-rows: repeat(6, 1fr);
        grid-template-columns: 1fr;
        gap: 20px 0px;
        width: 100%;
        height: 100%;
    }
    #div1 {
        grid-area: 1 / 1 / 2 / 2;
        background-color: rgba(222,191,42, 0.5);
    }
    #div2 {
        grid-area: 2/1/3/2;
        background-color: rgba(53,221,80, 0.5);
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
@media (min-width: 550px) and (max-width: 800px) {
    #dashboard {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 20px;
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
</style>