<template>
    <AdminHeaderMenu/>
    <main>
        <router-view />
    </main>
</template>
<script>
import AdminHeaderMenu from '../components/AdminHeaderMenu.vue'
  
  export default {
    name: 'AdminPanel.vue',
    components: {AdminHeaderMenu,},
  }
</script>
<style scoped>
main{
    background-image: url('../assets/fondoAdmin.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: calc(100vh - 70px);
}

@media (min-width: 768px) {
  main{
    width: calc(100% - 250px);
    margin-left: 250px;
    }
}
</style>