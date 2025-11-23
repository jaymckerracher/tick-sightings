import { Typography } from "@mui/material";
import MyBackdrop from "./MyBackdrop";

export default function SpeciesGuidePanel({ speciesGuideOpen, setSpeciesGuideOpen }) {
    return (
        <MyBackdrop
            state={speciesGuideOpen}
            stateSetter={setSpeciesGuideOpen}
        >
            <Typography variant="h1">Hello</Typography>
        </MyBackdrop>
    );
}