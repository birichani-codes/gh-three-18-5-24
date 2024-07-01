import React from 'react';
import './CardsSection.css'; // Import the CSS file here
import cardImg1 from '../assets/images/card-img-update.jpeg';
import cardImg2 from '../assets/images/second-card.jpeg';
import cardImg3 from '../assets/images/card-img3-1.jpeg';

function CardsSection() {
  return (
    <div className="container" style={{ marginBottom: '30px' }}>
      <div className="row">
        {[cardImg1, cardImg2, cardImg3].map((img, index) => (
          <div key={index} className="col-md-4">
            <div className="card h-100 black-border-card" style={{ marginBottom: '20px' }}>
              <img src={img} className="card-img-top equal-image" alt={`Card Image ${index + 1}`} />
              <div style={{ backgroundColor: '#0C0A00', height: '10px' }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsSection;
