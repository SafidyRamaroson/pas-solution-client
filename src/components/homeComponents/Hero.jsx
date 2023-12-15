import React from "react"
import { CustomBox , Title, ImageHook } from "../../pages/HomePage/home.styled";
import CustomButton from "../shared/CustomButton";
import backgroundHero from "../../assets/images/gradient-background.png";
import whereAreWe from './../../assets/images/whoAreWe.jpg'
import { Box, Container, Typography} from "@mui/material";
import { motion } from 'framer-motion'
import {styled} from "@mui/material";
import { Link } from "react-router-dom";
import { CustomLink } from "../../layout/Navigation/navigation.styled";

export default function Hero (){
    // #5269B8
    return (
        <Box sx={{
            width:"100vw",
            // backgroundColor:"#4285F4",
            minHeight:"85vh",
        }}>
           <Container minHeight>
                <CustomBox>
                    <Box sx= {{flex:"1",marginTop:"100px"}}> 
                        <Box
                            sx={{
                                width:"100vw",
                                display:"flex",
                                justifyContent:"center",
                                alignContent:"center",
                            }}
                        >   
                            <Title variant="h2" sx={{fontFamily:'Roboto',size:"60px",fontWeight:700,color:"#000"}}>
                               Welcome to the future <br></br> of Sage Support
                            </Title>
                        </Box>
                        <Box sx={{
                            width:"100vw",
                            textAlign:"center",
                            display:"flex",
                            justifyContent:"center",
                            alignContent:"center",
                        }}>
                            <Typography variant="h5" sx={{ fontFamily:"Roboto",
                            fontSize:"20px",padding:"5px 10px",fontWeight:"400px",color:"#000,opacity:.5"}} >
                                    We are P.A.S Solutions - specializing in Sage Software,from scale,<br/>
                                    ,implementation, to multi-tired support
                            </Typography>
                        </Box>
                        <Box
                        sx={{
                            display:"flex",
                            justifyContent:"center",
                            alignContent:"center",
                            width:"100vw",
                            padding:"14px",
                            gap:'5px'
                        }}>
                    {/* 7286D3 */}
                            <CustomButton
                            component={motion.button}
                            initial ={{opacity:0}}
                            animate ={{opacity:1}}
                            transition={{duration:2000}}
                            backgroundColor="#A3DC2F !important"
                            borderRadius="100px"
                            color="#fff" 
                            seeOurService={true}
                            buttonText="Registry free"
                            ></CustomButton>
                            <Box padding="15px" marginLeft="5px" >
                                <CustomLink to="#" >
                                    <Typography color="#4285F4">Learn more</Typography>
                                </CustomLink>
                            </Box>
                        </Box>
                    </Box>
                </CustomBox>
           </Container>
        </Box>
    )
}