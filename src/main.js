import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import UserCard from "./components/UserCard.vue";

const app = createApp(App);
app.config.globalProperties.$version = '1.0';

app.component('UserCard', UserCard);

app.mount('#app');