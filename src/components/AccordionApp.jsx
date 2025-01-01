import { useState } from "react";
import { Accordion, AccordionSummary, Typography, AccordionDetails} from "@mui/material";
const AccordionAp = () => {
    const [ accordion, setAccordion] = useState("")
    return (
        <>
        <Accordion expanded={accordion==="test1"} onChange={() => setAccordion("test1")}>
            <AccordionSummary>
                <Typography>Credentials First</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>My Name are Kweyu Delron Muyale, I am a Software Engineering Student at Kirinyag University.</Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion expanded={accordion === "test2" } onChange={() => setAccordion("test2")}>
            <AccordionSummary>
                <Typography>Credentials Second</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>My Name are Kweyu Delron Muyale, I am a Software Engineering Student at Kirinyag University.</Typography>
            </AccordionDetails>
        </Accordion>
        </>
    )
};
export default AccordionAp;