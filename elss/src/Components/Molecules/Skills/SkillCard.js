// src/Components/Molecules/Skills/SkillCard.js
import React from 'react';
import Image from '../../atoms/Image';
import '../../../styles/Skills.css';

const SkillCard = ({ iconSrc, title, description }) => {
    return (
        <div className="skill-card">
            <Image src={iconSrc} altText={title} className="skill-icon" />
            <div className="skill-card-content">
                <h3 className="skill-card-title">{title}</h3>
                <p className="skill-card-description">{description}</p>
            </div>
        </div>
    );
};

export default SkillCard;
