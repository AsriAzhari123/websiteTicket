import React, { useState } from 'react';
import { Search, User } from 'lucide-react';
import './navbar.css';

const Header = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <div className="header-container">
      <header className="header">
        <div className="nav-container">
          <span className="logo" ><img src="./image/musikal.png" alt="Logo" /></span>
          <nav className="nav-links">
            <a href="/home" className="nav-link">Home</a>
            <a href="/history" className="nav-link">Histori</a>
            <a href="/tiket" className="nav-link">Tiket</a>
          </nav>
        </div>
        <div className="search-profile-container">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search"
              className="search-input"
            />
            <Search className="search-icon" size={18} />
          </div>
          <button onClick={toggleProfileMenu} className="profile-button">
            <div className="profile-icon">
                <img src="./image/profile.png" alt="Profile" className="profile-picture" />

            </div>
          </button>
        </div>
      </header>

      {showProfileMenu && (
        <div className="profile-menu">
          <a href="/Profile" className="menu-item">My Profile</a>
          <a href="#" className="menu-item">Settings</a>
          <a href="#" className="menu-item">Logout</a>
        </div>
      )}
    </div>
  );
};

export default Header;