import axios from "axios";

export default function getAllData() {
    return axios.get('https://dev-task.elancoapps.com/data/tick-sightings')
        .then(function (response) {
            return response.data
        })
}