// src/components/molecules/NavbarMenu.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarItem from '../../atoms/NavbarItem';
import '../../../styles/Navbar.css'; // Sesuaikan jalur CSS jika perlu

const NavbarMenu = ({ onLogout }) => {
  return (
    <nav className="navbar-menu">
      <div className="navbar-left">
        {/* Logo di sebelah kiri */}
        <img src="/img/satudata.png" alt="Logo" className="navbar-logo" /> {/* Jalur logo diperbarui */}
        <span className="navbar-title">Satu Data</span> {/* Teks di samping logo */}
      </div>
      <div className="navbar-right">
        {/* Gunakan NavLink untuk navigasi */}
        <NavLink
          to="/"
          className="navbar-link"
          activeClassName="active-link" // Styling aktif
          exact
        >
          <NavbarItem text="Home" />
        </NavLink>
        <NavLink
          to="/sektoral"
          className="navbar-link"
          activeClassName="active-link"
        >
          <NavbarItem text="Sektoral" />
        </NavLink>
        <NavLink
          to="/buku-digital"
          className="navbar-link"
          activeClassName="active-link"
        >
          <NavbarItem text="Publikasi" />
        </NavLink>
        {/* Tambahkan link ke halaman Dataset */}
        <NavLink
          to="/dataset"
          className="navbar-link"
          activeClassName="active-link"
        >
          <NavbarItem text="Dataset" />
        </NavLink>
        {/* Tombol logout */}
        <button className="navbar-logout" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavbarMenu;
