import { createApp } from 'vue'
import './style.css'
import CustomButton from "./components/CustomButton.js";

const app = createApp({
  components: {
    CustomButton,
  },
  data() {
    return {
      total: 0
    }
  },
  methods: {
    handleUpdateCount(count) {
      this.total += count;
    }
  }
});
app.config.globalProperties.$version = '1.0';
app.mount('#app');