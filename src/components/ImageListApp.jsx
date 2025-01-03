//Used to display collection of images ina group
import { useState } from 'react';
import { ImageList,ImageListItem,ImageListItemBar } from "@mui/material";
import { Box } from "@mui/system";
const ImageListAp = () => {
    const itemData = [
        {
            img: './public/Pap.png',
            title: 'Rasto Malika,Father',
        },
        {
            img: './public/Mum.png',
            title:'Millicent Aswani,Mother'
        },
        {
            img: './public/Mother.png',
            title:'Sharon Iravongah,Mother'
        },
        {
            img: './public/Son.png',
            title:'Kweyu Delron,Son'
        }
        
    ]
        return (
            <>
                <Box>
                    <ImageList variant="standard" sx={{width:1000,heigt:800}} cols={4}>
                        {itemData.map((image,index)=> (
                            <ImageListItem key={index}>
                                <img src={image.img} alt={image.title} Loading="lazy"/>
                                <ImageListItemBar position="below" subtitle={<span><i>Developed By:Smoak_001</i></span>} title={image.title} />
                            </ImageListItem>
                        ))};
                    </ImageList>
                </Box>
            </>
        )
}
export default ImageListAp;