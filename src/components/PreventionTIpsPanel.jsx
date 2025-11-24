import { Typography, Link } from "@mui/material";
import MyBackdrop from "./MyBackdrop";

export default function PreventionTipsPanel({ preventionTipsOpen, setPreventionTipsOpen }) {
    return (
        <MyBackdrop
            state={preventionTipsOpen}
            stateSetter={setPreventionTipsOpen}
        >
            <Typography variant="h4" sx={{ color: "secondary.main" }}>Prevention Tips</Typography>

            <Typography variant="body1" color="secondary.main" sx={{ mb: 2, mt: 6 }}>
                Ticks are small but potentially dangerous parasites that can carry pathogens affecting humans and animals. Preventing tick bites is largely about avoiding exposure and practicing good personal protection, especially in areas where ticks are common, such as forests, grasslands, and wetlands. Being aware of your surroundings and taking proactive measures is the first step toward staying safe.
            </Typography>

            <Typography variant="body1" color="secondary.main" sx={{ mb: 2 }}>
                When venturing into tick-prone environments, wear long sleeves, long pants, and closed-toe shoes. Tucking your pants into your socks or boots can create a barrier that prevents ticks from crawling onto your skin. Light-colored clothing is also helpful, as it makes it easier to spot ticks before they attach. Using a tick-repellent spray on clothing and exposed skin can further reduce the risk of bites. Products containing DEET, picaridin, or permethrin (for clothing) are widely recommended.
            </Typography>

            <Typography variant="body1" color="secondary.main" sx={{ mb: 2 }}>
                After outdoor activities, it is important to perform thorough tick checks on yourself, your children, and pets. Pay special attention to warm, moist areas where ticks often attach, such as behind the knees, around the waist, under the arms, behind the ears, and along the scalp. Showering soon after coming indoors can also help remove any ticks that have not yet attached.
            </Typography>

            <Typography variant="body1" color="secondary.main" sx={{ mb: 2 }}>
                Maintaining your yard and outdoor spaces can significantly reduce the number of ticks near your home. Keep grass short, remove leaf litter, and clear brush where ticks and their hosts, such as rodents and deer, are likely to hide. Creating a barrier between wooded areas and frequently used spaces, such as play areas or patios, can also reduce encounters with ticks.
            </Typography>

            <Typography variant="body1" color="secondary.main" sx={{ mb: 2 }}>
                For pets, regular tick prevention treatments are essential. Many veterinarians recommend spot-on treatments, oral medications, or tick collars, depending on your pet’s size and risk level. Checking pets after outdoor excursions, especially around the head, neck, and paws, helps catch ticks before they attach for long periods.
            </Typography>

            <Typography variant="body1" color="secondary.main" sx={{ mb: 2 }}>
                Finally, knowing how to safely remove a tick is crucial if one does attach. Use fine-tipped tweezers to grasp the tick close to the skin and pull it straight out with steady pressure. Avoid twisting or squeezing, which can leave mouthparts embedded or release pathogens. Clean the bite area with antiseptic and monitor for any signs of infection or illness, seeking medical advice if needed.
            </Typography>

            <Typography variant="body1" color="secondary.main" sx={{ mb: 2 }}>
                For more information, you can visit the Elanco website and read helpful articles like{' '}
                <Link href="https://mypetandi.elanco.com/au/parasites/ticks/best-ways-protect-your-dog-tick-bites" target="_blank" rel="noopener noreferrer" color="secondary">
                    these
                </Link>.
            </Typography>
        </MyBackdrop>
    );
}