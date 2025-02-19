// src/components/CreateEmergency.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'; 
import './CreateEmergency.css';

const CreateEmergency = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:8081/api/v1/djangoCreate', data);
            const responseData = response.data; 
            if (responseData.success) {
                toast.success(responseData.mensaje); 
                navigate('/');
            } else {
                toast.error('Hubo un problema al crear la emergencia'); 
            }
        } catch (error) {
            toast.error('Error en la creación de la emergencia'); 
        }
    };

    return (
        <div className="container">
            <h2>Crear Emergencia</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Nombre del Paciente</label>
                    <input {...register('nomPaciente', { required: true })} />
                    {errors.nomPaciente && <span className="error">Este campo es obligatorio</span>}
                </div>
                <div className="form-group">
                    <label>Nombre del Doctor</label>
                    <input {...register('nomDoctor', { required: true })} />
                    {errors.nomDoctor && <span className="error">Este campo es obligatorio</span>}
                </div>
                <div className="form-group">
                    <label>Cédula del Paciente</label>
                    <input {...register('cedPaciente', { required: true })} />
                    {errors.cedPaciente && <span className="error">Este campo es obligatorio</span>}
                </div>
                <div className="form-group">
                    <label>Cédula del Doctor</label>
                    <input {...register('cedDoctor', { required: true })} />
                    {errors.cedDoctor && <span className="error">Este campo es obligatorio</span>}
                </div>
                <div className="form-group">
                    <label>Valoración</label>
                    <input {...register('valoracion', { required: true })} />
                    {errors.valoracion && <span className="error">Este campo es obligatorio</span>}
                </div>
                <div className="form-group">
                    <label>Gravedad</label>
                    <input {...register('gravedad', { required: true })} />
                    {errors.gravedad && <span className="error">Este campo es obligatorio</span>}
                </div>
                <div className="form-group">
                    <label>Descripción</label>
                    <input {...register('descripcion', { required: true })} />
                    {errors.descripcion && <span className="error">Este campo es obligatorio</span>}
                </div>
                <div className="form-group">
                    <label>Estado</label>
                    <input type="checkbox" {...register('estado')} />
                </div>
                <div className="form-group">
                    <label>Fecha</label>
                    <input type="datetime-local" {...register('fecha', { required: true })} />
                    {errors.fecha && <span className="error">Este campo es obligatorio</span>}
                </div>
                <div className="form-group">
                    <label>Motivo</label>
                    <input {...register('motivo', { required: true })} />
                    {errors.motivo && <span className="error">Este campo es obligatorio</span>}
                </div>
                <div className="form-group">
                    <label>Diagnóstico</label>
                    <input {...register('diagnostico', { required: true })} />
                    {errors.diagnostico && <span className="error">Este campo es obligatorio</span>}
                </div>
                <div className="form-group">
                    <label>Tratamiento</label>
                    <input {...register('tratamiento', { required: true })} />
                    {errors.tratamiento && <span className="error">Este campo es obligatorio</span>}
                </div>
                <button type="submit">Crear Emergencia</button>
            </form>
        </div>
    );
};

export default CreateEmergency;
