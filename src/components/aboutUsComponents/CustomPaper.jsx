import React from "react";
import { Paper,styled } from "@mui/material";


function CustomPaper ({urlImg,descriptionService}) {

    const Img = styled("img") (({}) => ({
        cursor:"pointer",
        width:"100%",
        height:"100%",
        borderRadius:"5px",
    }));

    const StyledPaper = styled(Paper) (({theme}) => ({
        border:"4px solid blue",
        height:"100%",
        width:"100%",
        // [theme.breakpoints.down('sm')]:{
        //     border:"4px solid red",
        //     marginLeft:"-50px"
        // }
    }));


    return <StyledPaper>
                <Img src={urlImg} alt={descriptionService}/>
          </StyledPaper>
}

export default CustomPaper