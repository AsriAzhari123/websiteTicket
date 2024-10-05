import React from 'react'
import { User, Edit, Key, Inbox, Info, Phone, LogOut, LucideInspectionPanel, TagIcon } from 'lucide-react'
import { handleEditProfile, handleChangePassword } from './UserProfileFunction'
import './Profile.css'
import { Navigate, useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate ()
  
  const handleEditProfile = (e) => {
  
    e.preventDefault()
    navigate('/profiledetail')
    console.log("asri")
  } 
  const handleChangePassword = (e) =>{
    e.preventDefault()
    navigate('/changepassword')
    console.log("asri")
  }
  return (
    <div className="app-container">
      
      
      <div className="content-container">
        <div className="profile-card1">
          <div className="profile-header">
            <img src="./image/profile.png" alt="Profile" className="profile-image" />
            <div>
              <h2 className="profile-name">Muhammad Vadila Rambe</h2>
              <p className="profile-email">vadilarambe@gmail.com</p>
            </div>
          </div>
          
          <ul className="menu-list">
            <li className="menu-item">
              <TagIcon className="menu-icon" />
              <button onClick={""} className="menu-button">My Voucher</button>
            </li>
            <li className="menu-item">
              <Edit className="menu-icon" />
              <button onClick={handleEditProfile} className="menu-button">Edit Profile</button>
              
            </li>
            <li className="menu-item">
              <Key className="menu-icon" />
              <button onClick={handleChangePassword} className="menu-button">Ganti Password</button>
            </li>
            <li className="menu-item">
              <Inbox className="menu-icon" />
              <button onClick={""} className="menu-button">Inbox</button>
            </li>
            <li className="menu-item">
              <Info className="menu-icon" />
              <button onClick={""} className="menu-button">Tentang Kami</button>
            </li>
            <button onClick={""} className="menu-button">
            <li className="menu-item" >
                <Phone className="menu-icon" />Kontak Kami
            </li>
            </button>
            <li className="menu-item">
              <LogOut className="menu-icon" />
              <button onClick={""} className="menu-button">Keluar</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Profile