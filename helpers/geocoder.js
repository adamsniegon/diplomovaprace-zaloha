const {Place, City} = require('../dbConnection');
const axios = require('axios');

exports.cityGeocode = async (requestData) => {
    try {
        const {data} = await axios.get('https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates', {
            params: {
                address: requestData.searchName,
                outFields: "*",
                maxLocations: 1,
                f: "json",
                token: process.env.GEOCODER_API_KEY
            }
        });
        const newCity = new City();
        newCity.name = data.candidates[0].attributes.City;
        newCity.description = requestData.description;
        newCity.location = {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [data.candidates[0].location.y, data.candidates[0].location.x]
            }
        };
        return newCity;
    } catch (error) {
        throw new Error(error);
    }
}

exports.placeGeocode = async (requestData) => {
    try {
        const {data} = await axios.get('https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates', {
            params: {
                address: requestData.searchName,
                outFields: "*",
                maxLocations: 1,
                f: "json",
                token: process.env.GEOCODER_API_KEY
            }
        });
        const newPlace = new Place();
        newPlace.name = requestData.name;
        newPlace.description = requestData.description;
        newPlace.location = {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [data.candidates[0].location.y, data.candidates[0].location.x]
            },
            properties: {
                streetName: data.candidates[0].attributes.StName,
                streetNumber: data.candidates[0].attributes.AddNum,
                city: data.candidates[0].attributes.City
            }
        };
        return newPlace;
    } catch (error) {
        throw new Error(error);
    }
}