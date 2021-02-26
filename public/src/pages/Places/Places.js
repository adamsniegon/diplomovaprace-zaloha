import React from 'react';
import Headline from '../../components/Headline/Headline';
import PlacesList from '../../components/PlacesList/PlacesList';
import BackLink from '../../components/BackLink/BackLink';
import './Places.css';

function Places() {
    return (
        <div className="places wrapper">
            <BackLink/>
            <Headline text="Místa"/>
            <PlacesList/>
        </div>
    );
  }
  
  export default Places;