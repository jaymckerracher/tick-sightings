import { useState, useEffect } from 'react';
import getAllSightings from '../utils/getAllSightings';
import getMarkersData from '../utils/getMarkersData';

import Map from '../components/Map';
import TicksPanel from '../components/TicksPanel';
import SideBar from '../components/SideBar';
import SpeciesGuidePanel from '../components/SpeciesGuidePanel';
import PreventionTipsPanel from '../components/PreventionTIpsPanel';

export default function Sightings() {
    // ticks panel data
    const [ticksPanelCity, setTicksPanelCity] = useState('All Cities')
    const [ticksPanelOpen, setTicksPanelOpen] = useState(false)

    // side panel learning resources
    const [speciesGuideOpen, setSpeciesGuideOpen] = useState(false)
    const [preventionTipsOpen, setPreventionTipsOpen] = useState(false)

    // markers data
    const [markersData, setMarkersData] = useState()
    const [mapLoading, setMapLoading] = useState(true)
    const [markersFilter, setMarkersFilter] = useState({
        severity: 'All',
        minNumSightings: 0
    })

    useEffect(() => {
        setMapLoading(true);
        getAllSightings()
            .then(function (data) {
                setMarkersData(getMarkersData(data, markersFilter))
            })
            .then(() => {
                setMapLoading(false)
            })
            .catch(function (err) {
                console.log(err)
            })
    }, [markersFilter])

    return (
        <>
            <Map
                setTicksPanelCity={setTicksPanelCity}
                setTicksPanelOpen={setTicksPanelOpen}
                markersData={markersData}
                mapLoading={mapLoading}
            />
            <SideBar
                setMarkersFilter={setMarkersFilter}
                setSpeciesGuideOpen={setSpeciesGuideOpen}
                setPreventionTipsOpen={setPreventionTipsOpen}
            />
            <TicksPanel
                ticksPanelCity={ticksPanelCity}
                setTicksPanelCity={setTicksPanelCity}
                ticksPanelOpen={ticksPanelOpen}
                setTicksPanelOpen={setTicksPanelOpen}
                setSpeciesGuideOpen={setSpeciesGuideOpen}
                markersData={markersData}
            />
            <SpeciesGuidePanel
                speciesGuideOpen={speciesGuideOpen}
                setSpeciesGuideOpen={setSpeciesGuideOpen}
            />
            <PreventionTipsPanel
                preventionTipsOpen={preventionTipsOpen}
                setPreventionTipsOpen={setPreventionTipsOpen}
            />
        </>
    );
}