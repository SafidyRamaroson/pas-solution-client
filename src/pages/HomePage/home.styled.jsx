import { Box,
        Typography,
        styled,
        Paper
 } from "@mui/material";
import whereAreWe from './../../assets/images/whoAreWe.jpg'
// start of hero component style
  const CustomBox = styled(Box) (({theme}) =>({
        display:"flex",
        justifyContent:"center",
        gap:theme.spacing(5),
        marginTop:theme.spacing(3),
        [theme.breakpoints.down("md")]:{
            flexDirection:"column",
            alignItems:"center",
            textAlign:"center"
        }
    }));

    const Title = styled(Typography) (({theme}) =>({
        fontSize:"64px",
        color:"#FFF",
        fontWeight:"bold",
        margin:theme.spacing(3,0,3,0),
        textAlign:"center",
        [theme.breakpoints.down("sm")]:{
           fontSize:"42px"
        }
    }));

    const ImageHook= styled('img')(({theme}) => ({
        width:"60px",
        height:"40px",
    }))

// start of hero component style

//start of WhoWeAre component style 
  const BackgroundBox =styled(Box) (({theme}) =>({
        backgroundImage:`url(${whereAreWe})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        borderRadius:"24px",
        [theme.breakpoints.down("md")]:{
           width:"90vw",
           mt:theme.spacing(1)
        }
    }));

    const CustomPaper = styled(Paper)(({theme}) =>({
        display:"flex",
        justifyContent:"center",
        gap:theme.spacing(1),
        padding:theme.spacing(1),
        borderRadius:"32px",
        [theme.breakpoints.down("md")]:{
            width:"100%",
            height:"90vh",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            textAlign:"center",
            marginBottom:theme.spacing(2)
        }
    }));
    //start of WhoWeAre component style 

    export {CustomBox,Title,ImageHook,CustomPaper,BackgroundBox} ;