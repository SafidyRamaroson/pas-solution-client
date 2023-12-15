// Sidebar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BallotIcon from '@mui/icons-material/Ballot';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import DescriptionIcon from '@mui/icons-material/Description';
import { Box } from '@mui/material';



export default function NavigationBar() {
  
  const activeLinkStyle = {
    backgroundColor: 'blue',
    color: 'white',
  };

  return (
      <List sx={{display:"flex",padding:"0px 0px !important"}}>
        {/* <ListItem sx={{padding:"0px 0px !important",border:"2px solid red"}} component={NavLink} to="/all-supports" activestyle={activeLinkStyle}>
          <ListItemIcon sx={{margin:"0px 0px !important"}}>
            <BallotIcon sx={{color:"#FFF"}} />
          </ListItemIcon>
          <ListItemText sx={{color:"#FFF"}} primary="All Supports" />
        </ListItem> */}
        <ListItem  component={NavLink} to="/videos-supports" activestyle={activeLinkStyle}>
          <ListItemIcon>
            <VideoLibraryIcon sx={{color:"#1755b3"}}/>
          </ListItemIcon>
          <ListItemText  sx={{color:"#000",padding:"4px 4px",minWidth:"130px !important"}} primary="Videos Supports" />
        </ListItem>
        <ListItem  component={NavLink} to="/docs-supports" activestyle={activeLinkStyle}>
          <ListItemIcon>
            <DescriptionIcon sx={{color:"#1755b3"}}/>
          </ListItemIcon>
          <ListItemText sx={{color:"#000",padding:"4px 4px",minWidth:"130px !important"}} primary="Docs Supports" />
        </ListItem>
      </List>
  );
};