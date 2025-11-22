import { Marker, Popup } from "react-leaflet"
import createIcon from '../utils/icons';
import { useRef } from "react";
import { Typography } from "@mui/material";
import getCitySightings from "../utils/getCitySightings";
import formatDate from "../utils/formatDate";

export default function MapMarker({markersData, setTicksPanelCity}) {
    let colour
    let severityLevel

    if (markersData.recentSightings >= 7) {
        colour = 'red'
        severityLevel = 'High'
    } else if (markersData.recentSightings <= 3) {
        colour = 'green'
        severityLevel = 'Low'
    } else {
        colour = 'gold'
        severityLevel = 'Medium'
    }

    const markerRef = useRef(null)

    return (
        <Marker
            position={[markersData.lat, markersData.long]}
            icon={createIcon(colour)}
            ref={markerRef}
            eventHandlers={{
                    mouseover: () => {
                        markerRef.current.openPopup()
                    },
                    mouseout: () => {
                        markerRef.current.closePopup()
                    },
                    click: () => {
                        setTicksPanelCity(markersData.name)
                    }
            }}
        >
            <Popup>
                <Typography variant="h1" color="secondary" sx={{ fontSize: '1.5rem' }}>{markersData.name}</Typography>
                <Typography variant="body1" color="secondary">Severity: {severityLevel}</Typography>
                <Typography variant="body1" color="secondary">Recent sightings: {markersData.recentSightings}</Typography>
                <Typography variant="body1" color="secondary">Total sightings: {markersData.sightings}</Typography>
                <Typography variant="body1" color="secondary">Most recent sighting: {formatDate(markersData.mostRecentSighting)}</Typography>
                <Typography variant="body1" color="secondary">Recent species seen: {[...markersData.recentSpeciesSeen].join(", ")}</Typography>
            </Popup>
        </Marker>
    )
}