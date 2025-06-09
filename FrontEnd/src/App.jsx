import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage.jsx';
import Login from './Pages/AuthForm.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import HomePage from './Pages/HomePage.jsx';
import AboutUs from './Pages/AboutUs.jsx';
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
