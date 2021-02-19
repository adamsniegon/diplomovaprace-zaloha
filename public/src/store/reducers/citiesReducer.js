import * as citiesFetchTypes from "../actions/types";

const initialState = {
    loading: false,
    error: null,
    cities: {},
    citiesIds: []
}

const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case citiesFetchTypes.CITIES_FETCH_START:
            return {
                ...state,
                loading: true,
                error: null
            }

        case citiesFetchTypes.CITIES_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                cities: action.payload.cities,
                citiesIds: action.payload.citiesIds
            }

        case citiesFetchTypes.CITIES_FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }

        default:
            return state
    }
}

export default citiesReducer;