import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Tiket from './Tiket';
import Home from './Home';
import History from'./History';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/tiket" element={<Tiket />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
