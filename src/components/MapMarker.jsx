import { Marker, Popup } from "react-leaflet"
import createIcon from '../utils/icons';

export default function MapMarker({markerInfo}) {
    let colour;

    if (markerInfo.recentSightings > 7) {
        colour = 'red';
    } else if (markerInfo.recentSightings <= 2) {
        colour = 'green';
    } else {
        colour = 'gold';
    }

    return (
        <Marker position={[54.5, -3.5]} icon={createIcon(colour)}>
            <Popup>
                <h1>Hello</h1>
                <p>This is the popup</p>
            </Popup>
        </Marker>
    )
}