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
    data() {
      return {
        isMenuOpen: false
      }
    },
    methods: {
    // toggleMenu() {
    //   this.isMenuOpen = !this.isMenuOpen
    // },
    // fnRouteTo(link) {
    //   this.$router.push(link)
    //   this.isMenuOpen = false
    //   }
    }
  }
</script>
<style scoped>
</style>