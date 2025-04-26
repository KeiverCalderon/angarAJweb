<template>
    <header>
            <h1>Decolorvers</h1>
            <div>
                <a href="/login"><img src="../assets/usuario.png" alt="logo usuario"></a>
            </div>
    </header>
</template>

<script>
export default {
    name: 'AppHeader',
};
</script>

<style scoped>

header {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    }

header h1 {
    color: #202020;
    font-weight: 350;
    font-size: 2.3em;
    }

header img {
    width: 50px;
    height: auto;
    padding-top: 10px;
    }


</style>