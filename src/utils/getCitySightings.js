import axios from 'axios';
import { supabase } from '../supabase';

export default async function getCitySightings(city) {
    const apiResponse = await axios.get(`https://dev-task.elancoapps.com/data/tick-sightings/city/${city}`);
    const apiSightings = apiResponse.data;

    const { data: supabaseSightings, error } = await supabase
        .from("tick_sightings")
        .select("*")
        .ilike("city", city);

    if (error) throw error;

    return [...apiSightings, ...(supabaseSightings || [])];
}