import App from './App.vue';
import { createApp } from 'vue';
import router from './router';
import VueSplide from '@splidejs/vue-splide';
import { createNotivue } from 'notivue'
// import store from './store'; 

import 'notivue/notification.css' // Only needed if using built-in notifications
import 'notivue/animations.css' // Only needed if using built-in animations

const notivue = createNotivue({
  position: 'bottom-right',
  limit: 3,
  enqueue: true,
  avoidDuplicates: true,
  notifications: {
    global: {
      duration: 3000
    }
  }
})
const app = createApp(App);

app.use(router); 
app.use( VueSplide );
app.use(notivue)
// app.use(store); 

app.mount('#app');