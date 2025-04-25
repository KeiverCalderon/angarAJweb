<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import Componente from './components/nombre_componente.vue'

export default {
  name: 'App',
  // components: {
  //   Componente
  // }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cal+Sans&family=Quicksand:wght@300..700&display=swap');
body{
  margin: 0;
}

#app {
  font-family: "Cal Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
