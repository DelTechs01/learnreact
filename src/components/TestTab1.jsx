import {AppBar, Typography, Button, Toolbar} from "@mui/material"
const TestBar =() => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography>LOGO</Typography>
                    <Button  variant="contained" sx={{marginLeft:"auto"}} color="warning">
                        Home
                    </Button>
                    <Button variant="contained" sx={{marginLeft:"auto"}} color="warning">
                        About Us
                    </Button>
                    <Button variant="contained" sx={{marginLeft:"auto"}} color="warning">
                        Testimonials 
                    </Button>
                    <Button variant="contained" sx={{marginLeft:"auto"}} color="warning">
                        Blog 
                    </Button>
                    <Button variant="contained" sx={{marginLeft:"auto"}} color="warning">
                        Contact
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default TestBar;