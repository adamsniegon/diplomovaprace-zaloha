import * as placesFetchTypes from "./types";
import axios from 'axios';
import {normalize, schema} from "normalizr";

export const placesFetchStart = () => {
    return {
        type: placesFetchTypes.PLACES_FETCH_START
    }
}

export const placesFetchSuccess = (places, placesIds) => {
    return {
        type: placesFetchTypes.PLACES_FETCH_SUCCESS,
        payload: {
            places,
            placesIds
        }
    }
}

export const placesFetchError = (error) => {
    return {
        type: placesFetchTypes.PLACES_FETCH_ERROR,
        payload: error
    }
}

export const placesFetchRefresh = () => {
    return {
        type: placesFetchTypes.PLACES_FETCH_REFRESH
    }
}

export const placesFetch = () => async (dispatch) => {
    dispatch(placesFetchStart());
    try {
        const places = await axios.get('/api/places');
        const placeSchema = new schema.Entity('places', {}, {
            idAttribute: "_id"
        });
        const normalizedData = normalize(places.data.data, [placeSchema]);
        dispatch(placesFetchSuccess(normalizedData.entities.places, normalizedData.result));
    } catch (error) {
        dispatch(placesFetchError(error));
    }
}