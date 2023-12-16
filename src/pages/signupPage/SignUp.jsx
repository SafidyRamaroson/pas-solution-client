import React from 'react';
import {
    Grid ,
    Box,
    Typography,
    TextField,
    Paper,
    styled,
    Button
} from '@mui/material';
import { Link} from 'react-router-dom';


import {useFormik } from 'formik';
import * as yup from 'yup';

import logo from "../../assets/images/logo.png";
import CustomButton from "../../components/shared/CustomButton";
import { validationSchema } from './validationSchemaSingup';
import { GoogleLogin } from "react-google-login";
// import styled  from '@emotion/styled';


function SignUp () {

    const initialValues = {
        name:"",
        email:"",
        password:"",
    };

    const handleSubmit = async(values) =>{
        
        try{
            console.log(values);
            const response = await fetch('https://node-express-mysql-api.onrender.com/user/createUser',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(values),
            });

            const data = await response.text();
            alert(data);
        } catch(error){
            console.error("Error:",error);
        }

    }

    const formik =  useFormik({
        initialValues,
        validationSchema,
        onSubmit:(values) => {
            handleSubmit(values);
        },
        onReset:(values) =>{
            values = {...values,...initialValues}
        }
    })

    const StyledImg = styled("img")(() =>({
        cursor:"pointer",
        width:"70px",
        height:"70px"
    }));

    const CustomLink =styled(Link)(() =>({
        textDecoration:"none",
    }));

    // const StyledGoogleLogin =styled(GoogleLogin)(() =>({
    //     width:"100%",
    //     paddingLeft:"34px",
    //     borderRadius:"100px !important",
    //     boxShadow:"none !important",
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

    // const StyledTextField = styled(TextField)({
    //     '& .MuiOutlinedInput-root':{
    //         borderRadius:"10px",
    //         paddingY:"6px"
    //     }
    // })
    return(
       <Grid container minHeight="100vh"  
       sx={{
        display:"flex",
        alignContent:"center",
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
                        <Typography color="#4285F4" variant="h5" mt={2} fontWeight="bold">Create a new account</Typography>
                        <CustomLink to="/register">
                            <Typography color="#7286D3" variant="body2" mt={1} fontWeight="bold"><span color="#F4F4F4">Or</span> sign in to your account</Typography>
                        </CustomLink>
                    </Box>
                    <Box sx={{margin:"20px 30px",padding:"10px",maxWidth:"400px"}}>
                    <form mt={3} mb={2} onResetg={formik.handleReset} onSubmit={formik.handleSubmit}>
                        <TextField
                            name='name'
                            type="text"
                            variant="outlined"
                            label="name"
                            placeholder="your name"
                            size="small"
                            margin="normal"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                            fullWidth  
                        />
                        <TextField
                            name='email'
                            type="email"
                            variant="outlined"
                            label="email"
                            placeholder="your email"
                            size="small"
                            fullWidth
                            margin="normal"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
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
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />  
                       <Button
                        type="submit"
                        sx={{
                            width:"100%",
                            backgroundColor:"#4285F4",
                            color:"#fff",
                            cursor:"pointer",
                            padding:"8px 24px",
                            borderRadius:"10px",
                            marginTop:"1rem",
                            marginBottom:".5rem",
                            border:"2px solid transparent",
                            fontFamily:"Roboto",
                            fontSize:"12px",
                            fontWeight:700,
                            "&:hover":{
                                    backgroundColor:"#4285F4",
                                    opacity:.9
                            }
                        }}
                       >sign up</Button>
                       {/* <Typography component="h3" sx={{textAlign:"center",fontFamily:"Roboto", fontWeight:"500", fontSize:"16px"}}>OR</Typography> */}
                       
                        {/* <StyledGoogleLogin
                                // clientId ={null}
                                // buttonText = "register with google"
                                // onSuccess = {null}
                                // onFailure = {null}
                                // cookiePolicy ={'single_host_origin'}  
                        /> */}
                    </form>
                    </Box>
                </Paper>
            </Grid>
       </Grid>
    )
}



export default SignUp ;


