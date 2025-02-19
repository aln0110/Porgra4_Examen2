<template>
    <div class="container">
      <h2>Editar Emergencia</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label>Nombre del Paciente</label>
          <input v-model="form.nomPaciente" type="text" required />
          <span v-if="errors.nomPaciente" class="error">{{ errors.nomPaciente }}</span>
        </div>
        <div class="form-group">
          <label>Nombre del Doctor</label>
          <input v-model="form.nomDoctor" type="text" required />
          <span v-if="errors.nomDoctor" class="error">{{ errors.nomDoctor }}</span>
        </div>
        <div class="form-group">
          <label>Cédula del Paciente</label>
          <input v-model="form.cedPaciente" type="text" required />
          <span v-if="errors.cedPaciente" class="error">{{ errors.cedPaciente }}</span>
        </div>
        <div class="form-group">
          <label>Cédula del Doctor</label>
          <input v-model="form.cedDoctor" type="text" required />
          <span v-if="errors.cedDoctor" class="error">{{ errors.cedDoctor }}</span>
        </div>
        <div class="form-group">
          <label>Valoración</label>
          <input v-model="form.valoracion" type="text" required />
          <span v-if="errors.valoracion" class="error">{{ errors.valoracion }}</span>
        </div>
        <div class="form-group">
          <label>Gravedad</label>
          <input v-model="form.gravedad" type="text" required />
          <span v-if="errors.gravedad" class="error">{{ errors.gravedad }}</span>
        </div>
        <div class="form-group">
          <label>Descripción</label>
          <input v-model="form.descripcion" type="text" required />
          <span v-if="errors.descripcion" class="error">{{ errors.descripcion }}</span>
        </div>
        <div class="form-group">
          <label>Estado</label>
          <input v-model="form.estado" type="checkbox" />
        </div>
        <div class="form-group">
          <label>Fecha</label>
          <input v-model="form.fecha" type="datetime-local" required />
          <span v-if="errors.fecha" class="error">{{ errors.fecha }}</span>
        </div>
        <div class="form-group">
          <label>Motivo</label>
          <input v-model="form.motivo" type="text" required />
          <span v-if="errors.motivo" class="error">{{ errors.motivo }}</span>
        </div>
        <div class="form-group">
          <label>Diagnóstico</label>
          <input v-model="form.diagnostico" type="text" required />
          <span v-if="errors.diagnostico" class="error">{{ errors.diagnostico }}</span>
        </div>
        <div class="form-group">
          <label>Tratamiento</label>
          <input v-model="form.tratamiento" type="text" required />
          <span v-if="errors.tratamiento" class="error">{{ errors.tratamiento }}</span>
        </div>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  import { ref, reactive } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useToast } from 'vue-toastification';
  
  const toast = useToast();
  const route = useRoute();
  const router = useRouter();
  const { id } = route.params;
  const form = reactive({
    nomPaciente: '',
    nomDoctor: '',
    cedPaciente: '',
    cedDoctor: '',
    valoracion: '',
    gravedad: '',
    descripcion: '',
    estado: false,
    fecha: '',
    motivo: '',
    diagnostico: '',
    tratamiento: ''
  });
  const errors = reactive({});
  
  // Fetch emergency data by ID
  axios.get(`http://localhost:3000/getEmergencia/${id}`)
    .then(response => {
      const emergency = response.data;
      for (const key in emergency) {
        if (form.hasOwnProperty(key)) {
          form[key] = emergency[key];
        }
      }
    })
    .catch(error => {
      console.error('Error fetching emergency:', error);
      toast.error('Hubo un problema al cargar la emergencia');
    });
  
  const handleSubmit = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/updateEmergencia?id=${id}`, form);
      const responseData = response.data;
      if (responseData.success) {
        toast.success(responseData.mensaje);
        router.push('/listEmergencia'); 
      } else {
        toast.error('Hubo un problema al actualizar la emergencia');
      }
    } catch (error) {
      console.error('Error updating emergency:', error);
      toast.error('Hubo un problema al actualizar la emergencia');
    }
  };
  
  </script>
  
  <style scoped>
  /* Import the external CSS file */
  @import './CreateEmergency.css';
  
  /* Add any additional scoped styles here */
  .container {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  .error {
    color: red;
  }
  </style>
  