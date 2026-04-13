import { createApp } from 'vue'
import './style.css'
import UserCard from "./components/UserCard.js";

const app = createApp({
  data() {
    return {
      postTitle: 'Мой первый пост',
      postLikes: 3,
      postIsPublished: true,
    };
  },
  components: {
    UserCard,
  }
});

app.config.globalProperties.$version = '1.0';
app.mount('#app');