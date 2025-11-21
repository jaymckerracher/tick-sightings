import { Marker, Popup } from "react-leaflet"
import createIcon from '../utils/icons';
import { useEffect } from "react";

export default function MapMarker({markerInfo}) {
    let colour;

    if (markerInfo.recentSightings > 7) {
        colour = 'red';
    } else if (markerInfo.recentSightings <= 2) {
        colour = 'green';
    } else {
        colour = 'gold';
    }

    useEffect(() => {
        console.log(markerInfo, 'this is the marker info!')
    }, [])

    return (
        <Marker position={[markerInfo.lat, markerInfo.long]} icon={createIcon(colour)}>
            <Popup>
                <h1>Hello</h1>
                <p>This is the popup</p>
            </Popup>
        </Marker>
    )
}