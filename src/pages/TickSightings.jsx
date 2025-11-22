import { CircularProgress } from '@mui/material';
import Map from '../components/Map';
import { useState, useEffect } from 'react';
import axios from 'axios';
import getMarkersData from '../utils/getMarkersData';
import TicksPanel from '../components/TicksPanel';

import getAllData from '../utils/getAllData';

export default function Sightings() {
    const [pageLoading, setPageLoading] = useState(true)
    const [markersData, setMarkersData] = useState()
    const [tickPanelInfo, setTickPanelInfo] = useState()
    const [showTicksPanel, setShowTicksPanel] = useState(false)

    useEffect(() => {
        getAllData()
            .then(function (data) {
                setMarkersData(getMarkersData(data))
            })
            .then(function () {
                setPageLoading(false)
            })
            .catch(function (err) {
                console.log(err)
            })
    }, [])

    if (pageLoading) {
        return (
            <CircularProgress />
        )
    } else return (
        <>
            <Map markerInfo={markersData} setTickPanelInfo={setTickPanelInfo}/>
            <TicksPanel tickPanelInfo={tickPanelInfo}/>
        </>
    );
}