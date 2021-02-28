import React from 'react';
import './BadgeBar.css';

function BadgeBar({children}) {
    return (
        <div className="badgebar">
            {children}
        </div>
    );
  }
  
  export default BadgeBar;