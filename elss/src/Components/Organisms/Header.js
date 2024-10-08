import React from 'react';
import '../../styles/Header.css';
import BrandingSection from '../Molecules/Header/BrandingSection';
import ContactLink from '../Molecules/Header/ContactLink';
import Description from '../Molecules/Header/Description';



const Header = () => {
  return (
      
    <header className="header">
      <BrandingSection />
      <Description />
      <ContactLink />
    </header>
  );
};

export default Header;
