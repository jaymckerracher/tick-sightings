import { Box, Typography, Divider, FormControl, InputLabel, Select, MenuItem, Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

export default function SideBar() {
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
				<Divider sx={{ mb: 2, width: '92%' }} />
				<FormControl fullWidth sx={{ mb: 2 }}>
					<InputLabel id="severity-label">Severity</InputLabel>
					<Select
						labelId="severity-label"
						id="severity-select"
						label="Severity"
						value=""
					>
						{/* No options yet */}
					</Select>
				</FormControl>
				<FormControl fullWidth>
					<InputLabel id="num-sightings-label">Number of Sightings</InputLabel>
					<Select
						labelId="num-sightings-label"
						id="num-sightings-select"
						label="Number of Sightings"
						value=""
					>
						{/* No options yet */}
					</Select>
				</FormControl>
			</Box>

			<Box>
				<Typography variant="h6" sx={{ fontWeight: 600, mt: 2, mb: 0.5 }}>
					Learn
				</Typography>
				<Divider sx={{ mb: 1.5, width: '92%' }} />
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

			<Button
				variant="contained"
				color="customBlue"
				sx={{ mt: 2, fontWeight: 600, fontSize: '1.1em', borderRadius: 2 }}
				fullWidth
			>
				Report a Sighting
			</Button>
		</Box>
	);
}