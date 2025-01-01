import { useState } from "react";
import { Box, Alert } from '@mui/material';
const AlertAp = () => {
    const [show, setShow] = useState(true);
    return (
        <>
            <Box>
                {show && (
                   <Alert onClose={() => setShow(false)} severity="info">
                        This infor is an Alert.
                    </Alert> 
                )}  
                <Alert severity="info">This is an Infor  Alert.</Alert>
                <Alert severity="warning">This is A Warning</Alert>
                <Alert severity="success">This is a Success alert.</Alert>
                <Alert severity="error">This is an error Alert.</Alert>
            </Box>  
        </>
    )
};
export default AlertAp;