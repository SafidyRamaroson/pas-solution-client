import logoImg from "./../../assets/images/logo.png";
import CustomButton from "../../components/shared/CustomButton";
import {Box, Typography} from "@mui/material";
import {  NavLink,
          NavLinkBox,
          NavBarContainer ,
          NavBarLogo,
          CustomLink, 
          StyledDivider} from './navigation.styled';
import DrawerNav from './DrawerNav';
import { useState } from "react";

export default function NavBar (){

    const [selectedItem, setSelectedItem] = useState("home");


    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
        setSelectedItem(itemName);
    };
    return (
       <NavBarContainer>
         <Box
         sx= {{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            gap:"2.5rem",
         }}
         >
            <Box
            sx={{
                display:"flex",
                alignItems:"center",
            }}
            >
                <DrawerNav/>    
                <NavBarLogo src={logoImg} alt="Logo"/>
            </Box>
            <NavLinkBox>
                <CustomLink to="/home">
                    <NavLink 
                        onClick={() => handleItemClick('home')}
                        variant="body2">Home
                    </NavLink>
                    <StyledDivider
                        sx={{
                            visibility:selectedItem === 'home' ? "visible":"hidden"
                            }}
                    />
                 
                </CustomLink>
                <CustomLink to="/about us">
                    <NavLink 
                        onClick={() => handleItemClick('aboutUs')}
                        variant="body2">About us
                    </NavLink>
                    <StyledDivider
                        sx={{
                            visibility:selectedItem === 'aboutUs' ? "visible":"hidden"
                            }}
                    />
                </CustomLink>
                <CustomLink to="/contact">
                    <NavLink 
                        onClick={() => handleItemClick('contact')}
                        variant="body2">Contact
                    </NavLink>
                    <StyledDivider
                        sx={{
                            visibility:selectedItem === 'contact' ? "visible":"hidden"
                            }}
                    />
                </CustomLink>
            </NavLinkBox>
         </Box>
        <Box 
                sx={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    gap:"1rem",
                }}
                >
                <Box padding="8px" marginLeft="5px" >
                    <CustomLink to="/sign up">
                        <Typography color="#4285F4">Sign in</Typography>
                    </CustomLink>
                </Box>

                <CustomLink to="/register">
                    <CustomButton 
                    backgroundColor="#A3DC2F" 
                    color="#FFF" 
                    registerBtn={true}
                    buttonText="Register"
                    />
                </CustomLink>
        </Box>
       </NavBarContainer>
    )
}