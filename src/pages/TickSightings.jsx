import { useState } from 'react';

import Map from '../components/Map';
import TicksPanel from '../components/TicksPanel';

export default function Sightings() {
    const [ticksPanelCity, setTicksPanelCity] = useState(null)

    return (
        <>
            <Map setTicksPanelCity={setTicksPanelCity}/>
            <TicksPanel ticksPanelCity={ticksPanelCity}/>
        </>
    );
}