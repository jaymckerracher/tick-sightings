import axios from "axios";
import { supabase } from "../supabase";

export default async function getAllSightings() {
    const apiResponse = await axios.get('https://dev-task.elancoapps.com/data/tick-sightings')
    const apiSightings = apiResponse.data;

    const { data: supabaseSightings, error } = await supabase
        .from("tick_sightings")
        .select("*");

    if (error) throw error;

    return [...apiSightings, ...(supabaseSightings || [])];
}