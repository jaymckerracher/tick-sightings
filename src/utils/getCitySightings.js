import axios from 'axios';

export default function getCitySightings(city) {
    return axios.get(`https://dev-task.elancoapps.com/data/tick-sightings/city/${city}`)
        .then(function (response) {
            return response.data
        })
}