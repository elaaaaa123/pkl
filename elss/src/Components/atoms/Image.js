// src/Components/Atoms/Image.js
import React from 'react';

const Image = ({ src, altText, className = "image-container" }) => {
  return (
    <div className={className}>
      <img src={src} alt={altText} className="image" />
    </div>
  );
};

export default Image;
