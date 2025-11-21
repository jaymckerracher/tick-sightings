import { CircularProgress } from '@mui/material';
import Map from '../components/Map';
import { useState, useEffect } from 'react';
import axios from 'axios';
import getMarkerInfo from '../utils/getMarkerInfo';

export default function Sightings() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://dev-task.elancoapps.com/data/tick-sightings')
            .then(function (response) {
                return response.data
            })
            .then(function (data) {
                getMarkerInfo(data)
            })
            .catch(function (err) {
                console.log(err)
            })
    }, [])

    if (loading) {
        return (
            <CircularProgress />
        )
    } else return (
        <>
            <Map />
        </>
    );
}