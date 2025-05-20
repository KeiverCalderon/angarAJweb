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

@media (min-width: 768px) {
  main{
    width: calc(100% - 250px);
    margin-left: 230px;
    }
}
</style>