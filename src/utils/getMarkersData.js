import cities from '../cities.json';

export default function getMarkersData(sightings) {
    const markersData = {}

    for (const sighting of sightings) {
        const now = new Date()
        const sightingDate = new Date(sighting.date)
        const twoYearsAgo =  2 * 365 * 24 * 60 * 60 * 1000; // two years for the sake of demo
        const isSightingRecent = now - sightingDate <= twoYearsAgo

        if (sighting.location in markersData) {
            markersData[sighting.location].sightings ++
            markersData[sighting.location].speciesSeen.add(sighting.species)

            if (isSightingRecent) {
                markersData[sighting.location].recentSightings ++
                markersData[sighting.location].recentSpeciesSeen.add(sighting.species)
            }

            const currentMostRecent = new Date(markersData[sighting.location].mostRecentSighting)
            if (sightingDate > currentMostRecent) markersData[sighting.location].mostRecentSighting = sighting.date
        } else {
            const speciesSet = new Set()
            speciesSet.add(sighting.species)

            const recentSpeciesSet = new Set()
            if (isSightingRecent) recentSpeciesSet.add(sighting.species)

            // Find city in gb.json to get coordinates
            const cityData = cities.find(city => city.city.toLowerCase() === sighting.location.toLowerCase());
            let lat = null;
            let long = null;
            if (cityData) {
                lat = parseFloat(cityData.lat);
                long = parseFloat(cityData.lng);
            } else {
                console.log(sighting.location)
            }

            markersData[sighting.location] = {
                name: sighting.location,
                lat: lat,
                long: long,
                sightings: 1,
                recentSightings: isSightingRecent ? 1 : 0,
                speciesSeen: speciesSet,
                recentSpeciesSeen: recentSpeciesSet,
                mostRecentSighting: sighting.date
            };
        }
    }

    return markersData
}

// const exampleObj = {
//     "date": "2023-01-30T12:03:56",
//     "id": "zrUxZiyxhJqo0EzS2k6M",
//     "latinName": "Ixodes canisuga",
//     "location": "Leicester",
//     "species": "Fox/badger tick"
// }