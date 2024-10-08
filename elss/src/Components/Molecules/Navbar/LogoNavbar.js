import React from 'react';
import Logo from '../../atoms/Logo';
import Title from '../../atoms/Title'; // Menggunakan Title yang baru

const LogoNavbar = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' , marginLeft: '30px', marginTop: '10px' }}>
      <Logo />
      <Title /> {/* Menggunakan komponen Title */}
    </div>
  );
};

export default LogoNavbar;
