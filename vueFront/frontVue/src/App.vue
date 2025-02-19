<script setup>
import CreateEmergency from './components/createEmergency.vue';
import HelloWorld from './components/HelloWorld.vue'
import { useRoute } from 'vue-router';

</script>

<template>
  <div>
    <nav>
      <router-link to="/createEmergencia">Crear emergencia</router-link> <br>
      <router-link to="/listEmergencia">Lista de emergencias</router-link>
    </nav>
    <router-view></router-view>
  </div>
 
</template>



<style scoped>

</style>
