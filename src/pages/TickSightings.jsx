// import Button from '@mui/material/Button';
import { CircularProgress } from '@mui/material';
import Map from '../components/Map';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Sightings() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://dev-task.elancoapps.com/data/tick-sightings')
            .then(function (response) {
                console.log('we got data!', response.data)
            })
            .catch(function (err) {
                console.log(err)
            })
    }, [])

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