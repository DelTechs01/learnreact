//A short notification component
import { useState } from 'react';
import { Snackbar,Box,Alert } from '@mui/material';

const SnackbarAp = () => {
    const [open, setOpen] = useState(true);
    return (
        <>
        <Box>
            <Snackbar onClose = {() => setOpen(false)} autoHideDuration={5000} open={open}>
                <Alert severity='success'>These is a Success Message.It will dissappear after 5s.</Alert>
            </Snackbar>
        </Box>
        </>
    )
}
export default SnackbarAp;