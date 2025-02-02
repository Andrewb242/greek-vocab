// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Optional for custom styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='nav-title-container'>
        <img className='nav-img' src={process.env.PUBLIC_URL + '/omega-greek-vocab.svg'} alt='Omega'/>
        <div className='nav-title'>GREEK 101-102</div>
      </div>
      <div className="nav-links">
        <Link to="/">Dictionary</Link>
        <Link to="/noun">Noun Declensions</Link>
        <Link to="/verb-chart">Verb Chart</Link>
        <Link to="/adjectives">Adjectives</Link>
        <Link to="/vocab-game">Vocab Game</Link>
      </div>
    </nav>
  );
};

export default Navbar;
