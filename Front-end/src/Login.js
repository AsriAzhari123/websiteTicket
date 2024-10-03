import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="image-section">
        <img src="images/konser.jpeg" alt="Event" className="background-image" />
      </div>

      <div className="login-section">
        <h1>Selamat Datang</h1>
        <p>Silahkan Masukkan Akun Anda</p>
        <form>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Masukan Username" />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Masukan Password" />
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