import axios from 'axios';

export default function getTickPanelInfo(city, setTickPanelInfo) {
    axios.get(`https://dev-task.elancoapps.com/data/tick-sightings/city/${city}`)
        .then(function (response) {
            return response.data
        })
        .then(function (data) {
            setTickPanelInfo(data)
        })
}