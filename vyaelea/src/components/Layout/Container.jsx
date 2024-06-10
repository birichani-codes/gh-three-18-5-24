// src/components/Container.jsx
import React from 'react';
import './Container.css'; // Import the CSS for the container

const Container = ({ children }) => {
    return <div className="common-container">{children}</div>;
};

export default Container;
