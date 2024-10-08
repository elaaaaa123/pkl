import React from 'react';

const Avatar = ({ src, alt }) => {
    return <img src={src} alt={alt} style={{ borderRadius: '50%', width: '60px', height: '60px' }} />;
};

export default Avatar;
