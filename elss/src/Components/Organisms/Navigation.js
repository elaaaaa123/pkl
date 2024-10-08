import React from 'react';
import '../../styles/Navbar.css'; // Mengimpor file CSS
import LogoNavbar from '../Molecules/Navbar/LogoNavbar'; // Jalur impor untuk LogoNavbar
import NavbarMenu from '../Molecules/Navbar/NavbarMenu'; // Jalur impor untuk NavbarMenu

const Navigation = () => {
  return (
    <div className="navbar"> {/* Menggunakan kelas CSS */}
      <LogoNavbar /> {/* Menampilkan Logo dan Title */}
      <NavbarMenu /> {/* Menampilkan Item Menu */}
    </div>
  );
};

export default Navigation;
