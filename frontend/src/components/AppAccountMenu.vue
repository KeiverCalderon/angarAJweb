<template>
    <a @click="toggleMenu" :class="{ active: isMenuOpen }"><p class="a_text">Perfil</p><i class='bx bx-user' ></i></a>
    <ul v-if="isMenuOpen" class="menu-dropdown">
        <li><router-link @click="toggleMenu" to="/login" class="menuOption">Iniciar Sesión</router-link></li>
        <li><router-link @click="toggleMenu" to="/account" class="menuOption">Mi Cuenta</router-link></li>
    </ul>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  .menu-container {
    position: relative;
    display: inline-block;
  }
  
 a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #202020;
    height: 50px;
    aspect-ratio: 1/1;
    transition: all 0.3s ease-in-out;
    }

 a i {
    font-size: 40px;
    transition: all 0.3s ease-in-out;
    font-weight: 100;
    }

 a:hover {
    color: var(--boton-hover);
    transform: scale(1.1);
    cursor: pointer;
    }

 .active{
    color: var(--boton-hover);
    transform: scale(1.1);
    cursor: pointer;
    }

.a_text{
        display: none;
    }
  
  .menu-dropdown {
    width: 200px;
    position: fixed;
    top: 80px;
    right: 20px;
    background-color: white;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    list-style: none;
    padding: 0;
    margin: 0;
    z-index: 1000;
  }
  
  .menu-dropdown li {
    cursor: pointer;
    font-size: 1.2em;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menuOption{
    color: black;
    text-decoration: none;
    text-align: center;
    width: 100%;
  }

/* Adaptación a pantallas mas grandes */

@media (min-width:640px){
    .a_text {
        display: inline;
        font-size: 20px;
    }
     a i {
        font-size: 30px;
    }
}
  </style>