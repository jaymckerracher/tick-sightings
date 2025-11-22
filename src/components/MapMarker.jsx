import { Marker, Popup } from "react-leaflet"
import createIcon from '../utils/icons';
import { useRef } from "react";
import { Typography } from "@mui/material";
import getTickPanelInfo from "../utils/getTickPanelInfo";

export default function MapMarker({markerInfo, setTickPanelInfo}) {
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
                        getTickPanelInfo(markerInfo.name, setTickPanelInfo)
                    }
            }}
        >
            <Popup>
                <Typography variant="h1" color="secondary" sx={{ fontSize: '1.5rem' }}>{markerInfo.name}</Typography>
                <Typography variant="body1" color="secondary">Severity: {severityLevel}</Typography>
                <Typography variant="body1" color="secondary">Recent sightings: {markerInfo.recentSightings}</Typography>
                <Typography variant="body1" color="secondary">Total sightings: {markerInfo.sightings}</Typography>
                <Typography variant="body1" color="secondary">Most recent sighting:{markerInfo.mostRecentSighting}</Typography>
                <Typography variant="body1" color="secondary">Recent species seen: {[...markerInfo.recentSpeciesSeen].join(", ")}</Typography>
            </Popup>
        </Marker>
    )
}