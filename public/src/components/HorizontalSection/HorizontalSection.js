import React from 'react';
import Card from '../Card/Card';
import Headline from '../Headline/Headline';
import ShowMoreLink from '../ShowMoreLink/ShowMoreLink';
import './HorizontalSection.css';

function HorizontalSection({headline, data = []}) {    
    return (
        <div className="horizontalsection">
            <div className="horizontalsection__header">
                <Headline text="Objevujte"/>
                <ShowMoreLink text="Zobrazit vše"/>
            </div>
            <div className="horizontalsection__list">
                {[...data].reverse().map(id => (
                    <Card key={id} id={id}/>
                ))}
            </div>
        </div>
    );
  }
  
  export default HorizontalSection;