export default function filterSightings(sightings, filterValue) {
    if (filterValue !== "All species") {
        const filteredSightings = [];
    
        for (let i=0; i<sightings.length; i++) {
            const sighting = sightings[i]
    
            if (sighting.species === filterValue) filteredSightings.push(sighting)
        }
    
        return filteredSightings
    }

    return sightings
}