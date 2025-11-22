import { Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import getAllSightings from '../utils/getAllSightings';
import getCitySightings from '../utils/getCitySightings';
import { CircularProgress } from '@mui/material';

export default function TicksPanel({ticksPanelCity}) {
    const [ticksPanelLoading, setTicksPanelLoading] = useState(true)
    const [sightingsData, setSightingsData] = useState()

    useEffect(() => {
        if (!ticksPanelCity) {
            setTicksPanelLoading(true)
            getAllSightings()
                .then((data) => {
                    setSightingsData(data)
                })
                .then(() => {
                    setTicksPanelLoading(false)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [ticksPanelCity])

    if (ticksPanelLoading) {
        return (
            <Paper
                elevation={6}
                sx={{
                    zIndex: 1,
                    position: 'fixed',
                    left: '1%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    height: '70%',
                    width: '25%',
                    backgroundColor: 'primary.main',
                }}
            >
                <CircularProgress />
            </Paper>
        )
    }
    return (
        <Paper
            elevation={6}
            sx={{
                zIndex: 1,
                position: 'fixed',
                left: '1%',
                top: '50%',
                transform: 'translateY(-50%)',
                height: '70%',
                width: '25%',
                backgroundColor: 'primary.main',
            }}
        >
            <Typography variant='h1' sx={{ fontSize: "1.8em" }}>Tick Sightings</Typography>
            <Typography variant='h2' sx={{ fontSize: "1.3em" }}>{ticksPanelCity ? `Sightings in ${ticksPanelCity}` : 'All cities'}</Typography>

        </Paper>
    );
}