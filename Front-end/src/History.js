import React from 'react';
import './History.css'; // Assuming styling is in Tiket.css

const concerts = [
  {
    id: 1,
    artist: "Ed-Sheeran",
    location: "Medan",
    date: "20 Oct 2024",
    time: "19.00 - 21.00",
    price: "Rp.25.000.000,00",
    image: "./image/ed.jpg", // replace with your correct image path
  },
  {
    id: 2,
    artist: "Avanged Sevenfold",
    location: "Jakarta",
    date: "22 Mei 2025",
    time: "20.00 - 22.00",
    price: "Rp.30.000.000,00",
    image: "./image/a7x.jpg", // replace with your correct image path
  },
  {
    id: 3,
    artist: "Bruno Mars",
    location: "Surabaya",
    date: "5 Nov 2024",
    time: "19.00 - 21.00",
    price: "Rp.25.000.000,00",
    image: "./image/Bruno Mars.jpeg", // replace with your correct image path
  },
  {
    id: 4,
    artist: "Adele",
    location: "Medan",
    date: "11 Nov 2024",
    time: "19.00 - 22.00",
    price: "Rp.10.000.000,00",
    image: "./image/adele.jpeg",
  },
  {
    id: 5,
    artist: "Linkin Park",
    location: "Jawa Tengah",
    date: "1 Nov 2024",
    time: "18.00 - 21.00",
    price: "Rp.5.000.000,00",
    image: "./image/linkinpark.jpeg",
  },

];

function Tiket() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src="./image/musikal.png" alt="Logo" /> {/* Assuming your logo */}
        </div>
        <ul className="menu">
          <li><a href="/">Home</a></li>
          <li><a href="/History">Histori</a></li>
          <li><a href="/tiket">Tiket</a></li>
        </ul>
        <div className="profile">
          <img src="./image/profile.png" alt="Profile" className="profile-picture" />
        </div>
      </nav>

      <div className="concert-list">
        {concerts.map((concert) => (
          <div key={concert.id} className="concert-card" image="./image/bg.jpg">
            <img src={concert.image} alt={concert.artist} className="concert-image" />
            <div className="concert-details">
              <h3>{concert.artist}</h3>
              <p>{concert.location}, {concert.date}</p>
              <p><strong>{concert.time}</strong></p>
              <p>{concert.price}</p>
              <div className="concert-buttons">
                
                <button className="cancel-button">Refund</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tiket;
