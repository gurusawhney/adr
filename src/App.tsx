import React from 'react';
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Cues from './components/Cues';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/cues" element={<Cues />} />
                <Route path="/dashboard/:name" element={<Dashboard />} />
                <Route path="/" element={<Navigate to="/cues" />} />
            </Routes>
        </Router>
    );
};

export default App;