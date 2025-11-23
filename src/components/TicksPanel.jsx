import { Backdrop, Box, Typography, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import getAllSightings from '../utils/getAllSightings';
import getCitySightings from '../utils/getCitySightings';

export default function TicksPanel({ ticksPanelCity }) {
    const [ticksPanelLoading, setTicksPanelLoading] = useState(true);
    const [sightingsData, setSightingsData] = useState();

    useEffect(() => {
        if (!ticksPanelCity) {
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
        <Backdrop open sx={{ color: 'primary.main', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    borderRadius: 2,
                    p: 4,
                    minWidth: 350,
                    maxWidth: 500,
                    width: '90%',
                    maxHeight: '80vh',
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {ticksPanelLoading ? (
                    <CircularProgress />
                ) : (
                    <>
                        <Typography variant="h1" color='secondary.main' sx={{ fontSize: '1.8em', mb: 2 }}>Tick Sightings</Typography>
                        <Typography variant="h2" color='secondary.main' sx={{ fontSize: '1.3em', mb: 3 }}>
                            {ticksPanelCity ? `Sightings in ${ticksPanelCity}` : 'All cities'}
                        </Typography>
                    </>
                )}
            </Box>
        </Backdrop>
    );
}