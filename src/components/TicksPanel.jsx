import { Backdrop, Box, Typography, CircularProgress, IconButton, Link } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useEffect, useState } from 'react';
import getAllSightings from '../utils/getAllSightings';
import getCitySightings from '../utils/getCitySightings';
import MyBackdrop from './MyBackdrop';
import SightingCard from './SightingCard';

export default function TicksPanel({
    ticksPanelCity,
    ticksPanelOpen,
    setTicksPanelOpen,
    setSpeciesGuideOpen
}) {
    // ticks panel data
    const [ticksPanelLoading, setTicksPanelLoading] = useState(true);
    const [sightingsData, setSightingsData] = useState();

    useEffect(() => {
        setTicksPanelLoading(true);

        if (ticksPanelCity === 'All Cities') {
            getAllSightings()
                .then((data) => {
                    setSightingsData(data)
                })
                .then(() => {
                    setTicksPanelLoading(false);
                })
        } else {
            getCitySightings(ticksPanelCity)
                .then((data) => {
                    setSightingsData(data)
                })
                .then(() => {
                    setTicksPanelLoading(false);
                })
        }
    }, [ticksPanelCity]);

    return (
        <MyBackdrop state={ticksPanelOpen} stateSetter={setTicksPanelOpen}>
            <Typography variant="h1" color='secondary.main' sx={{ fontSize: '1.8em', mb: 2 }}>Tick Sightings</Typography>
            
            {ticksPanelLoading ? (
                <CircularProgress />
            ) : (
                <>
                    <Typography variant="h2" color='secondary.main' sx={{ fontSize: '1.3em', mb: 1 }}>
                        {ticksPanelCity ? `Sightings in ${ticksPanelCity}` : 'All cities'}
                    </Typography>

                    <Link
                        href="https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Manchester"
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="always"
                        sx={{ display: 'flex', alignItems: 'center', fontSize: '1.3em', fontWeight: 500, color: 'text.secondary' }}
                    >
                        Get Directions
                        <OpenInNewIcon sx={{ fontSize: '1.1em', ml: 0.5 }} />
                    </Link>

                    {sightingsData.map(sighting => (
                        <SightingCard
                            key={sighting.id}
                            sighting={sighting}
                            setTicksPanelOpen={setTicksPanelOpen}
                            setSpeciesGuideOpen={setSpeciesGuideOpen}
                        />
                    ))}
                </>
            )}
        </MyBackdrop>
    );
}

// https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Manchester