import { Typography, Box, Divider } from "@mui/material";
import MyBackdrop from "./MyBackdrop";

export default function SpeciesGuidePanel({ speciesGuideOpen, setSpeciesGuideOpen }) {
    return (
        <MyBackdrop
            state={speciesGuideOpen}
            stateSetter={setSpeciesGuideOpen}
        >
            <Typography variant="h4" sx={{ color: "secondary.main" }}>Species Guide</Typography>

            <Box sx={{ width: "100%" }}>

                {/* Southern rodent */}
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 6 }}>
                    <Typography variant="h5" sx={{ color: "secondary.main" }}>
                        Southern rodent tick
                    </Typography>

                    <Typography variant="subtitle2" fontSize={"1em"} color="text.secondary" sx={{ fontStyle: 'italic' }}>
                        Ixodes acuminatus
                    </Typography>
                </Box>

                <Divider sx={{ mb: 2, width: '100%' }} />

                <Typography variant="body1" color="secondary.main" sx={{ mb: 2 }}>
                    The Southern Rodent Tick (Ixodes acuminatus) is a small, hard-bodied tick commonly associated with rodents in warm and temperate regions of Europe, North Africa, and parts of the Middle East. It primarily parasitizes small mammals such as mice, voles, shrews, and gerbils, which serve as its main hosts across all life stages. This species prefers dry, rocky, or lightly vegetated environments where rodent activity is high, and it typically remains close to burrows, nests, and ground-level shelters.
                </Typography>

                <Typography variant="body1" color="secondary.main" sx={{ mb: 2 }}>
                    Unlike highly aggressive human-biting tick species, Ixodes acuminatus rarely feeds on people and is considered to have low medical importance. Nevertheless, it may occasionally bite larger mammals, especially when rodent hosts are scarce. Although it is not widely recognized as a major vector of human disease, it has been studied for its potential to carry certain rodent-associated pathogens, making ongoing monitoring and ecological research valuable.
                </Typography>

                <Typography variant="body1" color="secondary.main" sx={{ mb: 2 }}>
                    This tick species can be identified by its small size, pointed mouthparts, and subtle ornamentation typical of the Ixodes genus. Its behavior is strongly tied to the activity cycles of its rodent hosts, and infestations often peak during periods of increased rodent population density. Understanding the ecology of Ixodes acuminatus is useful for wildlife studies and for assessing the broader tick community in Mediterranean and southern European ecosystems.
                </Typography>

                {/* Passerine tick */}
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 6 }}>
                    <Typography variant="h5" sx={{ color: "secondary.main" }}>
                        Passerine tick
                    </Typography>

                    <Typography variant="subtitle2" fontSize={"1em"} color="text.secondary" sx={{ fontStyle: 'italic' }}>
                        Dermacentor frontalis
                    </Typography>
                </Box>

                <Divider sx={{ mb: 2, width: '100%' }} />

                <Typography variant="body1" color="secondary.main" sx={{ mb: 2 }}>
                    The Passerine Tick (Dermacentor frontalis) is a hard-bodied tick commonly associated with small birds, especially passerines, across parts of Europe and nearby regions. It primarily feeds on species such as robins, thrushes, blackbirds, and warblers, taking blood meals at all active life stages—larva, nymph, and adult. This species is most often found in wooded areas, hedgerows, and gardens where its avian hosts nest and forage, and it tends to remain close to perches and bird nesting sites rather than seeking mammals.
                </Typography>

                <Typography variant="body1" color="secondary.main" sx={{ mb: 2 }}>
                    Although Dermacentor frontalis rarely bites humans, it plays a role in the circulation of pathogens among birds. Research has found it can carry avian-associated organisms such as Borrelia species and other bird pathogens, although it is not considered a significant vector of human disease. Its ecological importance lies in monitoring the health of bird populations and understanding the movement of tick-borne pathogens across regions via migratory birds.
                </Typography>

                <Typography variant="body1" color="secondary.main" sx={{ mb: 2 }}>
                    Morphologically, D. frontalis is small and dark, with a compact body and a well-defined scutum typical of the Dermacentor genus. It is most often found attached to the head, neck, and facial regions of birds, where feathers are thin and blood vessels accessible. Because many of its bird hosts migrate long distances, this tick can be dispersed across broad geographic ranges, making it useful for studies of avian tick ecology and pathogen transmission.
                </Typography>

                {/* Tree-hole tick */}
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 6 }}>
                    <Typography variant="h5" sx={{ color: "secondary.main" }}>
                        Tree-hole tick
                    </Typography>

                    <Typography variant="subtitle2" fontSize={"1em"} color="text.secondary" sx={{ fontStyle: 'italic' }}>
                        Ixodes arboricola
                    </Typography>
                </Box>

                <Divider sx={{ mb: 2, width: '100%' }} />

                <Typography variant="body1" color="secondary.main" sx={{ mb: 2 }}>
                    The Tree-Hole Tick (Ixodes arboricola) is a small hard-bodied tick that primarily parasitizes cavity-nesting birds such as tits, sparrows, and other small passerines. It is commonly found in Europe and parts of western Asia, where it inhabits tree holes, nest boxes, and other sheltered nesting sites. All active life stages—larva, nymph, and adult—feed almost exclusively on birds, making this species highly specialized and closely tied to the nesting habits of its hosts.
                </Typography>

                <Typography variant="body1" color="secondary.main" sx={{ mb: 2 }}>
                    While Ixodes arboricola rarely bites humans, it can carry avian pathogens, including Borrelia species and other tick-borne microorganisms, which may circulate among bird populations. Its ecological importance lies in monitoring disease prevalence in wild birds and understanding the dynamics of tick populations in arboreal habitats. Because of its nesting-site specialization, its presence is often an indicator of cavity-nesting bird activity in a given area.
                </Typography>

                <Typography variant="body1" color="secondary.main" sx={{ mb: 2 }}>
                    Morphologically, I. arboricola is small, with the typical features of the Ixodes genus, including a dark scutum and compact body. It usually attaches to the skin around the head, neck, and under the wings of birds, where it can feed securely. Its life cycle and distribution are closely linked to the timing of bird nesting and the availability of suitable tree-hole habitats, making it an important species for ecological and ornithological studies.
                </Typography>

                {/* Fox/badger tick */}
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 6 }}>
                    <Typography variant="h5" sx={{ color: "secondary.main" }}>
                        Fox/badger tick
                    </Typography>

                    <Typography variant="subtitle2" fontSize={"1em"} color="text.secondary" sx={{ fontStyle: 'italic' }}>
                        Ixodes canisuga
                    </Typography>
                </Box>

                <Divider sx={{ mb: 2, width: '100%' }} />

                <Typography variant="body1" color="secondary.main" sx={{ mb: 2 }}>
                    The Fox/Badger Tick (Ixodes canisuga) is a hard-bodied tick primarily associated with medium-sized mammals such as foxes, badgers, and domestic dogs. It is widely distributed across Europe, favoring rural and semi-urban habitats where its hosts are common. All active life stages—larva, nymph, and adult—feed on mammals, and the species is often found in dens, burrows, or resting sites frequented by its primary hosts.
                </Typography>

                <Typography variant="body1" color="secondary.main" sx={{ mb: 2 }}>
                    Although Ixodes canisuga occasionally bites humans, it is considered to have low medical significance compared to other tick species. Its primary ecological role is as a parasite of wild and domestic mammals, and it may carry pathogens that circulate among carnivores, including certain bacteria and protozoa. Monitoring this species is important for understanding wildlife health and the ecology of tick-borne pathogens in carnivore populations.
                </Typography>

                <Typography variant="body1" color="secondary.main" sx={{ mb: 2 }}>
                    Morphologically, I. canisuga is small, dark, and compact, with the typical characteristics of the Ixodes genus, including a well-defined scutum and pointed mouthparts. Adults are most often found attached to the ears, neck, and head of hosts, where skin is thinner and feeding is easier. Its life cycle is closely linked to the movement and denning behavior of its hosts, making it a specialized and ecologically important tick in forested and semi-urban landscapes.
                </Typography>

                {/* Marsh tick */}
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 6 }}>
                    <Typography variant="h5" sx={{ color: "secondary.main" }}>
                        Marsh tick
                    </Typography>

                    <Typography variant="subtitle2" fontSize={"1em"} color="text.secondary" sx={{ fontStyle: 'italic' }}>
                        Ixodes apronophorus
                    </Typography>
                </Box>

                <Divider sx={{ mb: 2, width: '100%' }} />

                <Typography variant="body1" color="secondary.main" sx={{ mb: 2 }}>
                    The Marsh Tick (Ixodes apronophorus) is a hard-bodied tick that inhabits wetland and marshy areas, primarily feeding on small to medium-sized mammals such as rodents and waterfowl. It is found in Europe and parts of western Asia, favoring damp environments like reed beds, marshes, and riverbanks where its hosts are abundant. All life stages—larva, nymph, and adult—depend on blood meals from these hosts to complete their life cycle.
                </Typography>

                <Typography variant="body1" color="secondary.main" sx={{ mb: 2 }}>
                    Although Ixodes apronophorus rarely bites humans, it may carry pathogens among its animal hosts, contributing to the local ecology of tick-borne microorganisms. Its presence provides insight into the health of wetland ecosystems and the distribution of ticks in aquatic or semi-aquatic habitats. This species is particularly important for studies monitoring wildlife health and the dynamics of ticks in marsh environments.
                </Typography>

                <Typography variant="body1" color="secondary.main" sx={{ mb: 2 }}>
                    Morphologically, I. apronophorus is small and dark, with the compact body and scutum typical of the Ixodes genus. It tends to attach to the head, neck, or underbelly of its hosts, where skin is thin and feeding is easier. The species’ life cycle is closely linked to the availability of marshy habitats and host density, making it an indicator species for ecological research in wetland regions.
                </Typography>

            </Box>
        </MyBackdrop>
    );
}