<template>
    <div>
      <header>
      <h1>Decolorvers Panel</h1>
      <button class="menu-toggle" @click="toggleMenu">
        <i class="bx bx-menu"></i>
      </button>
      </header>
      <div class="menu-container" :class="{ active: isMenuOpen }">
        <VueSidebarMenuAkahon
          :menuIcon="'bx bxs-store-alt'"
          :menuSize="'50px'"
          :menuTitle="'Decolorvers'"
          :isUsedVueRouter="true"
          @menu-item-clicked="fnRouteTo"
          :menuItems="
            [
              { name: 'Inicio', icon: 'bx bxs-home', link: '/admin/dashboard' },
              { name: 'Productos', icon: 'bx bxs-shopping-bag', link: '/admin/products' },
              { name: 'Categorias', icon: 'bx bxs-purchase-tag', link: '/admin/categories' },
              { name: 'Pedidos', icon: 'bx bxs-cart-alt', link: '/admin/orders' },
              { name: 'Ventas', icon: 'bx bx-wallet-alt', link: '/admin/sales' },
              { name: 'Clientes', icon: 'bx bxs-user', link: '/admin/users' },
              { name: 'Administradores', icon: 'bx bxs-user-voice', link: '/admin/adminis' },
              { name: 'Supervisores', icon: 'bx bxs-user-voice', link: '/admin/supervisors' },
              { name: 'Configuración', icon: 'bx bxs-cog', link: '/admin/settings' }
            ]
          "
          :profileName="'Juan'"
          :profileRole="'Jefe'"
        />
      </div>
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
      return {
        isMenuOpen: false
      }
    },
    methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    fnRouteTo(link) {
      this.$router.push(link)
      this.isMenuOpen = false
      }
    }
  }
</script>
<style>
header {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 5px;
  background-color: var(--header-admin);
  margin-left: -250px;
}

header h1 {
  color: white;
  font-weight: 350;
  font-size: 2.3em;
}

.menu-toggle {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 5px;
}

.menu-container {
  display: none;
  position: fixed;
}

.menu-container.active {
  display: block;
}

.profile i{
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.vue-sidebar-menu-akahon {
  font-family: Arial, Helvetica, sans-serif !important;
}

@media (min-width: 768px) {
  header{
    display: none;
  }
  .menu-container {
    display: block !important;
  }
  .menu-toggle {
    display: none;
  }
  main {
  margin-left: 0;
}
}
</style>