export default function sortSightings(sightings, sortByValue) {
    const arr = [...sightings]
    return sortByValue === "Ascending" ?
        arr.sort((a, b) => new Date(a.date) - new Date(b.date)) :
        arr.sort((a, b) => new Date(b.date) - new Date(a.date))
}