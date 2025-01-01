import { useState } from "react";
import { Link, Container } from '@mui/material';
const LinkApp = () => {
    return(
        <>
        <Link variant="h4" underline="none" color="primary" href="www.google.com">Visit Google</Link>
        <Container maxWidth="sm" sx={{backgroundColor:"Green"}}>
            Hello
        </Container>
        <Container maxWidth="md" sx={{backgroundColor:"Green"}}>
            Hello
        </Container>
        <Container maxWidth="lg" sx={{backgroundColor:"Green"}}>
            Hello
        </Container>
        <Container maxWidth="xl" sx={{backgroundColor:"Green"}}>
            Hello
        </Container>
        <Container maxWidth="xs" sx={{backgroundColor:"Green"}}>
            Hello
        </Container>
        </>
    );
};
export default LinkApp;