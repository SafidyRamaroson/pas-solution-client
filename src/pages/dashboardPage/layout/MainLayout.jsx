import React from 'react';
import Navbar from './navbar/NavBar';
import Sidebar from './NavigationBar';
import { Box } from '@mui/material';
function MainLayout({children}){
    return(
        <>
            <Navbar/>
            <Box sx={{margin:0,padding:0}}>
                <Box sx={{width:"100vw",height:"100vh"}}>
                    {children}
                </Box>
            </Box>
        </>
    )
}

export default MainLayout;