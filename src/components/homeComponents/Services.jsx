import React from 'react';
import {Box, Container} from '@mui/material';
import HorizontalImageScroll from './HorizontalScrollImageScroll';
import sageSoftwareVideo from './../../assets/video/Sage Software Mauritius_1080p.mp4'

export default function Services () {


    return (
        <Box sx= {{ 
            backgroundColor:"#f4f4f4",
            width:"100vw",
            height:"100vh",
            position:"relative",
        }}>
            <Container sx={{width:"80%", height:"100%",borderRadius:"50px",backgroundColor:"transparent",position:"absolute",top:"40%",left:"50%",transform:"translate(-50%,-50%)"}}>
                <Box
                sx={{
                    position:"relative",
                    width:"100%",
                    height :"95%",
                    overflow:"hidden",
                    paddingBottom:"0%",
                    borderRadius:"50px",
                    border:"2px solid #F4F4F4"
                }}
                >
                <iframe src="https://www.youtube.com/embed/gGmWrYjoiSM?controls=0&showinfo=0&modestbranding=1&rel=0&autoplay=1&loop=1&mute=1" 
                allowfullscreen
                style={{position:"absolute",top:2,left:0,width:"100%",height:"100%"}} 
                title="sage software Mauritius"
                 >
                 </iframe>
                </Box>
            </Container>
        </Box>
    )
}