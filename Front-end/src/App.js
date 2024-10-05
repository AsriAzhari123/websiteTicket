import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './navbar';
import Login from './Login';
import Register from './Register';
import Tiket from './Tiket';
import Home from './home';
import History from'./History';
import Profile from './Profile'
import ProfileDetail from './ProfileDetail';
import './App.css';


function App() {
  return (
    <div>
      <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile"element = {<Profile/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/tiket" element={<Tiket />} />
        <Route path="/profiledetail" element={<ProfileDetail />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
