// src/pages/EmergenciesListPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmergenciesList from '../components/EmergenciesList';

const EmergenciesListPage = () => {
    const [emergencies, setEmergencies] = useState([]);

    useEffect(() => {
        const fetchEmergencies = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/v1/djangoGet');
                setEmergencies(response.data);
            } catch (error) {
                console.error('Error fetching emergencies:', error);
            }
        };

        fetchEmergencies();
    }, []);

    return (
        <EmergenciesList emergencies={emergencies} setEmergencies={setEmergencies} />
    );
};

export default EmergenciesListPage;
