import React from 'react';
import { Box } from '@mui/system';
import {Divider, Grid, Paper, Typography} from '@mui/material';
import {Container} from '@mui/system';
import MainLayout from '../../layout/MainLayout';
import FormContact from '../../components/contactComponent/FormContact';

function ContactPage () {
    return (
      <MainLayout>
          <FormContact/>
          <Box
              height="50vh"
            >
              <Container>
                <Box>
                    <Typography
                    variant='h4'
                    mt={10}
                    mb={2}
                    p={1}
                    color="#4285F4"
                    fontFamily ="Roboto"
                    fontSize="35px"
                    fontWeight={500}
                    >
                      Business Hours
                    </Typography>
                </Box>
                <Box sx={{
                 display:"flex",
                 width:"100%",
                }}>
                    <Paper elevation="1"  sx={{width:"50vw", m:2,p:3}}>
                        <Typography variant="h5">Monday - Friday</Typography>
                        <Divider sx={{marginTop:"12px"}}/>
                        <Typography variant="body1" color="#D3D372">Open</Typography>
                    </Paper>
                    <Paper elevation="2"   sx={{width:"50vw", m:2,p:3}}>
                        <Typography variant="h5">Saturday - Sunday</Typography>
                        <Divider sx={{marginTop:"12px"}}/>
                        <Typography variant="body1" color="#D37272">Closed</Typography>
                    </Paper>
                </Box>
              </Container>
          </Box>
      </MainLayout>
    )
}

export default ContactPage ;