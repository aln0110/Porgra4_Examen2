<!-- resources/views/create-emergency-form.blade.php -->

@extends('layouts.app')

@section('content')
    <link href="{{ asset('css/CreateEmergency.css') }}" rel="stylesheet">

    <div class="container">
        <h2>Crear Emergencia</h2>
        <!-- Display success message -->
        @if (session('success'))
            <div class="alert alert-success">
                {{ session('success') }}
            </div>
        @endif

        <!-- Display error message -->
        @if (session('error'))
            <div class="alert alert-danger">
                {{ session('error') }}
            </div>
        @endif



        <form method="POST" action="{{ route('storeEmergency') }}">
            @csrf
            <div class="form-group">
                <label for="nomPaciente">Nombre del Paciente</label>
                <input type="text" id="nomPaciente" name="nomPaciente" required>
            </div>
            <div class="form-group">
                <label for="nomDoctor">Nombre del Doctor</label>
                <input type="text" id="nomDoctor" name="nomDoctor" required>
            </div>
            <div class="form-group">
                <label for="cedPaciente">Cédula del Paciente</label>
                <input type="text" id="cedPaciente" name="cedPaciente" required>
            </div>
            <div class="form-group">
                <label for="cedDoctor">Cédula del Doctor</label>
                <input type="text" id="cedDoctor" name="cedDoctor" required>
            </div>
            <div class="form-group">
                <label for="valoracion">Valoración</label>
                <input type="text" id="valoracion" name="valoracion" required>
            </div>
            <div class="form-group">
                <label for="gravedad">Gravedad</label>
                <input type="text" id="gravedad" name="gravedad" required>
            </div>
            <div class="form-group">
                <label for="descripcion">Descripción</label>
                <textarea id="descripcion" name="descripcion" rows="4" required></textarea>
            </div>
            <div class="form-group">
                <label for="estado">Estado</label>
                <input type="checkbox" id="estado" name="estado">
            </div>
            <div class="form-group">
                <label for="fecha">Fecha</label>
                <input type="datetime-local" id="fecha" name="fecha">
            </div>
            <div class="form-group">
                <label for="motivo">Motivo</label>
                <input type="text" id="motivo" name="motivo" required>
            </div>
            <div class="form-group">
                <label for="diagnostico">Diagnóstico</label>
                <input type="text" id="diagnostico" name="diagnostico" required>
            </div>
            <div class="form-group">
                <label for="tratamiento">Tratamiento</label>
                <input type="text" id="tratamiento" name="tratamiento" required>
            </div>
            <button type="submit">Crear Emergencia</button>
        </form>
    </div>
@endsection
