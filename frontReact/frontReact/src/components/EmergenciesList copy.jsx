import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import './Emergencies.css';

const EmergenciesList = ({ emergencies, setEmergencies }) => {
    const [deleteMessage, setDeleteMessage] = useState('');
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8081/api/v1/djangoDelete?id=${id}`);
            const responseData = response.data;

            if (responseData.success) {
                setEmergencies(emergencies.filter(emergency => emergency.id !== id));
                toast.success(responseData.mensaje);
            } else {
                toast.error('Hubo un problema al eliminar la emergencia');
            }
        } catch (error) {
            console.error('Error deleting emergency:', error);
            toast.error('Hubo un problema al eliminar la emergencia');
        }
    };

    return (
        <div className="emergencies-list">
            <h2>Lista de Emergencias</h2>
            <table className="emergencies-table">
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
                    {emergencies.map(emergency => (
                        <tr key={emergency.id}>
                            <td>{emergency.id}</td>
                            <td>{emergency.nomPaciente}</td>
                            <td>{emergency.nomDoctor}</td>
                            <td>{emergency.valoracion}</td>
                            <td>{emergency.descripcion}</td>
                            <td>{emergency.fecha}</td>
                            <td>{emergency.tratamiento}</td>
                            <td className="actions">
                                <button onClick={() => navigate(`/edit-emergency/${emergency.id}`)} className="edit-button">Editar</button>
                                <button onClick={() => handleDelete(emergency.id)} className="delete-button">Borrar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {deleteMessage && <div className="delete-message">{deleteMessage}</div>}
        </div>
    );
};

export default EmergenciesList;
