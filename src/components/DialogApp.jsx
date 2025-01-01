import { useState } from 'react';
import { Dialog, DialogContent,DialogTitle,DialogActions,Button } from '@mui/material';
const DialogAp = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog hideBackdrop open={open} onClose={() => setOpen(false)}>
            <DialogTitle> This is my dialog.</DialogTitle>
            <DialogContent>
                A dialog is a pop up window that can ask user something like information or confirmaion.
            </DialogContent>
            <DialogActions>
                <Button onClick={() => alert("Hello You are Mastering JS.")}>Save</Button>
                <Button onClick={() => setOpen(false)}>Close</Button>
            </DialogActions>
        </Dialog>
        </>
    )
};
export default DialogAp;