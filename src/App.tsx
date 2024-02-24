import React from 'react';
import AuthPage from './pages/Auth/AuthPage';
import Upload from './pages/Home/Upload';
import PersonalDetailsForm from './pages/Review/PersonalDetails';
import UserProfile from './pages/UserProfile/UserProfile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AuthPage />} />
                <Route path="/home" element={<Upload />} />
                <Route path="/review" element={<PersonalDetailsForm />} />
                <Route path='/user-profile' element={<UserProfile />} />
            </Routes>
        </Router>
    );
}
