import React from 'react';
import NavbarItem from '../../atoms/NavbarItem';
import '../../../styles/Navbar.css'; // Impor file CSS dengan jalur yang benar

const NavbarMenu = () => {
  return (
    <div className="navbar-menu">
      <NavbarItem text="About" />
      <NavbarItem text="Work" />
      <NavbarItem text="Contact" />
    </div>
  );
};

export default NavbarMenu;
