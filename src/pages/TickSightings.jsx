import { CircularProgress } from '@mui/material';
import Map from '../components/Map';
import { useState, useEffect } from 'react';
import axios from 'axios';
import getMarkerInfo from '../utils/getMarkerInfo';
import TicksPanel from '../components/TicksPanel';

export default function Sightings() {
    const [loading, setLoading] = useState(true)
    const [markerInfo, setMarkerInfo] = useState()
    const [showTicksPanel, setShowTicksPanel] = useState(false)

    useEffect(() => {
        axios.get('https://dev-task.elancoapps.com/data/tick-sightings')
            .then(function (response) {
                return response.data
            })
            .then(function (data) {
                setMarkerInfo(getMarkerInfo(data))
            })
            .then(function () {
                setLoading(false)
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
            <Map markerInfo={markerInfo}/>
            <TicksPanel />
        </>
    );
}