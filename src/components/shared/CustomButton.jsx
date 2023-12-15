import React from 'react';
import {styled,Button} from '@mui/material'

export default function CustomButton({backgroundColor,color,moreAboutbtn,registerBtn,sendMessageBtn,seeOurService,buttonText,signup}){

    const CustomButton =styled(Button)(({theme}) =>({
        backgroundColor:"#4285F4",
        color:"#FFF",
        fontWeight:"700",
        cursor:"pointer",
        padding:"10px 30px",
        borderRadius:"100px",
        textTransform:"none",
        border:"2px solid transparent",
        display:"block",
        marginTop:(moreAboutbtn && "1rem" ),
        marginBottom:(sendMessageBtn && "1rem"),
        "&:hover": {
            backgroundColor:"#4285F4",
            opacity:.9
        },
        [theme.breakpoints.down("sm")] : {
            width:(seeOurService || moreAboutbtn || registerBtn) && "100%",
        }
    }));
    return (
        <CustomButton>{buttonText}</CustomButton>
    )
}