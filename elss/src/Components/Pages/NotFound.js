// src/Components/Pages/NotFound.js

import React from 'react';
import '../../styles/NotFound.css'; // Impor file CSS

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-message">Oops! The page you're looking for doesn't exist.</p>
            <a href="/" className="not-found-button">Go Back Home</a>
        </div>
    );
};

export default NotFound;
