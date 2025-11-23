export default function getCitiesFromMarkersData(markersData) {
    if (markersData) return Object.keys(markersData)
    return []
}