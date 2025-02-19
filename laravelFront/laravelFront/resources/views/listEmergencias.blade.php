@extends('layouts.app')

@section('content')

<link href="{{ asset('css/emergenciaList.css') }}" rel="stylesheet">
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
                    <a href="" class="edit-button">Editar</a>
                    <form action="{{ route('deleteEmergency', ['id' => $emergency['id']]) }}" method="POST" style="display:inline;">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="delete-button">Borrar</button>
                    </form>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>
@if(session('message'))
    <div class="delete-message">{{ session('message') }}</div>
@endif
@endsection
