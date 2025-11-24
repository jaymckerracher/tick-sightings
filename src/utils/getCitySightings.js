import axios from 'axios';
import { supabase } from '../supabase';

export default async function getCitySightings(location) {
    const apiResponse = await axios.get(`https://dev-task.elancoapps.com/data/tick-sightings/city/${location}`);
    const apiSightings = apiResponse.data;

    const { data: supabaseSightings, error } = await supabase
        .from("tick_sightings")
        .select("*")
        .ilike("location", location);

    if (error) throw error;

    return [...apiSightings, ...(supabaseSightings || [])];
}