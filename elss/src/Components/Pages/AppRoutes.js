// src/Routes/AppRoutes.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Sektoral from './Sektoral'; 
import BukuDigital from './BukuDigital'; 
import SimpleLayout from '../SimpleLayout'; 
import { isAuthenticated } from './loginService'; // Impor isAuthenticated

const AppRoutes = () => {
    const isUserAuthenticated = isAuthenticated();

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={isUserAuthenticated ? <Home /> : <Login />} />
            <Route path="/sektoral" element={<SimpleLayout><Sektoral /></SimpleLayout>} />
            <Route path="/buku-digital" element={<SimpleLayout><BukuDigital /></SimpleLayout>} />
        </Routes>
    );
};

export default AppRoutes;
