// src/Components/Pages/Home.js

import React from 'react';
import '../../styles/Home.css'; // Pastikan file CSS diimpor

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
            <h1>
                <span className="title-one">Satu Data</span>
                <span className="title-two"> Indonesia</span>
            </h1>
                <h2>Kabupaten Lampung Timur</h2>
                <p>
                    Platform ini dirancang untuk menyediakan informasi yang akurat dan terkini tentang data yang relevan bagi masyarakat.
                    Jelajahi berbagai fitur dan layanan yang kami tawarkan.
                </p>
            </div>
            <div className="home-image">
                <img src="/img/godata.png" alt="Satu Data" />
            </div>
        </div>
    );
};

export default Home;
