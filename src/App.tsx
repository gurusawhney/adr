import React from 'react';
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Patients from './components/Patients';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/patients" element={<Patients />} />
                <Route path="/dashboard/:name" element={<Dashboard />} />
                <Route path="/" element={<Navigate to="/patients" />} />
            </Routes>
        </Router>
    );
};

export default App;