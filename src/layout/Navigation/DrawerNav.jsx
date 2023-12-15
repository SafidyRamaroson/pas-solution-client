import { Drawer } from "@mui/material";
import HomeIcon from "@material-ui/icons/Home";
import ServiceIcon from "@material-ui/icons/LocalLaundryService";
import ContactIcon from "@material-ui/icons/Contacts";
import {
 Box, 
 List,
 ListItem,
 ListItemButton,
 ListItemText,
 ListItemIcon,
 Divider
}
from "@mui/material";
import { CustomLink, CustomMenuIcon } from "./navigation.styled";
import { useState } from 'react';
export default function DrawerNav (){

    const navigationList = [
        {
            label:"Home",
            link:"/"
        },
        {
            label:"About us",
            link:"/about us"
        },
        {
            label:"Contact",
            link:"/contact"
        },
    ]

    const [mobileMenu, setMobileMenu]=useState({
        left:false,
    });

    const toggleDrawer = (anchor,open) => (e) => {
   if(
       e.type === "keydown" &&
       (e.type === "Tab" || e.type === "Shift")
       ){
           return;
       }

        setMobileMenu({...mobileMenu,[anchor]:open});
        console.log(mobileMenu["left"]);
   }

const NavigationList = ({anchor,navigationList}) => (
    <Box
    sx={{width:(anchor === "top"  || anchor ==="bottom") ? "auto":250}}
     role="presentation"
     onClick={toggleDrawer(anchor,false)}
     onKeyDown= {toggleDrawer(anchor,false)}
    >
        <List>
        {navigationList.map((navItem,index) =>(
        <CustomLink to={navItem.link}>
            <ListItem key={index} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        {index === 0 && <HomeIcon/>}
                        {index === 1 && <ServiceIcon/>}
                        {index === 2 && <ContactIcon/>}
                    </ListItemIcon>
                    <ListItemText primary={navItem.label}/>
                </ListItemButton>
            </ListItem>
            <Divider/>
        </CustomLink>
        ))}
        </List>
    </Box>
    )
    return (<>
        <CustomMenuIcon  onClick={toggleDrawer("left",true)}/>
        <Drawer
            anchor="left"
            open ={mobileMenu.left}
            onClose ={toggleDrawer("left",false)}
            sx={{
                borderTopRightRadius:"5px",
                border:"dotted"
            }}
        >
            <NavigationList navigationList={navigationList} anchor={"left"}/>
        </Drawer>
    </>

    )
}