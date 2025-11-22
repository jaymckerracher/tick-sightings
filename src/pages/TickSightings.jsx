import { useState } from 'react';

import Map from '../components/Map';
import TicksPanel from '../components/TicksPanel';

export default function Sightings() {
    const [tickPanelInfo, setTickPanelInfo] = useState()

    return (
        <>
            <Map setTickPanelInfo={setTickPanelInfo}/>
            <TicksPanel tickPanelInfo={tickPanelInfo}/>
        </>
    );
}