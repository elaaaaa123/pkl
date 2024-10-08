import React from 'react';
import '../../styles/Navbar.css'; // Sesuaikan jalur jika Navbar.css ada di src/styles

const NavbarItem = ({ text }) => {
  return (
    <div className="navbar-item "> {/* Ganti gaya inline dengan class */}
      {text}
    </div>
  );
};

export default NavbarItem;
