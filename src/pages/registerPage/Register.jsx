import {
    Grid ,
    Box,
    Typography,
    TextField,
    Paper,
    styled,
    Button
} from '@mui/material';

import {Link} from 'react-router-dom';

import {useFormik } from 'formik';
import * as yup from 'yup';

import logo from "../../assets/images/logo.png";
import CustomButton from "../../components/shared/CustomButton";
import { useState} from 'react';
import { useNavigate } from 'react-router';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validationSchema } from './validationSchemaRegister';
import { GoogleLogin } from 'react-google-login'
import{ Backdrop, CircularProgress} from '@mui/material';

function Register () {

    const [login,setLogin]= useState(true);
    const navigate = useNavigate();
    const initialValues = {
        email:"",
        password:""
    }
    
    const handleRegister = async(values) =>{
        
        try{
                setLogin(false);
            const response = await fetch('https://node-express-mysql-api.onrender.com/user/login',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({email:values.email,password:values.password})
            });
            if(response.ok){
                setLogin(true)
                navigate('/videos-supports');
                toast.success("Welcome to your account!",{
                    position:toast.POSITION.TOP_CENTER,
                    duration:5000
                });
            }else{
                toast.error("You don't have an account");
                navigate('/sign up');
                values = [...values,...initialValues]
            }
        }catch(error){
            console.error("Erreur lors de la connexion ", error);
        }
    }


    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit:(values) => {
            handleRegister(values);
        },
        onReset:(values) => {
            values = [...values,...initialValues]
        }
    })
    const StyledImg = styled("img")(() =>({
        cursor:"pointer",
        width:"70px",
        height:"70px"
    }))

    const CustomLink =styled(Link)(() =>({
        textDecoration:"none",
        color:"#232826"
    }));

    // const StyledGoogleLogin =styled(GoogleLogin)(() =>({
    //     width:"100%",
    //     borderRadius:"100px !important",
    //     boxShadow:"none !important",
    //     // padding:"5px !important",
    //     border:"2px solid #232826 !important",
    //     '& div':{
    //         borderRadius:"85px !important",
    //         margin:"2px 8px 2px 2px !important",
    //     },
    //     '& span':{
    //         marginX:"auto !important",
    //         display:"block",
    //         justifyContent:"center",
    //         alignItems:"center",
    //         marginRight:"25px !important"
    //     }
    // }));

    return(
       <Grid container height="100vh"  
       sx={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        // backgroundColor:"#F4F4F4"
        }}
       >
            <Grid 
            item 
            lg={4} 
            sm={10}
            >
                <Paper
                 square={false}
                 elevation={0}
                 sx={{
                    height:"100%",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center"
                 }}
                 >
                    <Box
                    sx={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        flexDirection:"column",
                        marginTop:"16px",
                        maxWidth:"400px"
                    }}>
                        <StyledImg src={logo} alt="logo"/>
                        <Typography color="#4285F4" fontWeight="bold" variant="h5" mt={2}> Connect to your account</Typography>
                        <CustomLink  to="/sign up">
                            <Typography color="#7286D3" variant="body2" mt={1} fontWeight="bold"><span color="#F4F4F4">Or</span> create a new account</Typography>
                        </CustomLink>
                    </Box>
                    <Box sx={{margin:"20px 30px",padding:"10px", maxWidth:"400px"}}>
                        <form mt={3} mb={4} onReset={formik.handleReset} onSubmit={formik.handleSubmit}>
                            <TextField
                                name='email'
                                type="email"
                                variant="outlined"
                                label="email"
                                placeholder="your email"
                                size="small"
                                fullWidth
                                margin="normal"
                                value= {formik.values.email}
                                onChange ={formik.handleChange}
                                onBlur ={formik.handleBlur}
                                error = {formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}

                            />
                            <TextField
                                name='password'
                                type="password"
                                variant="outlined"
                                label="password"
                                placeholder="your password"
                                size="small"
                                fullWidth
                                margin="normal"
                                value= {formik.values.password}
                                onChange ={formik.handleChange}
                                onBlur ={ formik.handleBlur}
                                error = {formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />  
                        <Box mY ={2}>
                            <Typography variant="body2" ><CustomLink to="forgotPassword">Forgot your password ?</CustomLink></Typography>
                        </Box>
                        {login ?   <Button
                            type='submit'
                        sx={{
                            width:"100%",
                            backgroundColor:"#4285F4",
                            color:"#fff",
                            cursor:"pointer",
                            borderRadius:"10px",
                            padding:"8px 24px",
                            marginTop:"1rem",
                            border:"2px solid transparent",
                            fontFamily:"Roboto",
                            fontSize:"12px",
                            fontWeight:700,
                            "&:hover":{
                                    backgroundColor:"#4285F4",
                                    opacity:.9
                            }
                        }}
                        >Log in</Button>:<Button
                        sx={{
                            width:"100%",
                            backgroundColor:"#F4F4F4",
                            color:"#fff",
                            cursor:"pointer",
                            borderRadius:"10px",
                            padding:"8px 24px",
                            marginTop:"1rem",
                            border:"2px solid transparent",
                            fontFamily:"Roboto",
                            fontSize:"12px",
                            fontWeight:700,
                            "&:hover":{
                                    backgroundColor:"#4285F4",
                                    opacity:.7,
                                    cursor:"not-allowed"
                            }
                        }}
                        >Logging in ...</Button>}
                      
                        {/* <Typography component="h3" sx={{textAlign:"center",fontFamily:"Roboto", fontWeight:"500", fontSize:"16px", marginTop:"5px"}}>OR</Typography> */}
                        {/* <StyledGoogleLogin
                            clientId ={null}
                            buttonText = "sign in with google"
                            onSuccess = {null}
                            onFailure = {null}
                            cookiePolicy ={'single_host_origin'}
                            width ="100%"
                        /> */}
                        </form>
                    </Box>
                </Paper>
            </Grid>
       </Grid>
    )
}



export default Register ;



