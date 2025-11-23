import { useState } from 'react';

import Map from '../components/Map';
import TicksPanel from '../components/TicksPanel';

export default function Sightings() {
    const [ticksPanelCity, setTicksPanelCity] = useState(null)
    const [ticksPanelOpen, setTicksPanelOpen] = useState(false)

    return (
        <>
            <Map
                setTicksPanelCity={setTicksPanelCity}
                setTicksPanelOpen={setTicksPanelOpen}
            />
            <TicksPanel
                ticksPanelCity={ticksPanelCity}
                ticksPanelOpen={ticksPanelOpen}
                setTicksPanelOpen={setTicksPanelOpen}
            />
        </>
    );
}