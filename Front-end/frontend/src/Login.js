import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Tampilkan toast notification untuk login berhasil
        toast.success('Anda berhasil login!');
        // Arahkan ke halaman home setelah 1 detik
        setTimeout(() => {
          navigate('/home');
        }, 1000);
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Terjadi kesalahan, coba lagi.');
    }
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <div className="image-section">
        <img src="image/konser.jpeg" alt="Event" className="background-image" />
      </div>

      <div className="login-section">
        <h1>Selamat Datang</h1>
        <p>Silahkan Masukkan Akun Anda</p>
        {error && <p className="error-text">{error}</p>}
        <form onSubmit={submit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Masukan Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Masukan Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-text">
          Tidak Punya Akun? <Link to="/register">Buat Sekarang</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
