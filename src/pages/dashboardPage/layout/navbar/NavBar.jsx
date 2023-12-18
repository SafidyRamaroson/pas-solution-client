// Navbar.js
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import NavigationBar from '../NavigationBar';
import { Box } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Avatar from '@mui/material/Avatar';
import SearchModal from '../../component/SearchMModal';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';


export default function NavBar() {

  const [isModalOpen, setModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
                            <Tooltip title="Account settings">
                              <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                              >
                                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                              </IconButton>
                            </Tooltip>
                            <Menu
                          anchorEl={anchorEl}
                          id="account-menu"
                          open={open}
                          onClose={handleClose}
                          onClick={handleClose}
                          PaperProps={{
                            elevation: 0,
                            sx: {
                              overflow: 'visible',
                              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                              mt: 1.5,
                              '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                              },
                              '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                              },
                            },
                          }}
                          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                        <MenuItem onClick={handleClose}>
                          <Avatar /> Profile
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                          <ListItemIcon>
                            <Logout fontSize="small" />
                          </ListItemIcon>
                          Logout
                        </MenuItem>
                      </Menu>
                    </Box>
                </Toolbar>
              </AppBar>
          </>
       );
};

