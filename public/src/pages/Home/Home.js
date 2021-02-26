import React from 'react';
import {useSelector} from 'react-redux';
import Headline from '../../components/Headline/Headline';
import ShowMoreLink from '../../components/ShowMoreLink/ShowMoreLink';
import CitiesList from '../../components/CitiesList/CitiesList';
import PlacesList from '../../components/PlacesList/PlacesList';
import './Home.css';

function Home() {
    const citiesIds = useSelector(state => state.data.citiesIds);
    const placesIds = useSelector(state => state.data.placesIds);

    return (
        <div>
            <div className="homesection">
                <div className="wrapper">
                    <div className="homesection__header">
                        <Headline text="Města"/>
                        <ShowMoreLink link="/cities" text="Zobrazit vše"/>
                    </div>
                    <CitiesList/>
                </div>
            </div>

            <div className="homesection">
                <div className="wrapper">
                    <div className="homesection__header">
                        <Headline text="Objevujte"/>
                        <ShowMoreLink link="/places" text="Zobrazit vše"/>
                    </div>
                    <PlacesList/>
                </div>
            </div>
        </div>
    );
  }
  
  export default Home;