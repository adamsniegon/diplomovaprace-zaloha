import React from 'react';
import './Logo.css';
import logo from '../../assets/images/app-logo.svg';

function Logo() {
    return (
        <div className="wrapper">
            <img className="logo" src={logo}></img>
        </div>
    );
  }
  
  export default Logo;