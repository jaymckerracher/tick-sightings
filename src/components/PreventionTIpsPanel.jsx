import { Typography } from "@mui/material";
import MyBackdrop from "./MyBackdrop";

export default function PreventionTipsPanel({ preventionTipsOpen, setPreventionTipsOpen }) {
    return (
        <MyBackdrop
            state={preventionTipsOpen}
            stateSetter={setPreventionTipsOpen}
        >
            <Typography variant="h1">Hello</Typography>
        </MyBackdrop>
    );
}