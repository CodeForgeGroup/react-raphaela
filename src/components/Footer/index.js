import React from 'react';
import './footer.css';
import logo from '../../assets/images/logoFooter.png';
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="Logo Porto Seguro" />
                    <p className='textoLogo'>A empresa que cuida de você!</p>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                    <div className="footer-social">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaWhatsapp /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            <div className="footer-direitos">
                <p>Todos os direitos reservados pela Porto Seguro</p>
            </div>
        </footer>
    );
}

export default Footer;
