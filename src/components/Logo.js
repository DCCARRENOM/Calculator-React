import React from "react";
import logo from '../images/logo.png';
import '../styles/Logo.css';

const Logo = () => (
  <div className='contenedor-logo'>
    <img
     src={logo}
     className='logo'
     alt='Logo' />
  </div>
);

export default Logo;