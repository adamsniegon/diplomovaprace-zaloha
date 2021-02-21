import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CityCard from '../../components/CityCard/CityCard';
import PlaceCard from '../../components/PlaceCard/PlaceCard';
import Headline from '../../components/Headline/Headline';
import ShowMoreLink from '../../components/ShowMoreLink/ShowMoreLink';
import {citiesFetch} from '../../store/actions/citiesActions';
import {placesFetch} from '../../store/actions/placesActions';
import './Home.css';

function Home() {
    const citiesIds = useSelector(state => state.cities.citiesIds);
    const placesIds = useSelector(state => state.places.placesIds);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(citiesFetch());
    }, []);

    useEffect(() => {
        dispatch(placesFetch());
    }, []);

    return (
        <div>

            <div className="homesection">
                <div className="wrapper">
                    <div className="homesection__header">
                        <Headline text="Objevujte"/>
                        <ShowMoreLink text="Zobrazit vše"/>
                    </div>
                    <div className="homesection__list">
                        {[...citiesIds].reverse().map(id => (
                            <CityCard key={id} id={id}/>
                        ))}
                    </div>
                </div>
            </div>

            <div className="homesection">
                    <div className="wrapper">
                    <div className="homesection__header">
                        <Headline text="Místa"/>
                        <ShowMoreLink text="Zobrazit vše"/>
                    </div>
                    <div className="homesection__list">
                        {[...placesIds].reverse().map(id => (
                            <PlaceCard key={id} id={id}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Home;