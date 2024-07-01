// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/finalNGO-withoutBack.png';
import SocialMediaLinks from '../SocialMediaLinks';

const Footer = () => {
    return (
        <footer className="footer" style={{ backgroundColor: '#0C0A00', color: '#FFD700' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/">
                            <img src={logoImage} alt="Logo" style={{ height: '70px' }} />
                        </Link>
                        <p className="footer-links" style={{ paddingTop: '15px', paddingBottom: '5px' }}>
                            &copy; 2023 Vyaelea. All rights reserved. |
                            <Link to="/Contact" style={{ color: '#FFD700' }}>Contact Us</Link> |
                            <Link to="#" style={{ color: '#FFD700' }}>Privacy Policy</Link>
                        </p>
                        <p>Vyaelea is a Non-Governmental Organization registered under section 10 of the
                            Non-Governmental
                            Co-ordination Act (OP.218/051/22-417/12971) in Nairobi, Kenya.</p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <p className="footer-location" style={{ paddingTop: '30px' }}>Sixth Parklands Ave. Muthaiga Ct. Estate</p>
                        <SocialMediaLinks />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
