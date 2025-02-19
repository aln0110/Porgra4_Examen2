import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import CreateEmergencyPage from './pages/CreateEmergencyPage';
import EmergenciesListPage from './pages/EmergenciesListPage'; 
import EditEmergencyPage from './pages/EditEmergencyPage';
import './App.css';

const Home = () => (
    <div className="container">
        <h2 className="text-center">Pagina principal</h2>
        <nav className="d-flex justify-content-center">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link btn btn-primary mr-2" to="/create-emergency">Crear emergencia</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link btn btn-primary" to="/emergencies-list">Lista de emergencias</Link>
                </li>
            </ul>
        </nav>
    </div>
);

const App = () => {
    return (
        <Router>
            <div className="container">
                <Toaster />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create-emergency" element={<CreateEmergencyPage />} />
                    <Route path="/emergencies-list" element={<EmergenciesListPage />} />
                    <Route path="/edit-emergency/:id" element={<EditEmergencyPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
