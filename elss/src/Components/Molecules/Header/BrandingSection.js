import React from 'react';
import Title from '../../atoms/Title'; // Pastikan Anda memiliki Title.js
import Subtitle from '../../atoms/Subtitle'; // Pastikan Anda memiliki Subtitle.js
import Image from '../../atoms/Image';
import Description from './Description';



const BrandingSection = () => {
    return (
        <div className="branding-section">
            <div className="header-content">
                <div className="title-subtitle">
                    <Title text="Visual Designer" className="title" />
                    <Subtitle text="Branding | Image making" className="subtitle" />
                <h1 className="subtitle">Visual Designer</h1> {/* Judul utama */}
                {/* <p className="description"> 
                    This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
                </p> */}
                <Description/>
                </div> 

                
                
                <div className="button">
                    <span className="button-text">Contact</span>
                </div>
            </div>
            <Image src="/img/Headerimg.png" alt="Header Image" className="header-image" />
        </div>
        
    );
};

export default BrandingSection;
