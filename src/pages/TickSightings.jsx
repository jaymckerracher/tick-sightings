// import Button from '@mui/material/Button';
import { CircularProgress } from '@mui/material';
import Map from '../components/Map';
import { useState } from 'react';

export default function Sightings() {
    const [loading, setLoading] = useState(true)

    

    if (loading) {
        return (
            <CircularProgress />
        )
    } else return (
        <>
            {/* <Button variant="contained">Hello world</Button> */}
            <Map />
        </>
    );
}