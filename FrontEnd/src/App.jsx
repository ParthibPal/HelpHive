import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage.jsx';
import Login from './Pages/AuthForm.jsx';
import Dashboard from './Pages/Dashboard.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
