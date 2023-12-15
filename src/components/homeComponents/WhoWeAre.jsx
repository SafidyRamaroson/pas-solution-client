import {Box,Container, Typography} from '@mui/material';
import CustomButton from '../shared/CustomButton';
import WelcomeImage from "../../assets/images/heroImg.jpg";
import { ImageContainer, CustomPaper, ImageHook } from '../../pages/HomePage/home.styled';
import { BackgroundBox } from '../../pages/HomePage/home.styled';
import { Link } from 'react-router-dom';
import {Paper }from '@mui/material';
import { CustomLink } from '../../layout/Navigation/navigation.styled';
export default function WhoAreWe () {
    return (
        // #D3D3D3
        <Box
            sx={{
                backgroundColor:"#FFF",
                minHeight:"100vh",
            }}
        >
        <Container sx={{
                heigth:"100%",
                margin:"50px auto",
                display:"block",
                justifyContent:"center",
                alignContent:"center",
        }}>
            <Box>
                <Typography
                    variant="h2" 
                    sx={{
                            fontSize:"18",
                            color:"#000",
                            mt:0,
                            mb:2,
                            pt:4,
                            textAlign:"center",
                            fontFamily:'Roboto',
                            fontWeight:"700"
                        }}>
                                Who are We  <span color="#000 important">?</span>
                </Typography>
            </Box>
            <CustomPaper elevation={0} sx={{height:"400px",maxWidth:"1000px",m:"30px",padding:"20px 20px"}}>
                <BackgroundBox sx={{width:"100%",height:"100%",backgroundSize:"cover",backgroundPosition:'center',mixBlendMode:"darken"}}/>
                <Box
                sx={{p:4,padding:"20px 20px", display:"block", justifyContent:"center",alignContent:"center",m:"auto 0"}}
                >
                    <Typography variant='p'
                    sx={{
                        fontSize:"16px",
                        fontFamily:"Roboto",
                        fontWeight:300
                    }}>
                        As a member of the Pastel International Forum (Iforum)
                    <br/>
                    <br/>
                        P.A.S Solution Ltd is entitled to advise, recommend and 
                        install the Sage Pastel Product range to its clients.
                    <br/>
                    <br/>
                        Our mission is to have a deep understanding of the needs
                        of our customers, to be their long time partners and to deliver 
                        value through best of breed IT solutions
                    <br/>
                    <br/>
                    </Typography>
                    <CustomLink to="/about us">
                        <CustomButton
                        backgroundColor="#4285F4" 
                        color="#FFF" 
                        moreAboutbtn={true}
                        buttonText="More About us"
                        />
                    </CustomLink>
                </Box>
            </CustomPaper>
        </Container>
        </Box>
    )
}