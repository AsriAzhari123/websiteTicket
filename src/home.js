import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; 

function Home() {
  return (
    <div className="home">
      <nav className="navbar">
        <div className="logo"> 
          <img src="./image/musikal.png" alt="Logo" /> {/* Assuming your logo is in the public folder */}
        </div>
        <ul className="menu">
          <li><a href="/home">Home</a></li>
          <li><a href="/History">Histori</a></li>
          <li><a href="/Tiket">Tiket</a></li>
        </ul>
        <div className="profile">
          <img src="./image/profile.png" alt="Profile" className="profile-picture" />
        </div>
      </nav>
      
      <div className="background-image">
        <img src="./image/conser.jpg" alt="Concert" className="concert-img" /> {/* Path to your image */}
        <div className="explore-button">
          <Link to="/Tiket" className="btn">Explore More</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;