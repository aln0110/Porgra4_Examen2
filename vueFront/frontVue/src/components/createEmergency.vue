<template>
  <div class="container">
    <h2>Crear Emergencia</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group" v-for="field in fields" :key="field.name">
        <label :for="field.name">{{ field.label }}</label>
        <input
          v-if="field.type !== 'checkbox' && field.type !== 'datetime-local'"
          v-model="form[field.name]"
          :type="field.type"
          :id="field.name"
          :required="isRequired(field)"
        />
        <input
          v-else
          v-model="form[field.name]"
          :type="field.type"
          :id="field.name"
          :required="isRequired(field)"
        />
        <span v-if="errors[field.name]" class="error">{{ errors[field.name] }}</span>
      </div>
      <button type="submit">Crear Emergencia</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import './CreateEmergency.css'; // Import the CSS file here

export default {
  name: 'CreateEmergency',
  setup() {
    const toast = useToast();
    const form = ref({
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
    const errors = ref({});

    const fields = [
      { name: 'nomPaciente', label: 'Nombre del Paciente', type: 'text' },
      { name: 'nomDoctor', label: 'Nombre del Doctor', type: 'text' },
      { name: 'cedPaciente', label: 'Cédula del Paciente', type: 'text' },
      { name: 'cedDoctor', label: 'Cédula del Doctor', type: 'text' },
      { name: 'valoracion', label: 'Valoración', type: 'text' },
      { name: 'gravedad', label: 'Gravedad', type: 'text' },
      { name: 'descripcion', label: 'Descripción', type: 'text' },
      { name: 'estado', label: 'Estado', type: 'checkbox' },
      { name: 'fecha', label: 'Fecha', type: 'datetime-local' },
      { name: 'motivo', label: 'Motivo', type: 'text' },
      { name: 'diagnostico', label: 'Diagnóstico', type: 'text' },
      { name: 'tratamiento', label: 'Tratamiento', type: 'text' },
    ];

    const validateForm = () => {
      const newErrors = {};
      fields.forEach(field => {
        if (isRequired(field) && !form.value[field.name]) {
          newErrors[field.name] = 'Este campo es obligatorio';
        }
      });
      errors.value = newErrors;
      return Object.keys(newErrors).length === 0;
    };

    const isRequired = (field) => {
      return field.type !== 'checkbox' && field.type !== 'datetime-local';
    };

    const onSubmit = async () => {
      if (validateForm()) {
        try {
          const response = await axios.post('http://localhost:3000/createEmergencia', form.value);
          const responseData = response.data;
          if (responseData.success) {
            toast.success(responseData.mensaje);
          } else {
            toast.error('Hubo un problema al crear la emergencia');
          }
        } catch (error) {
          toast.error('Error en la creación de la emergencia');
        }
      } else {
        toast.error('Por favor, complete todos los campos obligatorios');
      }
    };

    return {
      form,
      errors,
      fields,
      handleSubmit: onSubmit,
      isRequired,
    };
  },
};
</script>
