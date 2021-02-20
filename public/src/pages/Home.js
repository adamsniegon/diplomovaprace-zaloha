import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {citiesFetch} from '../store/actions/citiesActions'
import HomeSection from '../components/HomeSection/HomeSection';

function Home() {
    const citiesIds = useSelector(state => state.cities.citiesIds);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(citiesFetch());
    }, []);

    return (
        <React.Fragment>
            <HomeSection headline="Objevujte" data={citiesIds}/>
            <HomeSection headline="Místa" data={citiesIds}/>
        </React.Fragment>
    );
  }
  
  export default Home;