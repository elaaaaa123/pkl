import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import '../../styles/login.css'; // Import file CSS

const Login = ({ onLogin }) => {
    const [nip, setNip] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Inisialisasi navigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Panggil fungsi login dari props
            await onLogin(nip, password);
            navigate('/'); // Arahkan ke rute home setelah login berhasil
        } catch (err) {
            setError(err.message || 'Terjadi kesalahan. Silakan coba lagi.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>NIP:</label>
                    <input
                        type="text"
                        value={nip}
                        onChange={(e) => setNip(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {/* Tampilkan pesan error jika ada */}
                {error && <p>{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
