import { Paper, Typography } from '@mui/material';

export default function TicksPanel({tickPanelInfo}) {
    if (tickPanelInfo) {
        console.log(tickPanelInfo)
        return (
            <Paper
                elevation={6}
                sx={{
                    zIndex: 1,
                    position: 'fixed',
                    left: '3%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    height: '70%',
                    width: '25%',
                    backgroundColor: 'primary.main',
                }}
            >
                <Typography variant='h1' sx={{ fontSize: "2em" }}>{tickPanelInfo[0].location}</Typography>
            </Paper>
        );
    } else {
        <h1>THERE IS NO DATA</h1>
    }

}