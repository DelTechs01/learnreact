/* eslint-disable react/jsx-key */
import {useState}  from 'react';
import { List,Box,ListItemButton, Collapse, ListItem, ListItemText,ListItemIcon } from '@mui/material';
const Lists = () => {
    const array = ["BMW", "Chevrolet", "Mercedes Benz", "Bughatti", "Ford", "Ferarri"];
    const [open, setOpen] = useState(false);
    return (
        <>
        <Box sx={{ border:3, borderRadius:1, justifyContent:'center',maxWidth:300, alignItems:'center'}} padding={1}>
            <List>
                <ListItem>
                    <ListItemButton onClick={() => setOpen(true)}>
                        <ListItemIcon>{">"}</ListItemIcon>
                        <ListItemText primary="Choose Your Car"></ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            <Collapse in={open}>
                <List sx={{ width:300, alignItems:'center', justifyContent:'center'}}>
                    {array.map((listEl) => (
                        <ListItem divider>
                            <ListItemButton onClick={() => setOpen(false)}>
                                    <ListItemText primary={listEl}></ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </Box>
        </>
    )
};
export default Lists;