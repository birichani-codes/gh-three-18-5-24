// src/components/CollaborateSection.js

import React from 'react';
import './CollaborateSection.css'; // Import the CSS for this component

// Import images
import logo from '../assets/images/finalNGO-withoutBack.png';
import partnerLogo from '../assets/images/FTG.png';
import videoSrc from '../assets/images/timer.webm';

const CollaborateSection = () => {
  return (
    <section className="collaborate-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="section-header">Collaborate</h2>
            <p className="section-description">
              The aspiration of transforming society is a brazen, surmountable, and sustainable goal.<br /><br />
              It is not about how much you give, but about how much you believe in the vision.<br /><br />
              A society where the equity gap is narrowed, peace is ingrained, and good health is the norm, beginning with you.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="logo-card">
                <img src={logo} alt="Your Logo" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="video-card">
                <video src={videoSrc} controls></video>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <img src={partnerLogo} alt="Partner Logo" className="partner-logo" />
            </div>
            <div className="col-md-6">
              <p className="section-description">
                Here is some information about our partners and their contributions to our cause. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborateSection;
