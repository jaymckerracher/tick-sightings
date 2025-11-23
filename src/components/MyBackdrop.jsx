import { Backdrop, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function MyBackdrop({ children, state, stateSetter }) {
    return (
        <Backdrop
            open={state}
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
                        stateSetter(false)
                    }}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
                
                {children}
            </Box>
        </Backdrop>
    )
}