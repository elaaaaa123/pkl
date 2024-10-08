import React from "react";
import Image from "../../atoms/Image";

const GalleryCard = ({ src, alt, title, description, onClick }) => {
  return (
    <div className="gallery-item" onClick={onClick}>
      <Image src={src} alt={alt} className="gallery-image" />{" "}
      <div className="gallery-text">
      
      
      </div>
    </div>
  );
};

export default GalleryCard;
