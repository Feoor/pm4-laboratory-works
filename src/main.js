import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App);
app.config.globalProperties.$version = '1.0';
app.mount('#app');