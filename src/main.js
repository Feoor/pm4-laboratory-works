import { createApp } from 'vue'
import './style.css'
import BaseButton from "./components/BaseButton.js";
import BaseComponent from "./components/BaseComponent.js";

const app = createApp({
  components: {BaseButton, BaseComponent},
  template: `
    <BaseButton
        class="main-button"
        style="width: 50px; align-self: center"
        id="mainButton"
        @click="console.log('Button clicked!')"
    ></BaseButton>
    
    <BaseComponent
        class="main-component"
        style="width: 300px; align-self: center"
        id="mainComponent"
    ></BaseComponent>
  `
});
app.config.globalProperties.$version = '1.0';
app.mount('#app');