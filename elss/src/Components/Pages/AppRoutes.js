import React from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Sektoral from './Sektoral';
import BukuDigital from './BukuDigital';
import Dataset from './Dataset'; // Impor Dataset
import DetailDataset from './DetailDataset'; // Impor DetailDataset
import NotFound from './NotFound'; // Impor halaman 404

import { isAuthenticated } from './loginService'; // Impor isAuthenticated
import NavbarMenu from '../Molecules/Navbar/NavbarMenu';
import Footer from '../../Components/Organisms/Footer'; // Impor Footer

const AppRoutes = () => {
    const isUserAuthenticated = isAuthenticated();
    const navigate = useNavigate(); // Tambahkan ini

    const handleLogout = () => {
        console.log("User logged out");
        localStorage.removeItem('token'); // Contoh penghapusan token
        navigate('/login'); // Arahkan pengguna ke halaman login
    };

    const handleLogin = async (nip, password) => {
        // Logika autentikasi, misalnya memanggil API
        localStorage.setItem('token', 'dummy-token'); // Simulasi penyimpanan token
        navigate('/'); // Arahkan ke halaman utama setelah login
    };

    return (
        <>
            {/* Tampilkan Navbar di semua halaman kecuali Login */}
            {isUserAuthenticated && <NavbarMenu onLogout={handleLogout} />}

            <Routes>
                {/* Rute Login */}
                <Route path="/login" element={<Login onLogin={handleLogin} />} />

                {/* Rute Autentikasi */}
                <Route path="/" element={isUserAuthenticated ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />} />
                <Route path="/sektoral" element={isUserAuthenticated ? <Sektoral /> : <Navigate to="/login" />} />
                <Route path="/buku-digital" element={isUserAuthenticated ? <BukuDigital /> : <Navigate to="/login" />} />

                {/* Tambahkan rute Dataset */}
                <Route path="/dataset" element={isUserAuthenticated ? <Dataset /> : <Navigate to="/login" />} />

                {/* Tambahkan rute DetailDataset */}
                <Route path="/dataset/detail/:id" element={isUserAuthenticated ? <DetailDataset /> : <Navigate to="/login" />} />

                {/* Rute 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>

            {/* Tampilkan Footer di semua halaman kecuali Login */}
            {isUserAuthenticated && <Footer />}
        </>
    );
};

export default AppRoutes;
