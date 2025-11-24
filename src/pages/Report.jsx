import { Box, Typography, FormControl, InputLabel, Select, MenuItem, Button, Snackbar, Alert } from '@mui/material';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import getUkCities from '../utils/getUkCities';
import submitSighting from '../submitSighting';
import Loading from '../components/Loading';

export default function Report() {
    const [location, setLocation] = useState('Portsmouth');
    const [species, setSpecies] = useState('Southern rodent tick');
    const [imgFile, setImgFile] = useState(null)
    const [submissionLoading, setSubmissionLoading] = useState(false)
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const navigate = useNavigate();

    if (submissionLoading) {
        return (
            <Loading open={submissionLoading}/>
        )
    } else {
        return (
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'primary.main'
                }}
            >
                <IconButton
                    onClick={() => navigate(-1)}
                    sx={{ position: 'fixed', top: 30, left: 30, zIndex: 90, p: 1.5 }}
                    aria-label="back"
                >
                    <ArrowBackIcon sx={{ fontSize: 40 }} />
                </IconButton>
                <Box sx={{ width: 400, p: 3, bgcolor: 'background.default', borderRadius: 2, boxShadow: 3 }}>
                    <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, textAlign: 'center', color: 'secondary.main' }}>
                        Report Tick Sighting
                    </Typography>
    
                    <form>
                        <FormControl fullWidth sx={{ mb: 3 }}>
                            <InputLabel
                                id="location-label"
                                color='secondary.main'
                            >
                                Location
                            </InputLabel>
    
                            <Select
                                labelId="location-label"
                                id="location-select"
                                value={location}
                                label="Location"
                                onChange={e => setLocation(e.target.value)}
                            >
                                {getUkCities().map(city => (
                                    <MenuItem key={city} value={city}>{city}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
    
                        <FormControl fullWidth sx={{ mb: 4 }}>
                            <InputLabel
                                id="species-label"
                                color='secondary.main'
                            >
                                Species
                            </InputLabel>
    
                            <Select
                                labelId="report-species-label"
                                id="report-species-select"
                                label="Species"
                                value={species}
                                onChange={e => setSpecies(e.target.value)}
                            >
                                <MenuItem value="Southern rodent tick" >Southern rodent tick</MenuItem>
                                <MenuItem value="Tree-hole tick" >Tree-hole tick</MenuItem>
                                <MenuItem value="Marsh tick" >Marsh tick</MenuItem>
                                <MenuItem value="Passerine tick" >Passerine tick</MenuItem>
                                <MenuItem value="Fox/badger tick" >Fox/badger tick</MenuItem>
                            </Select>
                        </FormControl>
    
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 5, width: "100%" }}>
                            <Button
                                variant='contained'
                                component='label'
                            >
                                Upload Image
                                <input
                                    type='file'
                                    hidden
                                    onChange={(e) => {
                                        setImgFile(e.target.files[0] || null)
                                    }}
                                />
                            </Button>
                        </Box>
    
                        <Button
                            variant="contained"
                            color="customBlue"
                            fullWidth
                            sx={{ fontWeight: 600, fontSize: '1.1em', borderRadius: 2 }}
                            onClick={async () => {
                                setSubmissionLoading(true);
                                await submitSighting({location: location, species: species, file: imgFile});
                                setSubmissionLoading(false);
                                setSnackbarOpen(true);
                            }}
                        >
                            Submit
                        </Button>

                        <Snackbar
                            open={snackbarOpen}
                            autoHideDuration={3000}
                            onClose={() => setSnackbarOpen(false)}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        >
                            <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
                                Report submitted successfully!
                            </Alert>
                        </Snackbar>
                    </form>
                </Box>
            </Box>
        );
    }
}