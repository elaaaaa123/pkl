// src/Components/Organisms/LogoBar.js
import React from 'react';
import LogoItem from '../Molecules/Logo/LogoItem';
import '../../styles/LogoBar.css'; // Import the CSS file

const LogoBar = () => {
    return (
        <div className="logo-bar">
            <LogoItem src={`${process.env.PUBLIC_URL}/img/google (2).png`} alt="Google Logo" />
            <LogoItem src={`${process.env.PUBLIC_URL}/img/nike.png`} alt="Nike Logo" />
            <LogoItem src={`${process.env.PUBLIC_URL}/img/samsung.png`} alt="Samsung Logo" />
            <LogoItem src={`${process.env.PUBLIC_URL}/img/apple.png`} alt="Apple Logo" />
            <LogoItem src={`${process.env.PUBLIC_URL}/img/adidas.png`} alt="Adidas Logo" />
        </div>
    );
};

export default LogoBar;
