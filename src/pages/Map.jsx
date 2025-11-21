import Button from '@mui/material/Button';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

export default function Map() {
    return (
        <>
            <Button variant="contained">Hello world</Button>
            <div className="map-wrapper">
                <MapContainer className="leaflet-map" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </>
    );
}