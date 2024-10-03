import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const navigate = useNavigate(); // Hook to navigate between pages

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle your registration logic here
    // After successful registration, navigate to the login page
    navigate('/');
  };

  return (
    <div className="login-container1">
      <div className="image-section1">
        <img src="images/konser.jpeg" alt="Event" className="background-image1" />
      </div>

      <div className="login-section1">
        <h1>Daftar Akun Anda</h1>
        <p>Silahkan Daftar Akun Anda</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group1">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Masukan Username" required />
          </div>

          <div className="input-group1">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Masukan Email" required />
          </div>
          
          <div className="input-group1">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Masukan Password" required />
          </div>
          <button type="submit" className="login-button1">Daftar</button>
        </form>
      </div>
    </div>
  );
}

export default Register;