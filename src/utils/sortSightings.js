export default function sortSightings(sightings, sortByValue) {
    return sortByValue === "Ascending" ?
        sightings.sort((a, b) => new Date(a.date) - new Date(b.date)) :
        sightings.sort((a, b) => new Date(b.date) - new Date(a.date))
}