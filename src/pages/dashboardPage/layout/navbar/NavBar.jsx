// Navbar.js
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import NavigationBar from '../NavigationBar';
import { Box } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import SearchModal from '../../component/SearchMModal';

export default function NavBar() {

  const [isModalOpen, setModalOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/','_blank');
  }

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  
  const handleFocus = () =>{
    document.getElementById('input-search').style.border ="3px solid #1755b3";
  }

  const handleBlur = () => {
    document.getElementById('input-search').style.border ="1px solid #f4f4f4";
  };
  // 1755b3
  return (
      <>
        <Box sx={{backgroundColor:"#1755b3",height:"45px",color:"#FFF"}}>
            <Box sx={{paddingTop:"5px", paddingLeft:"10px",display:"flex",gap:"8px"}}>
                <CallIcon/>
                <Typography component="h3">+230 605-8886</Typography>
                <EmailIcon/>
                <Typography component="h3">info.pas@intnet.mu</Typography>
            </Box>
        </Box>
        <AppBar position="relative" sx={{backgroundColor:"#FFF !important"}}>
            <Toolbar sx={{color:"#FFF !important"}}>
                <Box>
                    <Box sx={{float:"left",marginRight:"10px"}}>
                        <Typography sx={{color:"#1755b3",padding:"10px",fontWeight:500,fontFamily:"Roboto",fontSize:"25px"}} variant="h6" component="div">
                              Pas Solution
                        </Typography>
                      </Box>
                        <NavigationBar/>
                    </Box>
                      <Box sx={{display:"flex",marginLeft:"75px"}}>
                            <InputBase
                                  placeholder="search ..."
                                  inputProps={{ 'aria-label': 'search a document or video' }}
                                  sx={{width:"100%",margin:"10px",paddingTop:0,borderRadius:"5px",border:"1px solid #F4F4F4"}}
                                  onFocus={handleFocus}
                                  onBlur={handleBlur}
                                  onClick={handleOpenModal}
                                  id ="input-search"
                            />
                      </Box>
                      <SearchModal open={isModalOpen} handleClose={handleCloseModal} />
                        <Box sx={{display:"flex",position:"absolute",right:"1em",padding:"8px"}}>
                            <IconButton sx={{marginRight:"50px"}} color="primary" onClick={handleWhatsAppClick}>
                                <WhatsAppIcon sx={{width:"30px",height:"30px"}}/>
                            </IconButton>
                            <Avatar>
                              <PersonIcon/>
                            </Avatar>
                        </Box>
                </Toolbar>
              </AppBar>
          </>
       );
};

