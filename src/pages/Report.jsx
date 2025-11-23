import { Box, Typography, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import { useState } from 'react';

export default function Report() {
    const [city, setCity] = useState('');
    const [species, setSpecies] = useState('');

    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 6, p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, textAlign: 'center', color: 'secondary.main' }}>
                Report Tick Sighting
            </Typography>
            <form>
                <FormControl fullWidth sx={{ mb: 3 }}>
                    <InputLabel id="city-label">City</InputLabel>
                    <Select
                        labelId="city-label"
                        id="city-select"
                        value={city}
                        label="City"
                        onChange={e => setCity(e.target.value)}
                    >
                        <MenuItem value="London">London</MenuItem>
                        <MenuItem value="Portsmouth">Portsmouth</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{ mb: 4 }}>
                    <InputLabel id="species-label">Species</InputLabel>
                    <Select
                        labelId="species-label"
                        id="species-select"
                        value={species}
                        label="Species"
                        onChange={e => setSpecies(e.target.value)}
                    >
                        <MenuItem value="Tick A">Tick A</MenuItem>
                        <MenuItem value="Tick B">Tick B</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" color="customBlue" fullWidth sx={{ fontWeight: 600, fontSize: '1.1em', borderRadius: 2 }}>
                    Submit
                </Button>
            </form>
        </Box>
    );
}