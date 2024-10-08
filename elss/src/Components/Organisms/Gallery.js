import React, { useState } from "react";
import GalleryCard from "../Molecules/Gallery/GalleryCard";
import "../../styles/Gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  // Array gambar yang sesuai dengan nama file
  const images = [
    "/img/gallery1.png",
    "/img/gallery2.png",
    "/img/gallery3.png",
    "/img/gallery4.png",
    "/img/gallery5.png",
    "/img/gallery6.png"
  ];

  return (
    <section id="Gallery">
      <div className="gallery">
        <h2 className="gallery-title">Latest Work</h2>
        <div className="gallery-content">
          {images.map((src, index) => (
            <GalleryCard
              key={index}
              src={src} // Menggunakan path gambar dari array
              
              
              onClick={() => handleImageClick(src)} // Mengatur aksi klik
            />
          ))}
        </div>

        {/* Menampilkan gambar yang dipilih */}
        {selectedImage && (
          <div className="selected-image-container">
            <img src={selectedImage} alt="Selected" className="selected-image" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
