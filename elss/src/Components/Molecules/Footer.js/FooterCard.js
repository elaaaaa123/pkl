import React from 'react';
import Title from '../../atoms/Title'; // Ganti Text menjadi Title
import Subtitle from '../../atoms/Subtitle'; // Ganti Description menjadi Subtitle

const FooterCard = ({ title, description }) => {
  return (
    <div className="footer-card">
      <Title title=" Let's work together" className="footer-title" />
      <Subtitle className="footer-description">
        If you’re interested in working together or just want to say hello, feel free to get in touch.
      </Subtitle>
    </div>
  );
};

export default FooterCard;
