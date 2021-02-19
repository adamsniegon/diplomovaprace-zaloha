import React from 'react';
import './Headline.css';

function Headline({text}) {    
    return (
        <h1 className="headline">{text}</h1>
    );
  }
  
  export default Headline;