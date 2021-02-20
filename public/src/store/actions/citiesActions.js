import * as citiesFetchTypes from "./types";
import axios from 'axios';
import {normalize, schema} from "normalizr";

export const citiesFetchStart = () => {
    return {
        type: citiesFetchTypes.CITIES_FETCH_START
    }
}

export const citiesFetchSuccess = (cities, citiesIds) => {
    return {
        type: citiesFetchTypes.CITIES_FETCH_SUCCESS,
        payload: {
            cities,
            citiesIds
        }
    }
}

export const citiesFetchError = (error) => {
    return {
        type: citiesFetchTypes.CITIES_FETCH_ERROR,
        payload: error
    }
}

export const citiesFetchRefresh = () => {
    return {
        type: citiesFetchTypes.CITIES_FETCH_REFRESH
    }
}

export const citiesFetch = () => async (dispatch) => {
    dispatch(citiesFetchStart());
    try {
        const cities = await axios.get('/api/cities');
        const citySchema = new schema.Entity('cities', {}, {
            idAttribute: "_id"
        });
        const normalizedData = normalize(cities.data.data, [citySchema]);
        dispatch(citiesFetchSuccess(normalizedData.entities.cities, normalizedData.result));
    } catch (error) {
        dispatch(citiesFetchError(error));
    }
}