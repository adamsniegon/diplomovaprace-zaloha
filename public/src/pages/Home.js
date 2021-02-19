import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {citiesFetch} from '../store/actions/citiesActions'
import HorizontalSection from '../components/HorizontalSection/HorizontalSection';

function Home() {
    const citiesIds = useSelector(state => state.cities.citiesIds);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(citiesFetch());
    }, []);

    return (
        <React.Fragment>
            <HorizontalSection headline="Objevujte" data={citiesIds}/>
        </React.Fragment>
    );
  }
  
  export default Home;