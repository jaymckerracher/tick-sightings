import { Typography } from "@mui/material";
import MyBackdrop from "./MyBackdrop";

export default function SeasonalActivityPanel({ seasonalActivityOpen, setSeasonalActivityOpen }) {
    return (
        <MyBackdrop
            state={seasonalActivityOpen}
            stateSetter={setSeasonalActivityOpen}
        >
            <Typography variant="h1">Hello</Typography>
        </MyBackdrop>
    );
}