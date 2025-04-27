<template>
    <div>
      <header>Encabezado Fijo</header>
      <VueSidebarMenuAkahon />
      <main>
        <router-view />
      </main>
    </div>
</template>
<script>
  import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
  
  export default {
    name: 'AdminPanel.vue',
    components: {VueSidebarMenuAkahon},
    data() {
      return {}
    }
  }
</script>