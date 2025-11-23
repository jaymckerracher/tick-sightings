import { Backdrop, Box, Typography, CircularProgress, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import getAllSightings from '../utils/getAllSightings';
import getCitySightings from '../utils/getCitySightings';
import MyBackdrop from './MyBackdrop';

export default function TicksPanel({ ticksPanelCity, ticksPanelOpen, setTicksPanelOpen }) {
    // ticks panel data
    const [ticksPanelLoading, setTicksPanelLoading] = useState(true);
    const [sightingsData, setSightingsData] = useState();

    useEffect(() => {
        if (ticksPanelCity = 'All Cities') {
            setTicksPanelLoading(true);
            getAllSightings()
                .then((data) => {
                    setSightingsData(data);
                })
                .then(() => {
                    setTicksPanelLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [ticksPanelCity]);

    return (
        <MyBackdrop state={ticksPanelOpen} stateSetter={setTicksPanelOpen}>
            <Typography variant="h1" color='secondary.main' sx={{ fontSize: '1.8em', mb: 2 }}>Tick Sightings</Typography>
            
            {ticksPanelLoading ? (
                <CircularProgress />
            ) : (
                <>
                    <Typography variant="h2" color='secondary.main' sx={{ fontSize: '1.3em', mb: 3 }}>
                        {ticksPanelCity ? `Sightings in ${ticksPanelCity}` : 'All cities'}
                    </Typography>
                </>
            )}
        </MyBackdrop>
    );
}