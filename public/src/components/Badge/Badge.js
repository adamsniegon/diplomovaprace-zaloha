import React from 'react';
import './Badge.css';

function Badge({icon, text, color}) {

    return (
        <div className="badge" style={{background: color}}>
            <img className="badge__icon" src={icon}></img>
            <p className="badge__text">{text}</p>
        </div>
    );
  }
  
  export default Badge;