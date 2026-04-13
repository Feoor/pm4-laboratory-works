<script setup>
import { ref } from 'vue'

const firstUserStatus = ref('Online')

const handleSelectUser = (userName) => {
  alert(`Вы выбрали пользователя: ${userName}`)
}
</script>

<template>
  <!-- 2 Задание -->
  <UserCard userName="John Doe" :userStatus="firstUserStatus"/>

  <!-- 3 Задание -->
  <UserCard userName="John Doe" :userStatus="firstUserStatus" @select-user="handleSelectUser"/>

</template>
