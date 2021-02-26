import React from 'react';
import Headline from '../../components/Headline/Headline';
import CitiesList from '../../components/CitiesList/CitiesList';
import BackLink from '../../components/BackLink/BackLink';
import './Cities.css';

function Cities() {
    return (
        <div className="cities wrapper">
            <BackLink/>
            <Headline text="Města"/>
            <CitiesList/>
        </div>
    );
  }
  
  export default Cities;