import React, {useState} from 'react';
import { 
    TextField,
    Grid,
    Box,
    Typography, 
    Checkbox,
    FormControlLabel,
    } 
    from "@mui/material";
import CustomButton from "../shared/CustomButton";
import {Container} from "@mui/system";
import { useFormik } from "formik";
import * as yup from 'yup';
import { validationSchema } from './validationSchema';
import { styled , Button} from '@mui/material';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import{ Backdrop, CircularProgress} from '@mui/material';

const initialValues = {
    firstName:"",
    lastName:"",
    email:"",
    subjectEmail:"",
    message:""
}
function FormContact(){
    

    const [checked,setChecked] = useState(false);
    const [sent,setSent] = useState(true);

    const handleChange =(e) =>{
        setChecked(e.target.checked);
    }
 
    const handleSendMessage = async() => {
        try{
            setSent(true);
            const response = await fetch('https://node-express-mysql-api.onrender.com/message/sendMessage',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(formik.values)
            });
            
        //    alert(await response.text());
           if(response.ok){
              setSent(true);
              toast.success("Sent message successfully!",{
                position:toast.POSITION.TOP_CENTER,
                duration:5000
            })
           }
        }catch(error){
            console.error("Erreur lors de l'envoi message ")
        }
        
        
    }
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            handleSendMessage();
        },
       onReset: (values) => {
        values = {...values, ...initialValues}
       }
    });


    const StyledButton = styled(Button)(() =>({
        fontWeight:"700",
        cursor:"pointer",
        padding:"10px 30px",
        borderRadius:"100px",
        textTransform:"none",
        border:"2px solid #4285F4",
        display:"block",
        backgroundColor:"#4285F4",
        color:"#fff",
        "&:hover": {
            backgroundColor:"#4285F4",
            opacity:.9
        }
    }));

    return(
    <Box sx={{backgroundColor:"#F4F4F4"}}>
        <Container
        sx={{
            display:"flex",
            justifyContent:"center",
            alignContent:"center",
            flexDirection:"column",
            width:"80vw",
            background:"#F4F4F4",
            padding:"24px 24px",
            mX:"50px",
        }}>
            <Box p="12px">
                    <Typography
                        variant="h4"
                        color="#4285F4"
                        fontFamily="Roboto"
                        fontWeight={500}
                        fontSize ="42px"
                    >

                        Let's talk
                    </Typography>
            <Typography
            variant="body2"
            pt={1}
            >
                please fill the below form to send us message
            </Typography>
            </Box>
            <form  onReset= {formik.handleReset} onSubmit={formik.handleSubmit}>
                <Grid sx={{margin:.5,p:"12px"}} container lg={12} xs={10} spacing={3}>
                    <Grid lg={5} md={6} item>
                        <TextField 
                        type='text' 
                        variant="filled"
                        size="small"
                        color="primary"
                        label="First name"
                        name="firstName"
                        placeholder='enter your first name'
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                        sx={{mb:3}}
                        fullWidth
                        />
                        <TextField 
                        type='text' 
                        variant="filled"
                        size="small"
                        label="Last name"
                        name="lastName"
                        placeholder='enter your last name'
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                        sx={{mb:3}}
                        fullWidth
                        required
                        />
                        <TextField 
                        type='email' 
                        variant="filled"
                        size="small"
                        label="Email adress"
                        name="email"
                        placeholder="enter your email address "
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.firstName && formik.errors.email}
                        sx={{mb:3}}
                        fullWidth
                        required
                        />
                        <TextField 
                        type='text' 
                        variant="filled"
                        size="small"
                        label="Email subject"
                        name="subjectEmail"
                        placeholder="enter your email subject"
                        value={formik.values.subjectEmail}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.subjectEmail && Boolean(formik.errors.subjectEmail)}
                        helperText={formik.touched.subjectEmail && formik.errors.subjectEmail}
                        sx={{mb:3}}
                        fullWidth
                        required
                        />
                    </Grid>
                    <Grid  lg={6} xs={12} md={6} sm={12} item>
                        <TextField 
                            multiline
                            rows={10.4}
                            type='text' 
                            variant="filled"
                            size="small"
                            name="message"
                            label="your message"
                            placeholder="type your message here"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.message && Boolean(formik.errors.message)}
                            helperText={formik.touched.message && formik.errors.message}
                            fullWidth
                            required
                            />
                    </Grid>
                    <Grid item lg={12} sm={12} xs={12} md={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                />
                                }
                                label="By checking this box and submitting your information,
                                        you are granting us permission to email you. You may 
                                        unsubscribe at any time."
                        />
                    </Grid>
                    <Grid item lg={5} md={6}>
                        {sent ? <StyledButton
                                    type='submit'
                                >Send message
                                </StyledButton> :<Backdrop>
                                        <CircularProgress width="100%" height="100%" color="grey"/>
                                </Backdrop>}
                        
                    </Grid>
                </Grid>
            </form>
        </Container>
    </Box>
    )
}
export default FormContact ;

