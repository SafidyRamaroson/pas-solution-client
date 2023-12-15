import React from 'react';
import { Box } from '@mui/material';
import NavigationBar from './Navigation/NavigationBar';
import Footer from './Footer';


export default function MainLayout ({ children }){
    return (
        <Box sx={{margin:0,padding:0}}>
            <NavigationBar/>
            {children}
            <Footer/>
        </Box>
    )
}
