import * as dataFetchTypes from "../actions/types";

const initialState = {
    loading: false,
    error: null,
    cities: {},
    places: {},
    citiesIds: [],
    placesIds: []
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case dataFetchTypes.DATA_FETCH_START:
            return {
                ...state,
                loading: true,
                error: null
            }

        case dataFetchTypes.DATA_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                cities: action.payload.cities,
                places: action.payload.places,
                citiesIds: action.payload.citiesIds,
                placesIds: action.payload.placesIds
            }

        case dataFetchTypes.DATA_FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }

        case dataFetchTypes.DATA_FETCH_REFRESH:
            return {
                ...state,
                loading: false,
                error: null,
                cities: {},
                places: {},
                citiesIds: [],
                placesIds: []
            }

        default:
            return state
    }
}

export default dataReducer;