import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GallerySection.css';
import GalleryCard from './GalleryCard';
import teamImage1 from '../assets/images/Lady & Soccer Ball - Smiling & Standing.png';
import teamImage2 from '../assets/images/Vyaelea - Going to the field of Battle.png';
import teamImage3 from '../assets/images/Girl Action Ball.png';
import teamImage4 from '../assets/images/Eqaulity Gap.png';
import teamImage5 from '../assets/images/GBV In Action - Tessa.png';
import teamImage6 from '../assets/images/EG - Kwesi_Vienna.png';
import teamImage7 from '../assets/images/Lady Player of the Tournament.png';
import teamImage8 from '../assets/images/Pic Final.png';

const GallerySection = () => {
  const galleryItems = [
    {
      title: "Unity in Vyaelea",
      images: [
        { id: 1, src: teamImage1, alt: "Image 1" },
        { id: 2, src: teamImage2, alt: "Image 2" },
        { id: 3, src: teamImage3, alt: "Image 3" },
        { id: 4, src: teamImage4, alt: "Image 4" },
        { id: 5, src: teamImage5, alt: "Image 5" },
        { id: 6, src: teamImage6, alt: "Image 6" },
        { id: 7, src: teamImage7, alt: "Image 7" },
        { id: 8, src: teamImage8, alt: "Image 8" }
      ]
    },
     {
          title: "Unity in Vyaelea",
          images: [
            { id: 1, src: teamImage1, alt: "Image 1" },
            { id: 2, src: teamImage2, alt: "Image 2" },
            { id: 3, src: teamImage3, alt: "Image 3" },
            { id: 4, src: teamImage4, alt: "Image 4" },
            { id: 5, src: teamImage5, alt: "Image 5" },
            { id: 6, src: teamImage6, alt: "Image 6" },
            { id: 7, src: teamImage7, alt: "Image 7" },
            { id: 8, src: teamImage8, alt: "Image 8" }
          ]
        },
    // Add more gallery items here as needed
  ];

  return (
    <section className="gallery-section">
      <div className="container">
        {galleryItems.map((item, index) => (
          <GalleryCard key={index} title={item.title} images={item.images} />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
