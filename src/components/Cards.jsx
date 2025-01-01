import { Card, CardActionArea,CardMedia,Typography,CardContent,Button, CardActions } from '@mui/material';
import {useState} from 'react';
const Cards = () => {
    return (
    <Card sx={{maxWidth:345}}>
        <CardActionArea>
            <CardMedia component="img" height="148" image="public/ElonMusk.jpg" alt="Spartah"></CardMedia>
        </CardActionArea>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">Elon Musk</Typography>
            <Typography variant="body2" color="text.secondary">
            Elon Musk, born on June 28, 1971, in Pretoria, South Africa, is a renowned entrepreneur and inventor. He is the CEO of SpaceX and Tesla, and has co-founded several other companies, including Neuralink and The Boring Company. Musk is known for his ambitious vision of the future, which includes space exploration, renewable energy, and electric vehicles. His work has significantly impacted various industries, making him one of the most influential figures in technology and innovation today
            </Typography>
        </CardContent>
        <CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Share</Button>
                <Button size="small" color="primary">LIKE!</Button>
            </CardActions>
        </CardActionArea>
    </Card>
    );
};
export default Cards;