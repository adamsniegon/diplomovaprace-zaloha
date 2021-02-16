import React from 'react';
import './Logo.css';
import logo from '../../assets/images/app-logo.svg';

function Logo() {
    return (
        <img className="logo" src={logo}></img>
    );
  }
  
  export default Logo;