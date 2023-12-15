import { Box } from '@mui/material';
import { useEffect , useRef } from 'react';
import  bgAboutUs  from './../../assets/images/bgAboutUs.png';
import  bgPasSolutionHome  from './../../assets/images/bgPasSolutionHome.png';
import styled from '@emotion/styled';

export default function HorizontalImageScroll () {

    const Img = styled("img")(() =>({
        width:"100%",
        height:"100%",
        display:'flex',
        flexDirection:"row"
    }));

    const scrollContainerRef = useRef(null);

    useEffect( () => {

        const scrollContainer = scrollContainerRef.current;

        let scrollInterval ;

        const startScroll = () => {
            scrollInterval =  setInterval (() => {
                 scrollContainer.scrollLeft += 1
            }, 1);
        }

        const stopScroll = () => {
            clearInterval(scrollInterval);
        }

        scrollContainer.addEventListener('mouseenter',startScroll);
        scrollContainer.addEventListener('mouseLeave',stopScroll); 
    }, []);

    return  (
        <Box
        ref = { scrollContainerRef }
        sx={{
            border:"dotted",
            width:"100%",
            heigth:"100%",
            overflowX:"scroll",
            whiteSpace:"nowrap",
        }}
        >
            <Img src={bgPasSolutionHome} alt="home" />
            <Img src={bgAboutUs} alt="about us" />
            <Img src={bgPasSolutionHome} alt="home" />
            <Img src={bgAboutUs} alt="about us" />
        </Box>
    )

}
