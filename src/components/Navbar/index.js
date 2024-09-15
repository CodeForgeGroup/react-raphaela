import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logoPorto from '../../assets/images/logoPorto.png';

function Navbar() {
    return (
      <nav>
        <div className="logo">
          <img src={logoPorto} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li><button className='buttonHome'><Link to="/">Home</Link></button></li>
          <li><button className='buttonContato'><Link to="/contato">Contato</Link></button></li>
        </ul>
        <div className="login-button">
          <Link to="/login">Login</Link>
        </div>
      </nav>
    );
}

export default Navbar;
