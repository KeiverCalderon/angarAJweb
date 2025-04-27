<template>
    <div>
      <header>Encabezado Fijo</header>
      <div class="menu-container">
        <VueSidebarMenuAkahon
          :menuIcon="'bx bxs-store-alt'"
          :menuSize="'50px'"
          :menuTitle="'Decolorvers'"
          :isUsedVueRouter="true"
          @menu-item-clicked="fnRouteTo(link)"
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
      return {}
    }
  }
</script>
<style>
.profile i{
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.vue-sidebar-menu-akahon {
  font-family: Arial, Helvetica, sans-serif !important;
}
</style>