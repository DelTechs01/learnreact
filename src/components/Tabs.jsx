import {useState} from "react";
import { Tabs, Tab,AppBar, Toolbar } from '@mui/material';
function SimpleTab() {
    const[value, setValue] = useState();
    return (
        <>
        <AppBar>
            <Toolbar>
                <Tabs indicatorColor="secondary" textColor="secondary" value={value} onChange={(e, val) => setValue(val)}>
                    <Tab label="Home"></Tab>
                    <Tab label="About"></Tab>
                    <Tab label="Contact-US"></Tab>
                </Tabs>
            </Toolbar>
        </AppBar>
        
        </>
    );
};
export default SimpleTab;