import React from 'react';
import Card from '../Card/Card';
import Headline from '../Headline/Headline';
import ShowMoreLink from '../ShowMoreLink/ShowMoreLink';
import './HomeSection.css';

function HomeSection({headline, data = []}) {    
    return (
        <div className="homesection">
            <div className="homesection__header">
                <Headline text={headline}/>
                <ShowMoreLink text="Zobrazit vše"/>
            </div>
            <div className="homesection__list">
                {[...data].reverse().map(id => (
                    <Card key={id} id={id}/>
                ))}
            </div>
        </div>
    );
  }
  
  export default HomeSection;