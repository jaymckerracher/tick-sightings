import { supabase } from "./supabase";

export default async function submitSighting({ city, species, file}) {
    let publicUrl = null

    if (file) {
        const fileName = `${crypto.randomUUID()}.jpg`;
    
        const { data: storageData, error: storageError } = await supabase
            .storage
            .from("ticks")
            .upload(fileName, file, { contentType: 'image/jpeg' });
    
        if (storageError) throw storageError
    
        publicUrl = supabase.storage.from("ticks").getPublicUrl(fileName).data.publicUrl;
    }

    let latinName;
    switch(species) {
        case 'Southern rodent tick':
            latinName = 'Ixodes acuminatus'
            break;
        case 'Passerine tick':
            latinName = 'Dermacentor frontalis'
            break;
        case 'Fox/badger tick':
            latinName = 'Ixodes canisuga'
            break;
        case 'Tree-hole tick':
            latinName = 'Ixodes arboricola'
            break;
        case 'Marsh tick':
            latinName = 'Ixodes apronophorus'
            break;
        default:
            latinName = 'No Species Available';
    }

    const { data, error } = await supabase
        .from("tick_sightings")
        .insert([{
            imageUrl: publicUrl,
            city: city,
            species: species,
            latinName: latinName
        }])
    
    if (error) throw error

    return data
}