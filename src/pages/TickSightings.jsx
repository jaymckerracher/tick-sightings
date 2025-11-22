import { useState } from 'react';

import Map from '../components/Map';
import TicksPanel from '../components/TicksPanel';

export default function Sightings() {
    return (
        <>
            <Map/>
            <TicksPanel/>
        </>
    );
}