import React from 'react';
import Card from '../Card/Card';
import './HomeSection.css';

function HomeSection({headline, data = []}) {    
    return (
        <div className="homesection">
            <h1>{headline}</h1>
            <a href="">Zobrazit vše</a>
            <div className="homesection__list">
                {[...data].reverse().map(id => (
                    <Card key={id} id={id}/>
                ))}
            </div>
        </div>
    );
  }
  
  export default HomeSection;