<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
</script>

<template>
  <div>
    <Header></Header>
  
  <RouterView />
    </div>
  
</template>

<style scoped>
div{
  overflow-x: hidden;
}
</style>
