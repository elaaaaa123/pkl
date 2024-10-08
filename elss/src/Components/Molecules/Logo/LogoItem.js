// src/Components/Molecules/LogoItem.js
import React from 'react';
import Logo from '../../atoms/Logo';

const LogoItem = ({ src, alt }) => {
    return (
        <div className="logo-item">
            <Logo src={src} alt={alt} className="logo" />
        </div>
    );
};

export default LogoItem;
