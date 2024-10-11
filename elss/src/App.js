// src/App.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Components/Pages/AppRoutes';

function App() {
    return (
        <div className="App">
            <AppRoutes /> {/* Hanya gunakan AppRoutes di sini */}
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
