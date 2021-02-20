import * as placesFetchTypes from "../actions/types";

const initialState = {
    loading: false,
    error: null,
    places: {},
    placesIds: []
}

const placesReducer = (state = initialState, action) => {
    switch (action.type) {
        case placesFetchTypes.PLACES_FETCH_START:
            return {
                ...state,
                loading: true,
                error: null
            }

        case placesFetchTypes.PLACES_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                places: action.payload.places,
                placesIds: action.payload.placesIds
            }

        case placesFetchTypes.PLACES_FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }

        case placesFetchTypes.PLACES_FETCH_REFRESH:
            return {
                ...state,
                loading: false,
                error: null,
                places: {},
                placesIds: []
            }

        default:
            return state
    }
}

export default placesReducer;