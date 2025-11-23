import cities from '../cities.json'

export default function getUkCities() {
    const ukCities = []

    for (let i=0; i<cities.length; i++) {
        ukCities.push(cities[i].city)
    }

    return ukCities
}