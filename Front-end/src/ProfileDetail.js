import React from 'react';
import { Search, User } from 'lucide-react';
import './ProfileDetail.css';

const ProfileDetail = () => {
  return (
    <div className="profile-page">
      <main>
        <div className="profile-card">
          <img src="/api/placeholder/150/150" alt="Profile" className="profile-image" />
          <div className="profile-actions">
            <button className="action-button">Ganti Foto</button>
            <button className="action-button">Hapus Foto</button>
          </div>
          <h2>Muhammad Vadila Rambe</h2>
          <p>vadilajulian@gmail.com</p>
          <button className="edit-profile-button">Edit Profile</button>
          <p className="privacy-notice">
            Jaga detail privasi Anda tetap pribadi. Informasi yang Anda tambahkan di sini dapat dilihat oleh siapa pun yang dapat melihat profil Anda.
          </p>
          <form>
            <div className="form-group">
              <label>Nama</label>
              <input type="text" placeholder="Muhammad Vadila Rambe" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="vadilajulian@gmail.com" />
            </div>
            <button type="submit" className="submit-button">Simpan</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ProfileDetail;