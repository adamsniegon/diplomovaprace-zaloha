import React from 'react';
import './Badge.css';

function Badge({text, color}) {

    return (
        <div className="badge" style={{borderColor: color}}>
            <p className="badge__text">{text}</p>
        </div>
    );
  }
  
  export default Badge;