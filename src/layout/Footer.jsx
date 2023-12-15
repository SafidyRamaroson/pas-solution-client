import React from 'react';
import {Box , Container , Typography} from '@mui/material';
import FacebookIcon from '@material-ui/icons/Facebook';
import AdresseIcon from '@material-ui/icons/Home';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from "@material-ui/icons/Mail";
import ContactIcon from "@material-ui/icons/Contacts";
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import {styled} from '@mui/material';

export default function Footer () {
    const CustomIcon =styled("icon")(() =>({
        cursor:"pointer",
        width:"35px",
        alignItem:"center",
        justifyContent:"center",
    }));

    const CustomBox =styled(Box)(({theme}) =>({
        display:"flex",
        gap:theme.spacing(1),
        justifyContent:"space-between",
        alignContent:"center",
        marginTop:".5rem" 
    }))
    return (
        <Box
        sx={{
            backgroundColor:"#4285F4",
            width:"100vw",
            minHeight:"50vh",
            pt:4,
            pb:1
        }}
        >
            <Container>
                <Box>
                    <Typography
                    variant ="h5"
                    color = "#FFF"
                    fontFamily = "Roboto"
                    fontWeight = "700"
                    > P .A .S Solution Ltd
                    </Typography>
                    <Typography 
                    sx={{color:"#D3D373",letterSpacing:"1px",fontFamily:"Exo",fontWeight:"300"}}
                    variant ="subtitle1">
                      Your solution provider
                    </Typography>
                </Box>
                <Divider/>
                <CustomBox>
                    <Box sx={{marginTop:"1rem"}}>
                        <List>
                            <CustomBox>
                                <AdresseIcon/>
                                <ListItemText sx={{color:"#fff",fontFamily:"Roboto",fontWeight:300}} primary={"20,Loreto Convent Street, VacoasVacoas, MU"}/>
                            </CustomBox>
                            <CustomBox>
                                <EmailIcon/>
                                <ListItemText sx={{color:"#fff",fontFamily:"Roboto",fontWeight:300}} primary={"info.pas@intnet.mu"} />
                            </CustomBox>
                            <CustomBox>
                                <ContactIcon/>
                                <ListItemText sx={{color:"#fff",fontFamily:"Roboto",fontWeight:300}} primary={"+230 605-8886"} />
                            </CustomBox>
                        </List>
                    </Box>
                    <List
                        sx={{
                            mb:3,
                            marginTop:"1.5rem"
                        }}
                    >
                            <Typography variant="h6" sx={{color:"white"}}>
                                Get in touch 
                            </Typography>
                        <ListItemIcon sx={{marginTop:'.5rem'}}>
                            <CustomIcon>
                                <FacebookIcon sx={{backgroundColor:"#A3DC2F"}}/>
                            </CustomIcon>
                            <CustomIcon>
                                <ContactIcon sx={{backgroundColor:"#A3DC2F"}}/>
                            </CustomIcon>
                            <CustomIcon>
                                <WhatsAppIcon sx={{backgroundColor:"#A3DC2F"}}/>
                            </CustomIcon>
                        </ListItemIcon>
                    </List>
                </CustomBox>
            </Container>
        </Box>
    )
}