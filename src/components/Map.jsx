import { MapContainer, TileLayer } from 'react-leaflet'
import { useEffect, useState } from 'react';

import { CircularProgress } from '@mui/material';
import MapMarker from './MapMarker';

import getAllSightings from '../utils/getAllSightings';
import getMarkersData from '../utils/getMarkersData';

export default function Map({ setTicksPanelCity, setTicksPanelOpen }) {
    const ukBounds = [
        [48.5, -13],
        [62, 4]
    ];

    const [markersData, setMarkersData] = useState()
    const [mapLoading, setMapLoading] = useState(true)

    useEffect(() => {
        getAllSightings()
            .then(function (data) {
                setMarkersData(getMarkersData(data))
            })
            .then(() => {
                setMapLoading(false)
            })
            .catch(function (err) {
                console.log(err)
            })
    }, [])

    if (mapLoading) {
        return (
            <CircularProgress />
        )
    } else {
        return (
            <div className="map-wrapper">
                <MapContainer
                    className="leaflet-map"
                    center={[54.5, -3.5]}
                    zoom={6}
                    scrollWheelZoom={true}
                    minZoom={6}
                    maxBounds={ukBounds}
                >
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
                    />
    
                    {Object.values(markersData).map(data => (
                        <MapMarker
                            key={data.name}
                            markersData={data}
                            setTicksPanelCity={setTicksPanelCity}
                            setTicksPanelOpen={setTicksPanelOpen}
                        />
                    ))}
                </MapContainer>
            </div>
        );
    }

}