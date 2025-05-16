<template>
  <div id="app">
    <router-view></router-view>
  </div>
  <Notivue v-slot="item">
    <Notification 
    :item="item"
     />
  </Notivue>
</template>

<script>
import { Notivue, Notification } from 'notivue'

export default {
  name: 'App',
  components:{
    Notivue,
    Notification,
  },
}

</script>

<style>
@import url('notivue/notification.css');
@import url('notivue/animations.css');
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cal+Sans&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
body{
  margin: 0;
}

#app{
  font-family: "Cal Sans", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color:transparent;
}

.Notivue__content-title {
  font-family: "Inter", sans-serif !important;
  font-weight: bold !important;
  }
.Notivue__content-message {
  font-family: "Inter", sans-serif !important;
  font-weight: 400 !important;
  }

</style>
