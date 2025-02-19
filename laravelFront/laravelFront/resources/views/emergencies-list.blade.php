@extends('layouts.app')

@section('content')
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
            @foreach($emergencies as $emergency)
            <tr>
                <td>{{ $emergency['id'] }}</td>
                <td>{{ $emergency['nomPaciente'] }}</td>
                <td>{{ $emergency['nomDoctor'] }}</td>
                <td>{{ $emergency['valoracion'] }}</td>
                <td>{{ $emergency['descripcion'] }}</td>
                <td>{{ $emergency['fecha'] }}</td>
                <td>{{ $emergency['tratamiento'] }}</td>
                <td class="actions">
                    <a href="{{ route('editEmergency', ['id' => $emergency['id']]) }}" class="edit-button">Editar</a>
                    <button @click="handleDelete({{ $emergency['id'] }})" class="delete-button">Borrar</button>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
    @if($deleteMessage)
    <div class="delete-message">{{ $deleteMessage }}</div>
    @endif
</div>
@endsection

@push('scripts')
<script>
    const app = {
        data() {
            return {
                emergencies: []
            };
        },
        methods: {
            async fetchEmergencies() {
                try {
                    const response = await axios.get('http://localhost:3000/getEmergencias');
                    this.emergencies = response.data;
                } catch (error) {
                    console.error('Error fetching emergencies:', error);
                    this.$toast.error('Hubo un problema al obtener las emergencias');
                }
            },
            async handleDelete(id) {
                try {
                    const response = await axios.delete(`http://localhost:3000/deleteEmergencia/${id}`);
                    const responseData = response.data;

                    if (responseData.success) {
                        this.emergencies = this.emergencies.filter(emergency => emergency.id !== id);
                        this.$toast.success(responseData.message);
                    } else {
                        this.$toast.error('Hubo un problema al eliminar la emergencia');
                    }
                } catch (error) {
                    console.error('Error deleting emergency:', error);
                    this.$toast.error('Hubo un problema al eliminar la emergencia');
                }
            }
        },
        mounted() {
            this.fetchEmergencies();
        }
    };

    Vue.createApp(app).mount('.emergencies-list');
</script>
@endpush

@push('styles')
<!-- Import your scoped styles here if necessary -->
@endpush
