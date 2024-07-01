// src/components/SocialMediaLinks.js
import React from 'react';

const SocialMediaLinks = () => {
    return (
        <div className="social-media-links"
             style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '10px' }}>
            <a href="https://www.linkedin.com/company/vyaelea/?viewAsMember=true" target="_blank" rel="noopener noreferrer" style={{ color: 'gold', fontSize: '20px' }}><i className="fab fa-linkedin"></i></a>
            <a href="https://www.youtube.com/channel/UCDsFiKyGVXyj6BC5X0YC6lw" target="_blank" rel="noopener noreferrer" style={{ color: 'gold', fontSize: '20px' }}><i className="fab fa-youtube"></i></a>
            <a href="https://twitter.com/vyaelea" target="_blank" rel="noopener noreferrer" style={{ color: 'gold', fontSize: '20px' }}><i className="fab fa-twitter"></i></a>
        </div>
    );
};

export default SocialMediaLinks;
