import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Map() {
    const ukBounds = [
        [49.5, -11], // Southwest
        [61, 2]      // Northeast
    ];

    return (
        <div className="map-wrapper">
            <MapContainer
                className="leaflet-map"
                center={[54.5, -3.5]} // Centered on the UK
                zoom={6}
                scrollWheelZoom={true}
                minZoom={5}
                maxBounds={ukBounds}
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
                />
                <Marker position={[54.5, -3.5]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}