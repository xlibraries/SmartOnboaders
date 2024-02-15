import React from 'react';
import AuthPage from './pages/Auth/AuthPage';
import Upload from './pages/Home/Upload';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AuthPage />} />
                <Route path="/home" element={<Upload />} />

            </Routes>
        </Router>
    );
}
