import React from 'react';
import './CorePillars.css';
import defaultImage from '../assets/images/why-f.jpeg'; // Use the same image for all pillars

const CorePillars = () => {
  const pillars = [
    { title: 'Hardwork', description: 'Ultimately yields success.', image: defaultImage },
    { title: 'Effort', description: 'Scales the unthinkable.', image: defaultImage },
    { title: 'Resilience', description: 'The evidence of things not seen.', image: defaultImage },
    { title: 'Teamwork', description: 'Together we realize our vision.', image: defaultImage },
  ];

  return (
    <section className="core-pillars-section">
      <h2 className="section-subtitle">
        <strong>Vyaelea Core Pillars</strong>
      </h2>
      <div className="row">
        {pillars.map((pillar, index) => (
          <div key={index} className="col-md-3">
            <div className="core-pillar-card">
              <img src={pillar.image} alt={pillar.title} className="card-image" />
              <h4 className="card-title"><strong>{pillar.title}</strong></h4>
              <p className="card-description">{pillar.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CorePillars;
