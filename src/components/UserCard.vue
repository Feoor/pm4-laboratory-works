<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps(['userName', 'userStatus'])
const emit = defineEmits(['select-user'])

const selectUser = () => {
  emit('select-user', props.userName);
}
</script>

<template>
<div class="user-card">
  <h3>{{ props.userName }}</h3>
  <p>Status: {{ props.userStatus }}</p>
  <button @click="selectUser">Select User</button>
</div>
</template>

<style scoped>
.user-card {
  width: 300px;
  border: 1px solid white;
  border-radius: 10px;
}

h3 {
  color: greenyellow;
  text-align: center;
}
</style>