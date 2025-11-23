import { Typography, CircularProgress, Link, FormControl, InputLabel, Select, MenuItem, Box, Divider, Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useEffect, useState } from 'react';
import getAllSightings from '../utils/getAllSightings';
import getCitySightings from '../utils/getCitySightings';
import MyBackdrop from './MyBackdrop';
import SightingCard from './SightingCard';
import getCitiesFromMarkersData from '../utils/getCitiesFromMarkersData';

export default function TicksPanel({
    ticksPanelCity,
    setTicksPanelCity,
    ticksPanelOpen,
    setTicksPanelOpen,
    setSpeciesGuideOpen,
    markersData
}) {
    // ticks panel data
    const [ticksPanelLoading, setTicksPanelLoading] = useState(true);
    const [sightingsData, setSightingsData] = useState();
    const [cities, setCities] = useState(["All Cities"]);
    const [filterSpecies, setFilterSpecies] = useState("All species")
    const [sortBy, setSortBy] = useState("Date Descending")

    let directionsUrl;
    if (ticksPanelCity !== "All cities") {
        if (ticksPanelCity === "Newcastle") {
            directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${ticksPanelCity}+upon+Tyne`;
        } else {
            directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${ticksPanelCity}`;
        }
    }

    useEffect(() => {
        setTicksPanelLoading(true);

        if (ticksPanelCity === 'All Cities') {
            getAllSightings()
                .then((data) => {
                    setSightingsData(data)
                })
                .then(() => {
                    setCities(["All Cities", ...getCitiesFromMarkersData(markersData)])
                    setTicksPanelLoading(false);
                })
        } else {
            getCitySightings(ticksPanelCity)
                .then((data) => {
                    setSightingsData(data)
                })
                .then(() => {
                    setCities(["All Cities", ...getCitiesFromMarkersData(markersData)])
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
                    <Box sx={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "center", p: 1 }}>
                        <Typography variant="h2" color='secondary.main' sx={{ fontSize: '1.3em', mb: 1 }}>
                            Sightings in
                        </Typography>

                        <FormControl sx={{ width: "35%", m: 2 }}>
                            <InputLabel
                                id="city-label"
                                sx={{
                                    color: 'secondary.main',
                                    '&.Mui-focused': {
                                        color: 'secondary.main',
                                    },
                                }}
                            >
                                City
                            </InputLabel>

                            <Select
                                labelId="city-label"
                                id="city-select"
                                label="City"
                                value={ticksPanelCity}
                                onChange={e => setTicksPanelCity(e.target.value)}
                            >
                                {cities.map(city => (
                                    <MenuItem value={city}>{city}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        {ticksPanelCity === 'All Cities' ? <></> : <Link
                            href={directionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="always"
                            sx={{ display: 'flex', alignItems: 'center', fontSize: '1.3em', fontWeight: 500, color: 'text.secondary' }}
                        >
                            Get Directions
                            <OpenInNewIcon sx={{ fontSize: '1.1em', ml: 0.5 }} />
                        </Link>}
                    </Box>

                    <Divider sx={{ mb: 2, width: '100%' }} />

                    <Box sx={{ width: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                        <Box sx={{ width: "40%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                            <Typography variant='h6' sx={{ color: "secondary.main" }}>Filter species:</Typography>

                            <FormControl fullWidth sx={{ m: 2 }}>
                                <InputLabel
                                    id="sighting-filter-species-label"
                                    sx={{
                                        color: 'secondary.main',
                                        '&.Mui-focused': {
                                            color: 'secondary.main',
                                        },
                                    }}
                                >
                                    Species
                                </InputLabel>

                                <Select
                                    labelId="sighting-filter-species-label"
                                    id="sighting-filter-species-select"
                                    label="Species"
                                    value={filterSpecies}
                                    onChange={e => setFilterSpecies(e.target.value)}
                                >
                                    <MenuItem value="All species" >All species</MenuItem>
                                    <MenuItem value="Southern rodent tick" >Southern rodent tick</MenuItem>
                                    <MenuItem value="Tree-hole tick" >Tree-hole tick</MenuItem>
                                    <MenuItem value="Marsh tick" >Marsh tick</MenuItem>
                                    <MenuItem value="Passerine tick" >Passerine tick</MenuItem>
                                    <MenuItem value="Fox/badger tick" >Fox/badger tick</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        <Box sx={{ width: "40%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Typography variant='h6' sx={{ color: "secondary.main" }}>Sort by:</Typography>

                            <FormControl fullWidth sx={{ m: 2 }}>
                                <InputLabel
                                    id="sighting-filter-species-label"
                                    sx={{
                                        color: 'secondary.main',
                                        '&.Mui-focused': {
                                            color: 'secondary.main',
                                        },
                                    }}
                                >
                                    Species
                                </InputLabel>

                                <Select
                                    labelId="sighting-sort-label"
                                    id="sighting-sort-select"
                                    label="Sort By"
                                    value={sortBy}
                                    onChange={e => setSortBy(e.target.value)}
                                >
                                    <MenuItem value="Date Descending">Date Descending</MenuItem>
                                    <MenuItem value="Date Ascending">Date Ascending</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>

                    <Button
                        variant="contained"
                        color="customBlue"
                        sx={{ mb: 2, fontWeight: 600, fontSize: '1.1em', borderRadius: 2, width: "35%" }}
                        fullWidth
                        onClick={() => {
                            console.log("hello world")
                        }}
                    >
                        Update Sightings
                    </Button>

                    <Divider sx={{ mb: 2, width: '100%' }} />

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