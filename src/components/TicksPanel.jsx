import { Backdrop, Box, Typography, CircularProgress, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import getAllSightings from '../utils/getAllSightings';
import getCitySightings from '../utils/getCitySightings';

export default function TicksPanel({ ticksPanelCity, ticksPanelOpen, setTicksPanelOpen }) {
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
        <Backdrop
            open={ticksPanelOpen}
            sx={{ color: 'primary.main', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    borderRadius: 2,
                    p: 4,
                    width: '40vw',
                    height: '80vh',
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                }}
            >
                <IconButton
                    size="small"
                    sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        zIndex: 2,
                    }}
                    aria-label="close"
                    onClick={() => {
                        setTicksPanelOpen(false)
                    }}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
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
            </Box>
        </Backdrop>
    );
}