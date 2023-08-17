import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './assets/style.css';
import store from './store';
import {createApp} from 'vue'
import App from './App.vue'

const app = createApp(App);
app.use(store);

store.dispatch('getFromStorage').then(() => {
    app.mount('#app');
});