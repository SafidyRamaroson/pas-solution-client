import {Container,Divider,styled } from '@mui/material';

const DividerStyled = styled(Divider)(({}) =>({
    width:"5vw",
    height:"5px",
    borderRadius:"2px",
    backgroundColor:"#0079ba"
}));


const StyledContainer = styled(Container)(({theme}) =>({
    width:"60%",
    height:"100vh",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    padding:theme.spacing(5),
    [theme.breakpoints.down("md")]:{
        width:"97%",
        height:"100%",
        padding:theme.spacing(1),
        marginTop:theme.spacing(2),
        marginBottom:theme.spacing(2)
    },
 }));

 const Img =styled('img')(({}) =>({
    width:"98.6vw",
    height:"70vh",
}));

export  { Img , DividerStyled ,StyledContainer }
