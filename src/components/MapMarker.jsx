import { Marker, Popup, Tooltip } from "react-leaflet"
import createIcon from '../utils/icons';
import { useEffect, useRef } from "react";
import { marker } from "leaflet";
import { Typography } from "@mui/material";

export default function MapMarker({markerInfo}) {
    let colour
    let severityLevel

    if (markerInfo.recentSightings >= 7) {
        colour = 'red'
        severityLevel = 'High'
    } else if (markerInfo.recentSightings <= 3) {
        colour = 'green'
        severityLevel = 'Low'
    } else {
        colour = 'gold'
        severityLevel = 'Medium'
    }

    const markerRef = useRef(null)

    return (
        <Marker
            position={[markerInfo.lat, markerInfo.long]}
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
                        console.log("This is a click")
                    }
            }}
        >
            <Popup>
                <Typography variant="h1" color="secondary" sx={{ fontSize: '1.5rem' }}>{markerInfo.name}</Typography>
                <Typography variant="body1" color="secondary">Severity: <Typography component="body1" sx={{ fontWeight: 'bold' }}>{severityLevel}</Typography></Typography>
                <Typography variant="body1" color="secondary">Recent sightings: <Typography component="body1" sx={{ fontWeight: 'bold' }}>{markerInfo.recentSightings}</Typography></Typography>
                <Typography variant="body1" color="secondary">Total sightings: <Typography component="body1" sx={{ fontWeight: 'bold' }}>{markerInfo.sightings}</Typography></Typography>
                <Typography variant="body1" color="secondary">Most recent sighting: <Typography component="body1" sx={{ fontWeight: 'bold' }}>{markerInfo.mostRecentSighting}</Typography></Typography>
                <Typography variant="body1" color="secondary">Recent species seen: <Typography component="body1" sx={{ fontWeight: 'bold' }}>{[...markerInfo.recentSpeciesSeen].join(", ")}</Typography></Typography>
            </Popup>
        </Marker>
    )
}