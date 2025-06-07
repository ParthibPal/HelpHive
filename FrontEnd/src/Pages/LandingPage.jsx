import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/LandingPage.css';

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="landing">
      <nav className="navbar">
        <div className="logo">HelpHive</div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#tasks-section">Tasks</a></li>
          <li><a href="#post-task-section">Post Task</a></li>
          <li><a href="/login">Login</a></li>
        </ul>

        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Get Local Tasks Done Fast & Easy</h1>
          <p>Find trusted helpers nearby or post tasks you need done.</p>
          <button className="cta" onClick={() => navigate('/tasks')}>Browse Tasks</button>
        </div>
      </section>

      <section className="banner">
        <p>📌 Post Tasks | 🔍 Find Local Help | 💬 Connect & Collaborate</p>
      </section>

      <section id="tasks-section" className="features">
        <div className="feature-card" onClick={() => navigate('/post-task')}>
          <h3>Post a Task</h3>
          <p>Need help? Post your local tasks and find skilled helpers.</p>
        </div>
        <div className="feature-card" onClick={() => navigate('/tasks')}>
          <h3>Find Tasks</h3>
          <p>Looking for work? Browse available tasks near you.</p>
        </div>
        <div className="feature-card">
          <h3>Trusted Helpers</h3>
          <p>Connect with verified local helpers in your community.</p>
        </div>
        <div className="feature-card highlight-card">
          <h3>Task Management</h3>
          <p>Easily track your posted tasks and ongoing jobs in one place.</p>
        </div>
      </section>

      <section id="post-task-section" className="cta-section">
        <h2>Ready to Simplify Your Tasks?</h2>
        <p>Join thousands who trust HelpHive to get things done locally.</p>
        <button className="cta-btn" onClick={() => navigate('/login')}>Create Your Account</button>
      </section>

      <footer className="footer">
        <p>© 2025 HelpHive. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
