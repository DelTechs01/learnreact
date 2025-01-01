import { useState } from "react";
import { Box, Drawer,List, ListItemButton, ListItemText,Button } from '@mui/material';
const arrOptions = ["Profile", "Balance" ," Logout", "Contact Us"];
const DrawerAp = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Box>
                <Button onClick={() => setOpen(true)}>Open</Button>
                <Drawer anchor="top" open={open} onClose= {() => setOpen(false)}>
                    <List>
                        {arrOptions.map = (elm) => (
                            <ListItemButton onClick={() => setOpen(false)}>
                                <ListItemText sx={{padding:10}} primary={elm} />
                            </ListItemButton>
                        )}; 
                    </List>
                </Drawer>
            </Box>
        </>
    )
};
export default DrawerAp;