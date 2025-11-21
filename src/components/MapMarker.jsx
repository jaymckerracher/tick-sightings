import { Marker, Popup, Tooltip } from "react-leaflet"
import createIcon from '../utils/icons';
import { useEffect, useRef } from "react";
import { marker } from "leaflet";

export default function MapMarker({markerInfo}) {
    let colour
    let severityLevel

    if (markerInfo.recentSightings >= 6) {
        colour = 'red'
        severityLevel = 'High'
    } else if (markerInfo.recentSightings <= 2) {
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
                <h1 className="popup-heading">{markerInfo.name}</h1>
                <p className="popup-info">Severity: <strong>{severityLevel}</strong></p>
                <p className="popup-info">Recent sightings: <strong>{markerInfo.recentSightings}</strong></p>
                <p className="popup-info">Total sightings: <strong>{markerInfo.sightings}</strong></p>
                <p className="popup-info">Most recent sighting: <strong>{markerInfo.mostRecentSighting}</strong></p>
                <p className="popup-info">Recent species seen: <strong>{[...markerInfo.recentSpeciesSeen].join(", ")}</strong></p>
            </Popup>
        </Marker>
    )
}