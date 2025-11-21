import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import createIcon from '../utils/icons';

export default function Map() {
    const ukBounds = [
        [48.5, -13],
        [62, 4]
    ];

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
                <Marker position={[54.5, -3.5]} icon={createIcon('green')}>
                    <Popup>
                        <h1>Hello</h1>
                        <p>This is the popup</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}