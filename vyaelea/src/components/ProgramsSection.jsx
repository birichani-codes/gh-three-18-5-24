import React from 'react';
import ProgramCard from './ProgramCard'; // Import the ProgramCard component
import teamImage from '../assets/images/Vyaelea Team .png'; // Import your image if needed

const ProgramsSection = () => {
  const programs = [
    {
      image: teamImage,
      title: 'Unity In Vyaelea',
      description: 'Vyaelea participated in its inaugural program, Unity In Vyaelea, at a 7-Aside football tournament in June 2023, hosted by Railway Our team was represented by players from five different countries. Vyaelea won the Shield Plate and Vienna won female player of the tournament.',
      photoCredit: 'Vyaelea',
      link: '/gallery'
    },
    {
    image: teamImage,
    title: 'Unity In Vyaelea',
    description: 'Vyaelea participated in its inaugural program, Unity In Vyaelea, at a 7-Aside football tournament in June 2023, hosted by Railway Our team was represented by players from five different countries. Vyaelea won the Shield Plate and Vienna won female player of the tournament.',
    photoCredit: 'Vyaelea',
     link: '/gallery'
    },
     {
          image: teamImage,
          title: 'Unity In Vyaelea',
          description: 'Vyaelea participated in its inaugural program, Unity In Vyaelea, at a 7-Aside football tournament in June 2023, hosted by Railway Our team was represented by players from five different countries. Vyaelea won the Shield Plate and Vienna won female player of the tournament.',
          photoCredit: 'Vyaelea',
          link: '/gallery'
        }
    // Add more program objects here
  ];

  return (
    <section className="programs-section" style={{ backgroundColor: '#0C0A00', paddingTop: '20px' }}>
      <div className="container">
        {programs.map((program, index) => (
          <ProgramCard key={index} program={program} />
        ))}
      </div>
    </section>
  );
};

export default ProgramsSection;
