import { Card, CardMedia, Typography, Box, IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import southernRodent from '../assets/southern-rodent.jpeg'
import treeHole from '../assets/tree-hole.jpg'
import marsh from '../assets/marsh.jpg'
import passerine from '../assets/passerine.jpg'
import foxBadger from '../assets/fox-badger.jpg'
import formatDate from "../utils/formatDate"

export default function SightingCard({
    sighting,
    setTicksPanelOpen,
    setSpeciesGuideOpen
}) {
    let image;
    switch (sighting.species) {
        case 'Southern rodent tick':
            image = southernRodent;
            break;
        case 'Tree-hole tick':
            image = treeHole;
            break;
        case 'Marsh tick':
            image = marsh;
            break;
        case 'Passerine tick':
            image = passerine;
            break;
        case 'Fox/badger tick':
            image = foxBadger;
            break;
        default:
            image = southernRodent;
    }

    if (sighting.imageURL) {
        image = sighting.imageURL
    }

    return (
        <Card variant="outlined" sx={{ display: 'flex', width: '100%', minHeight: '20%', boxShadow: 3, borderRadius: 2, my: 2 }}>
            <CardMedia
                component="img"
                sx={{ width: 120, objectFit: 'cover', borderRadius: '8px 0 0 8px' }}
                image={image}
                alt={sighting.species}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, p: 2, position: 'relative' }}>
                <Box sx={{ position: 'absolute', top: 16, right: 16, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                        {formatDate(sighting.date)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                        {sighting.location}
                    </Typography>
                </Box>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', height: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                        <Typography variant="h6" color="secondary.main" sx={{ fontWeight: 600, mr: 1 }}>
                            {sighting.species}
                        </Typography>
                        <IconButton
                            size="small"
                            aria-label="search"
                            sx={{ p: 0.5 }}
                            onClick={() => {
                                setTicksPanelOpen(false)
                                setSpeciesGuideOpen(true)
                            }}
                        >
                            <SearchIcon fontSize="small" />
                        </IconButton>
                    </Box>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ fontStyle: 'italic', mb: 1 }}>
                        {sighting.latinName}
                    </Typography>
                </Box>
            </Box>
        </Card>
    );
}