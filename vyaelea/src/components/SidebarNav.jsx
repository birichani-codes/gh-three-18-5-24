import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/finalNGO-withoutBack.png';
import './SidebarNav.css';

const SidebarNav = () => {
  useEffect(() => {
    const toggleButton = document.getElementById('toggleButton');
    const navLinks = document.getElementById('navbarNav');

    toggleButton.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

    return () => {
      toggleButton.removeEventListener('click', () => {
        navLinks.classList.toggle('show');
      });
    };
  }, []);

  return (
    <div>
      <div className="header">
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img src={logoImage} alt="Logo" />
            <span className="logo-text">Vyaelea</span>
          </Link>
        </div>
        <div className="toggle-icon">
          <button className="navbar-toggler" id="toggleButton">
            <span className="navbar-toggler-icon">
              <span className="dash"></span>
              <span className="dash"></span>
            </span>
          </button>
        </div>
      </div>
      <nav className="nav-links" id="navbarNav">
        <ul className="nav-links-list">
          <li className="nav-item">
            <Link className="nav-link" to="/who-we-are">Who We Are</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/programs">Programs</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gallery">Gallery</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="engageDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Engage
            </Link>
            <div className="dropdown-menu" aria-labelledby="engageDropdown">
              <Link className="dropdown-item" to="/engage-with-vyaelea">Engage With Vyaelea</Link>
              <Link className="dropdown-item" to="/partner">Partner</Link>
              <Link className="dropdown-item" to="/contact-us">Contact Us</Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SidebarNav;
