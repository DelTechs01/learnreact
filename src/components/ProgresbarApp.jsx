//Used for displaying Progress Bars ie Linear, Circular, Button
import { useState} from "react";
import { CircularProgress, Box, LinearProgress } from '@mui/material';
const ProgressAp = () => {
    return(
        <>
        <Box>
            <CircularProgress variant="determinate" value={100} color="black"></CircularProgress>
            <LinearProgress variant="determinate" value={30} ></LinearProgress>
        </Box>
        </>
    )
}
export default ProgressAp;