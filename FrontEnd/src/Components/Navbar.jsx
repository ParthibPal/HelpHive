import React, { useState } from 'react';
import { Briefcase, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleNavigation = (path) => {
        console.log(`Navigate to: ${path}`);
        closeMenu();
    };

    return (
        <>
        <div className="homepage">
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-brand" onClick={() => navigate("/")}>
                        <Briefcase className="brand-icon" />
                        <span className="brand-text">WorkVerse</span>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="nav-links desktop-nav">
                        <a onClick={() => navigate("/home")}>Find Jobs</a>
                        <a href="#companies">Companies</a>
                        <button onClick={() => navigate("/aboutus")} className="nav-link-btn">About</button>
                        <a onClick={() => navigate("/contactus")}>Contact</a>
                    </div>
                    
                    <div className="nav-buttons desktop-nav">
                        <button className="btn-secondary" onClick={()=>navigate('/login')}>Sign In</button>
                        <button className="btn-primary" onClick={()=>navigate('/login')}>Sign Up</button>
                    </div>

                    {/* Mobile Burger Menu Button */}
                    <button className="burger-menu" onClick={toggleMenu}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="mobile-menu-overlay" onClick={closeMenu}>
                        <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                            <div className="mobile-nav-links">
                                <a href="#jobs" onClick={closeMenu}>Find Jobs</a>
                                <a href="#companies" onClick={closeMenu}>Companies</a>
                                <button 
                                    onClick={() => handleNavigation("/aboutus")} 
                                    className="mobile-nav-link-btn"
                                >
                                    About
                                </button>
                                <a href="#contact" onClick={closeMenu}>Contact</a>
                            </div>
                            <div className="mobile-nav-buttons">
                                <button className="btn-secondary" onClick={()=>navigate('/login')}>Sign In</button>
                                <button className="btn-primary" onClick={()=>navigate('/login')}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            <style jsx>{`
                /* Navigation Styles */
                .navbar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background: rgba(15, 32, 39, 0.95);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 1rem 0;
                    transition: all 0.3s ease;
                }

                .nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem
                }

                .nav-brand {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #fcd29f;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .nav-brand:hover {
                    color: #d4a574;
                }

                .brand-icon {
                    color: #d4a574;
                }

                .nav-links {
                    display: flex;
                    gap: 2rem;
                    align-items: center;
                }

                .nav-links a,
                .nav-link-btn {
                    color: #e0e6ed;
                    text-decoration: none;
                    font-weight: 500;
                    transition: all 0.3s ease;
                    position: relative;
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-size: inherit;
                    font-family: inherit;
                    
                }

                .nav-links a:hover,
                .nav-link-btn:hover {
                    color: #fcd29f;
                }

                .nav-links a::after,
                .nav-link-btn::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: #d4a574;
                    transition: width 0.3s ease;
                }

                .nav-links a:hover::after,
                .nav-link-btn:hover::after {
                    width: 100%;
                }

                .nav-buttons {
                    display: flex;
                    gap: 1rem;
                }

                .btn-secondary {
                    background: transparent;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: #e0e6ed;
                    padding: 0.5rem 1.5rem;
                    border-radius: 8px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-family: inherit;
                }

                .btn-secondary:hover {
                    background: rgba(255, 255, 255, 0.05);
                    border-color: #fcd29f;
                    color: #fcd29f;
                }

                .btn-primary {
                    background: linear-gradient(135deg, #fcd29f, #d4a574);
                    border: none;
                    color: #0f2027;
                    padding: 0.5rem 1.5rem;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-family: inherit;
                }

                .btn-primary:hover {
                    background: linear-gradient(135deg, #d4a574, #b8956a);
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(252, 210, 159, 0.3);
                }

                /* Burger Menu */
                .burger-menu {
                    display: none;
                    background: none;
                    border: none;
                    color: #e0e6ed;
                    cursor: pointer;
                    padding: 0.5rem;
                    border-radius: 4px;
                    transition: all 0.3s ease;
                }

                .burger-menu:hover {
                    color: #fcd29f;
                    background: rgba(255, 255, 255, 0.1);
                }

                /* Mobile Menu */
                .mobile-menu-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    z-index: 999;
                    display: flex;
                    align-items: flex-start;
                    justify-content: flex-end;
                    padding-top: 80px;
                }

                .mobile-menu {
                    background: rgba(15, 32, 39, 0.98);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    margin: 1rem;
                    padding: 2rem;
                    min-width: 250px;
                    animation: slideIn 0.3s ease;
                }

                @keyframes slideIn {
                    from {
                        transform: translateY(-20px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                .mobile-nav-links {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }

                .mobile-nav-links a,
                .mobile-nav-link-btn {
                    color: #e0e6ed;
                    text-decoration: none;
                    font-weight: 500;
                    transition: all 0.3s ease;
                    padding: 0.5rem 0;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    background: none;
                    border-top: none;
                    border-left: none;
                    border-right: none;
                    cursor: pointer;
                    font-size: inherit;
                    width: 100%;
                    text-align: left;
                    font-family: inherit;
                }

                .mobile-nav-links a:hover,
                .mobile-nav-link-btn:hover {
                    color: #fcd29f;
                    border-bottom-color: #fcd29f;
                }

                .mobile-nav-buttons {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .mobile-nav-buttons .btn-secondary,
                .mobile-nav-buttons .btn-primary {
                    width: 100%;
                    text-align: center;
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .nav-container {
                        padding: 0 1rem;
                        display: flex;
                        justify-content: center;
                        gap: 43vw;
                    }

                    .desktop-nav {
                        display: none;
                    }

                    .burger-menu {
                        display: block;
                    }
                }

                @media (max-width: 480px) {
                    .nav-container {
                        padding: 0 0.5rem;
                    }

                    .mobile-menu {
                        margin: 0.5rem;
                        padding: 1.5rem;
                        min-width: calc(70vw - 1rem);
                    }

                    .mobile-menu-overlay {
                        padding-top: 70px;
                    }
                }
            `}</style>
        </div>
        </>
    );
};

export default Navbar;