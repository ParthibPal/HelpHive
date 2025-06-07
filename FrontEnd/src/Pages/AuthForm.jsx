import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../Css/AuthForm.css';

const AuthForm = () => {
  const [isRegistering, setIsRegistering] = useState(true);
  const navigate = useNavigate();
  const toggleForm = () => setIsRegistering(!isRegistering);

  const formVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  return (
    <div className="auth-container">
      <div className="auth-box glass">
        <h2>{isRegistering ? 'Create Your CommunityCare Account' : 'Welcome Back!'}</h2>

        <AnimatePresence mode="wait">
          {isRegistering ? (
            <motion.form
              key="register"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={formVariants}
              transition={{ duration: 0.5 }}
              className="auth-form"
            >
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <select>
                <option value="">Choose Role</option>
                <option value="service_provider">Task Poster</option>
                <option value="resource_giver">Task Helper</option>
                <option value="seeker">Admin</option>
              </select>
              <button type="submit">Sign Up</button>
            </motion.form>
          ) : (
            <motion.form
              key="login"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={formVariants}
              transition={{ duration: 0.5 }}
              className="auth-form"
            >
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit" onClick={() => navigate("/")}>Sign In</button>
            </motion.form>
          )}
        </AnimatePresence>

        <p className="auth-toggle">
          {isRegistering ? 'Already have an account?' : "Don't have an account?"}
          <span onClick={toggleForm}>
            {isRegistering ? ' Login' : ' Register'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
