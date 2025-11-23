import { Box, Typography, Divider, FormControl, InputLabel, Select, MenuItem, Button, List, ListItem, ListItemButton, ListItemText, Slider } from '@mui/material';
import { useState } from 'react';

export default function SideBar({ setMarkersFilter }) {
	const [filterSeverity, setFilterSeverity] = useState("All")
    const [filterMinSightings, setFilterMinSightings] = useState(0)

	return (
		<Box
			sx={{
                position: 'fixed',
                right: 24,
                top: 32,
				width: 320,
				bgcolor: 'primary.main',
				boxShadow: 4,
				borderRadius: 3,
				p: 3,
				display: 'flex',
				flexDirection: 'column',
				gap: 3,
				maxHeight: '90vh',
				minHeight: 500,
				justifyContent: 'space-between',
			}}
		>
			<Box>
				<Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
					Filters
				</Typography>

				<Divider sx={{ mb: 2, width: '100%' }} />

				<FormControl fullWidth sx={{ mb: 2 }}>
					<InputLabel
						id="severity-label"
						sx={{
							color: 'secondary.main',
							'&.Mui-focused': {
								color: 'secondary.main',
							},
						}}
					>
						Severity
					</InputLabel>

                    <Select
                        labelId="severity-label"
                        id="severity-select"
                        label="Severity"
                        value={filterSeverity}
                        onChange={e => setFilterSeverity(e.target.value)}
                    >
                        <MenuItem value="All">All</MenuItem>
						<MenuItem value="High">High</MenuItem>
						<MenuItem value="Medium">Medium</MenuItem>
						<MenuItem value="Low">Low</MenuItem>
					</Select>
				</FormControl>
                
				<Box sx={{ mt: 3 }}>
					<Typography id="num-sightings-slider-label" sx={{ color: 'secondary.main', fontWeight: 500, mb: 1 }} gutterBottom>
						Min. Number of Sightings
					</Typography>

					<Slider
						aria-labelledby="num-sightings-slider-label"
						defaultValue={1}
						min={1}
						max={100}
						step={1}
						valueLabelDisplay="auto"
						sx={{ color: 'customBlue.main' }}
                        onChange={(e) => {
                            setFilterMinSightings(e.target.value)
                        }}
					/>
				</Box>

				<Button
					variant="contained"
					color="customBlue"
					sx={{ mt: 3, fontWeight: 600, fontSize: '1em', borderRadius: 2 }}
					fullWidth
                    onClick={() => {
                        setMarkersFilter({
                            severity: filterSeverity,
                            minNumSightings: filterMinSightings
                        })
                    }}
				>
					Update Map
				</Button>

                <Button
					variant="text"
					sx={{ mt: 3, fontWeight: 600, fontSize: '1em', borderRadius: 2, color: 'customBlue.main' }}
					fullWidth
                    onClick={() => {
                        setMarkersFilter({
                            severity: 'All',
                            minNumSightings: 0
                        })
                    }}
				>
					Reset Filters
				</Button>
			</Box>

			<Box>
				<Typography variant="h6" sx={{ fontWeight: 600, mt: 2, mb: 0.5 }}>
					Learn
				</Typography>
				<Divider sx={{ mb: 1.5, width: '100%' }} />
				<List dense disablePadding>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemText primary="Species Guide" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemText primary="Prevention Tips" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemText primary="Seasonal Activity" />
						</ListItemButton>
					</ListItem>
				</List>
			</Box>

			<Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mt: 2, mb: 0.5 }}>
					Report a Sighting
				</Typography>

				<Divider sx={{ mb: 1.5, width: '100%' }} />

                <Typography variant="body1">
					Have you recently seen a tick? Click below to submit a sighting so that others can be aware.
				</Typography>

                <Button
                    variant="contained"
                    color="customBlue"
                    sx={{ mt: 2, fontWeight: 600, fontSize: '1.1em', borderRadius: 2 }}
                    fullWidth
                >
                    Report a Sighting
                </Button>
            </Box>
		</Box>
	);
}