// src/App.js

import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Navigation from './Components/Organisms/Navigation';
import Header from './Components/Organisms/Header';
import Logo from './Components/Organisms/LogoBar';
import Skill from './Components/Organisms/SkillsSection';
import Gallery from './Components/Organisms/Gallery';
import Testimoni from './Components/Organisms/Testimoni';
import Footer from './Components/Organisms/Footer';
import AppRoutes from './Components/Pages/AppRoutes';

function App() {
    const location = useLocation();

    return (
        <div className="App">
            {/* Tampilkan Navigation, Header, Logo, Skill, Gallery, Testimoni, dan Footer hanya di halaman utama */}
            {location.pathname === '/' && (
                <>
                    <Navigation />
                    <Header />
                    <Logo />
                    <Skill />
                    <Gallery />
                    <Testimoni />
                    <Footer />
                </>
            )}
            <AppRoutes /> {/* Gunakan AppRoutes di sini */}
        </div>
    );
}

// Bungkus App dengan Router di sini
const Main = () => (
    <Router>
        <App />
    </Router>
);

export default Main;
