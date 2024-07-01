import React from 'react';
import './WhoWeAre.css';
import CorePillars from './CorePillars';

const WhoWeAre = () => {
  return (
    <section className="who-we-are-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="section-title">
              <strong>Meaning</strong>
              <p className="section-description">
                <strong>Vyaelea</strong> stems from a Kiswahili Methali "Proverb" that states; <em>"Ukiona vyaelea, jua vimeundwa."</em><br />
                This directly translates to; "If you see boats and ships afloat, know that, there is great craftsmanship behind it."<br /><br />
                For Vyaelea - this denotes - <strong><em>"If you see success, know that, there is unseen and unnoticed hardwork, effort, resilience, and teamwork behind it."</em></strong>
              </p>
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="section-border">
              <h2 className="section-subtitle"><strong>Vision</strong></h2>
              <p className="section-text">
                Vyaelea&rsquo;s vision is to transform society through the unifying language of football.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="section-border">
              <h2 className="section-subtitle"><strong>Mission</strong></h2>
              <p className="section-text">
                Vyaelea&rsquo;s mission is to innovatively address the equality gap, foster peace, and promote good health.
              </p>
            </div>
          </div>
        </div>

        <CorePillars />
      </div>
    </section>
  );
};

export default WhoWeAre;
