import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GalleryCard.css';

const GalleryCard = ({ title, images }) => {
  return (
    <div className="gallery-card mb-4">
      <h2 className="gallery-title mb-4">{title}</h2>
      <div id={`carousel-${title.replace(/\s+/g, '-')}`} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={image.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={image.src} className="d-block w-100 carousel-image" alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
