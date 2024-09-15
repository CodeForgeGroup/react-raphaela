import React from 'react';
import './navbar.css';
import logoPorto from '../../assets/images/logoPorto.png';

function Navbar() {
    return (
      <nav>
        <div className="logo">
          <img src={logoPorto} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li><button className='buttonHome'><a href="/">Home</a></button></li>
          <li><button className='buttonContato'><a href="/contato">Contato</a></button></li>
        </ul>
        <div className="login-button">
          <a href="/login">Login</a>
        </div>
      </nav>
    );
}

 export default Navbar;