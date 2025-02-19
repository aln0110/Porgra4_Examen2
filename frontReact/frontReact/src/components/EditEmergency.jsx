import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import './CreateEmergency.css';

const EditEmergency = () => {
    const { id } = useParams();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEmergency = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/api/v1/djangoGetById?id=${id}`);
                const emergency = response.data;
                for (const key in emergency) {
                    setValue(key, emergency[key]);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching emergency:', error);
                toast.error('Hubo un problema al cargar la emergencia');
            }
        };
        fetchEmergency();
    }, [id, setValue]);

    const onSubmit = async (data) => {
        try {
            const response = await axios.put(`http://localhost:8081/api/v1/djangoUpdate?id=${id}`, data);
            if (response.data.success) {
                toast.success(response.data.mensaje);
                navigate('/');
            } else {
                toast.error('Hubo un problema al actualizar la emergencia');
            }
        } catch (error) {
            console.error('Error updating emergency:', error);
            toast.error('Hubo un problema al actualizar la emergencia');
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="container">
            <h2>Editar Emergencia</h2>
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
                <button type="submit">Guardar Cambios</button>
            </form>
        </div>
    );
};

export default EditEmergency;
