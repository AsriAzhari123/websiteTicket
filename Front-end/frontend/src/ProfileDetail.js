import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './ProfileDetail.css'


const ProfileDetail = () => {
    const navigate = useNavigate()
    const submit = (e) => {
      e.preventDefault()
      navigate('/Profile')
    }
  return (
    <div className="profile-page">
      <main>
        <div className="profile-card">
          <img src="./image/profile.png" alt="Profile" className="profile-image" />
          <div className="profile-actions">
            <button className="action-button">Ganti Foto</button>
            <button className="action-button">Hapus Foto</button>
          </div>
          <h2>Muhammad Vadila Rambe</h2>
          <p>vadilaajadulu@gmail.com</p>
          <button className="edit-profile-button">Edit Profile</button>
          <p className="privacy-notice">
            Jaga detail privasi Anda tetap pribadi. Informasi yang Anda tambahkan di sini dapat dilihat oleh siapa pun yang dapat melihat profil Anda.
          </p>
          <form onSubmit={submit}>
            <div className="form-group">
              <label>Nama</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" />
            </div>
            <button type="submit" className="submit-button">Simpan</button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default ProfileDetail