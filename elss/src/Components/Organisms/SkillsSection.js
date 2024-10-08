// src/Components/Organisms/SkillsSection.js
import React from 'react';
import SkillCard from '../Molecules/Skills/SkillCard';
import '../../styles/Skills.css';

const SkillsSection = () => {
    return (
        <div className="skills-section">
            <SkillCard 
                iconSrc="/img/skill1.png" 
                title="Product Design" 
                description="This is a template Figma file, turned into code using Anima." 
            />
            <SkillCard 
                iconSrc="/img/skill2.png" 
                title="Web Development" 
                description="Building responsive websites using modern technologies." 
            />
            <SkillCard 
                iconSrc="/img/skill3.png" 
                title="UI/UX Design" 
                description="Creating user-friendly interfaces with a focus on user experience." 
            />
        </div>
    );
};

export default SkillsSection;
