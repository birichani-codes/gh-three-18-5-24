import React from 'react';
import heroImage from '../assets/images/3E77E5D5-6298-4AB8-BA02-D14DABB9D8D9.jpeg';

function HeroImage() {
    return (
        <div className="container">
            <img src={heroImage} className="jumbotron-image" alt="Main Image" style={{ color: '#0C0A00' }} />
        </div>
    );
}

export default HeroImage;
