import citiesReducer from './citiesReducer';
import placesReducer from './placesReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    cities: citiesReducer,
    places: placesReducer
});

export default allReducers;