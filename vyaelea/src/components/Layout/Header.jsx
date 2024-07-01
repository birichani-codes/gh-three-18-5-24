import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/finalNGO-withoutBack.png'; // Adjust the path as necessary

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#0C0A00' }}>
      <div className="container d-flex align-items-center justify-content-between">
        <div className="navbar-brand d-flex align-items-center">
          <Link to="/">
            <img src={logoImage} alt="Logo" style={{ height: '70px', paddingRight: '30px' }} />
          </Link>
          <span style={{ fontWeight: 'bold', color: 'gold', fontSize: '35px', fontFamily: 'Overlock, sans-serif' }}>
            Vyaelea
          </span>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" style={{ fontSize: '20px', fontFamily: 'Overlock, sans-serif' }}>
          <ul className="navbar-nav ms-auto" style={{ padding: '20px' }}>
            <li className="nav-item">
              <Link className="nav-link" to="/who-we-are" style={{ color: '#FFD700' }}><strong>Who We Are</strong></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/programs" style={{ color: '#FFD700' }}><strong>Programs</strong></Link>
            </li>
           {/* <li className="nav-item">
              <Link className="nav-link" to="/gallery" style={{ color: '#FFD700' }}><strong>Gallery</strong></Link>
            </li> */}
            <li className="nav-item dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link className="nav-link dropdown-toggle" to="#" id="engageDropdown" role="button" aria-haspopup="true" aria-expanded={isDropdownOpen} style={{ color: '#FFD700' }}>
                <strong>Engage</strong>
              </Link>
              <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="engageDropdown" style={{ backgroundColor: '#0C0A00' }}>
                <Link className="dropdown-item" to="/engage-with-vyaelea" style={{ color: '#FFD700', fontSize: '18px' }}><strong>Engage With Vyaelea</strong></Link>
                <Link className="dropdown-item" to="/Partner" style={{ color: '#FFD700', fontSize: '18px' }}><strong>Partner</strong></Link>
                <Link className="dropdown-item" to="/collaborate" style={{ color: '#FFD700', fontSize: '18px' }}><strong>Collaborate</strong></Link>
              {/*   <Link className="dropdown-item" to="/Contact" style={{ color: '#FFD700', fontSize: '18px' }}><strong>Contact Us</strong></Link> */}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
