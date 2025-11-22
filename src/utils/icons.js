import L from 'leaflet'
import green from '../assets/marker-icon-green.png'
import gold from '../assets/marker-icon-gold.png'
import red from '../assets/marker-icon-red.png'
import shadow from '../assets/marker-shadow.png'

export default function createIcon(colour) {
    let iconUrl;
    
    switch (colour) {
        case 'green':
            iconUrl = green;
            break;
        case 'gold':
            iconUrl = gold;
            break;
        case 'red':
            iconUrl = red;
            break;
        default:
            iconUrl = green;
    }

    const icon = L.icon({
        iconUrl: iconUrl,
        shadowUrl: shadow,
        iconSize:     [20, 33], // slightly smaller marker size
        shadowSize:   [33, 33], // proportionally smaller shadow
        iconAnchor:   [10, 33], // adjusted for new icon size
        shadowAnchor: [11, 33],
        popupAnchor:  [1, -28]
    });

    return icon;
}