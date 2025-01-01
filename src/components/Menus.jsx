import { useState } from "react";
import { Menu, MenuItem, Button } from '@mui/material';

const simpleMenu = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [anchorElm, setAnchorElm] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setAnchorElm(null);
        setOpen(false);
    };
    const handleClick = (e) => {
        setAnchorElm(e.currentTarget);
        setOpen(true);
    }
    return (
        <>
        <Button variant="contained" onClick={handleClick}>Open Menu</Button>
        <Button onClick={handleClick}>Open Menu Again</Button>
        <Menu anchorEl={anchorElm} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Balance</MenuItem>
            <MenuItem onClose={handleClose}>Logout</MenuItem>
        </Menu>
        </>
        
    )
}
export default simpleMenu;