import citiesReducer from './citiesReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    cities: citiesReducer
});

export default allReducers;