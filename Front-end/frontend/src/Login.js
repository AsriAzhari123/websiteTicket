import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate()
  const submit = (e) => {
    e.preventDefault()
    navigate('/home')
    console.log("asri");
  }
  return (
    <div className="login-container">
      <div className="image-section">
        <img src="image/konser.jpeg" alt="Event" className="background-image" />
      </div>

      <div className="login-section">
        <h1>Selamat Datang</h1>
        <p>Silahkan Masukkan Akun Anda</p>
        <form onSubmit = {submit}>
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