<template>
    <div class="emergencies-list">
      <h2>Lista de Emergencias</h2>
      <table class="emergencies-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre del Paciente</th>
            <th>Nombre del Doctor</th>
            <th>Valoración</th>
            <th>Descripción</th>
            <th>Fecha</th>
            <th>Tratamiento</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="emergency in emergencies" :key="emergency.id">
            <td>{{ emergency.id }}</td>
            <td>{{ emergency.nomPaciente }}</td>
            <td>{{ emergency.nomDoctor }}</td>
            <td>{{ emergency.valoracion }}</td>
            <td>{{ emergency.descripcion }}</td>
            <td>{{ emergency.fecha }}</td>
            <td>{{ emergency.tratamiento }}</td>
            <td class="actions">
              <button @click="handleEdit(emergency.id)" class="edit-button">Editar</button>
              <button @click="handleDelete(emergency.id)" class="delete-button">Borrar</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="deleteMessage" class="delete-message">{{ deleteMessage }}</div>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  import { ref, onMounted } from 'vue';
  import { useToast } from 'vue-toastification';
  import 'vue-toastification/dist/index.css';
  import { useRouter } from 'vue-router';
  
  const toast = useToast();
  const router = useRouter();
  const emergencies = ref([]);
  const deleteMessage = ref('');
  
  const fetchEmergencies = async () => {
    try {
      const response = await axios.get('http://localhost:3000/getEmergencias');
      emergencies.value = response.data;
    } catch (error) {
      console.error('Error fetching emergencies:', error);
      toast.error('Hubo un problema al obtener las emergencias');
    }
  };
  
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/deleteEmergencia/${id}`);
      const responseData = response.data;
  
      if (responseData.success) {
        emergencies.value = emergencies.value.filter(emergency => emergency.id !== id);
        deleteMessage.value = responseData.mensaje;
        toast.success(responseData.mensaje);
      } else {
        toast.error('Hubo un problema al eliminar la emergencia');
      }
    } catch (error) {
      console.error('Error deleting emergency:', error);
      toast.error('Hubo un problema al eliminar la emergencia');
    }
  };
  
  const handleEdit = (id) => {
    router.push(`/editEmergencia/${id}`);
  };
  
  onMounted(() => {
    fetchEmergencies();
  });
  </script>
  
  <style scoped>
  /* Import the external CSS file */
  @import './EmergenciesList.css';
  </style>
  