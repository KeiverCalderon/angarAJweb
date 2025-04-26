import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueSplide from '@splidejs/vue-splide';
// import store from './store'; 

const app = createApp(App);

app.use(router); 
app.use( VueSplide );
// app.use(store); 

app.mount('#app');