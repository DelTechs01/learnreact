//Use to display rating on the web page.
import { useState } from 'react';
import { Rating,Typography } from '@mui/material';
import { Box } from '@mui/system'
const RatingAp = () => {
    const [value,setValue] = (useState());
    return (
        <>
        <Box>
            <Rating precision={0.1} defaultValue={1.6} value={value} onChange={(e, val) => setValue(val)} size='large'/>
                <Typography>Rated {value!==undefined? value : 0 } Stars</Typography>
        </Box>
        </>
    );
};
export default RatingAp;