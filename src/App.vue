<script setup>
import { ref } from 'vue'

const msg = ref('Привет, Vue!')
const rawHtml = ref(`<span style="color: red">Это красный текст</span>`)
const dynamicId = ref('container-1')
const isButtonDisabled = ref(false)
</script>

<template>
<!-- 1 Задание  -->
  <span>{{ msg }}</span>

<!-- 2 Задание -->
  {{ rawHtml }}
  <span v-html="rawHtml"></span>

<!-- 3 Задание -->
  <div v-bind:id="dynamicId">
    Блок 1
  </div>
  <div :id="dynamicId">
    Блок 2
  </div>

<!-- 4 Задание -->
  <button :disabled="isButtonDisabled" class="btn">Button 1</button>

<!-- 5 Задание -->
  <span>{{ msg.split('').reverse().join('') }}</span>
</template>
