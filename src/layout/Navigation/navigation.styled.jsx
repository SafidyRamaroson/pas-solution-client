import {Box, styled, Container, Divider} from "@mui/material";
import Typography from "@mui/material/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from 'react-router-dom';

const NavLink =styled(Typography)(() =>({
    fontSize:"14px",
    color:"#4F5361",
    fontWeight:"bold",
    cursor:"pointer",
    padding:"4px 0px",
    "&:hover" :{
        // color:"#0F1B4C"
        color:"#D3D373"
    }
}));

const NavLinkBox =styled(Box)(({theme}) =>({
   display:"flex",
   alignItems:"center",
   justifyContent:"center",
   gap:theme.spacing(3),
   [theme.breakpoints.down("md")]:{
    display:"none",
   },
}));


const CustomMenuIcon = styled(MenuIcon) (({theme}) => ({
    cursor:"pointer",
    display:"none",
    [theme.breakpoints.down("md")]:{
        display:"block",
    },
}));

const NavBarContainer = styled(Container) (({theme}) =>({
    display:"flex",
    justifyContent:"space-between",
    padding:theme.spacing(1),
    marginTop:theme.spacing(2),
    border:".5px solid #f4f4f4",
    [theme.breakpoints.down("md")]:{
        padding:theme.spacing(2),
    },
}));

const NavBarLogo = styled("img")(({theme}) =>({
    cursor:"pointer",
    width:"50px",
    height:"50px",
    [theme.breakpoints.down("md")]:{
        display:"none"
    },
}));

const CustomLink =styled(Link)(() =>({
    textDecoration:"none",
}));

const StyledDivider = styled(Divider)(({theme}) => ({
    width:"50%",
    borderWidth:"3px",
    borderRadius:"1px",
    backgroundColor:"#D3D373"
}))



export { StyledDivider , NavLink ,NavLinkBox , CustomMenuIcon, NavBarContainer ,NavBarLogo , CustomLink }