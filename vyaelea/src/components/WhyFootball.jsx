import React from 'react';
import footballImage from '../assets/images/why-f.jpeg'; // Adjust the path as needed

function WhyFootball() {
  return (
    <div className="why-football-section" style={{ marginTop: '50px', marginBottom: '50px' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img src={footballImage} alt="Why Football" className="img-fluid" style={{ width: '100%' }} />
          </div>
          <div className="col-md-6 col-sm-12">
            <h2 className="why-football-title" style={{ marginTop: '10px', marginBottom: '5px', paddingBottom: '10px', fontFamily: 'Overlock, sans-serif' }}>
              <strong>Why Football?</strong>
            </h2>
            <p className="why-football-text" style={{ fontSize: '20px', paddingRight: '20px', fontFamily: 'Overlock, sans-serif' }}>
              A game of love, joy, and passion. Through football, we transcend social, economic, and religious boundaries. Society becomes one. <br /><br />
              Football provides the platform for transformative, behavioral, and sustainable change.<br /><br />
              Partner with Vyaelea as we transform society beginning with the most important person, yourself!.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyFootball;
