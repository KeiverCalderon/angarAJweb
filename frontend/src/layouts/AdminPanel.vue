<template>
    <div>
      <header>
      <h1>Decolorvers Panel</h1>
      <button class="menu-toggle" @click="toggleMenu">
        <i class="bx bx-menu"></i>
      </button>
      </header>
      <div class="menu-container" :class="{ active: isMenuOpen }">
      </div>
      <main>
        <router-view />
      </main>
    </div>
</template>
<script>
  
  export default {
    name: 'AdminPanel.vue',
    // components: {VueSidebarMenuAkahon},
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
<style>
</style>