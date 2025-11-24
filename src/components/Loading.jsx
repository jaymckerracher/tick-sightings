import { Backdrop, CircularProgress } from '@mui/material';

export default function Loading({ open = false }) {
    return (
        <Backdrop
            sx={{ zIndex: 100 }}
            open={open}
        >
            <CircularProgress color="primary" />
        </Backdrop>
    );
}