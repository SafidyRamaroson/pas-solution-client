import MainLayout from '../../layout/MainLayout';
import bgPasSolutionHome from "../../assets/images/bgPasSolutionHome.png";
import trainingImg from "../../assets/images/training.jpg";
import supportSage from "../../assets/images/supportSage.jpg";
import sage from "../../assets/images/Sage.jpg";
import sellIT from "../../assets/images/Sell IT.jpg";

import {
    Typography,
    Grid,
    Box,
    Paper,
    Container
} from '@mui/material';
import CustomPaper from '../../components/aboutUsComponents/CustomPaper';
import services  from '../../data/service';
import { Img , DividerStyled ,StyledContainer } from './aboutUsPage.styled'
export default function AboutUsPage () {
    return (
       <MainLayout>
            <Box sx={{width:"100vw",height:"80vh",backgroundImage:`url(${bgPasSolutionHome})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}></Box>
                <Box sx= {{ backgroundColor:"#f4f4f4",width:"100vw",height:"100vh",position:"relative",}}>
                    <Container sx={{width:"80%", height:"100%",borderRadius:"50px",backgroundColor:"transparent",position:"absolute",top:"40%",left:"50%",transform:"translate(-50%,-50%)"}}>
                        <Box sx={{position:"relative",width:"100%",minHeight :"90%",overflow:"hidden",paddingBottom:"0%",borderRadius:"50px",backgroundColor:"#FFF",border:"2px solid #F4F4F4"}}>
                            <Box style={{position:"absolute",top:2,left:0,width:"100%",height:"100%"}}>
                                <Typography component="h1" sx={{marginLeft:"40px",marginTop:"30px",fontFamily:"Roboto",fontWeight:700,fontSize:"45px",color:"#4285F4"}}>
                                        About us 
                                </Typography>
                                <Box sx={{marginTop:"15px"}}>
                                    <Typography component="p" sx={{margin:"20px 35px 35px 35px",lineHeight:"32px",opacity:.7}}>
                                        PAS Solution Ltd s'est enregistrée en novembre 
                                        2003 en tant que société privée avec pour objectif de mettre en œuvre un progiciel de comptabilité,
                                        de dispenser des formations sur une gamme de logiciels de comptabilité et de fournir des services 
                                        de conseil et des 
                                        services informatiques à tous les types d'entreprises à Maurice et à  Madagascar.
                                    </Typography>
                                </Box>
                            <Box sx={{margin:"15px 15px"}}>
                                <ul style={{marginBottom:"10px"}}>
                                    <li>
                                        <Typography component="p" sx={{margin:"5px 35px 20px 5px",lineHeight:"32px",opacity:.7}}>
                                            Le 8 août 2005, nous avons obtenu notre licence de formation 
                                            auprès de la Mauritius Qualifications Authority (MQA).
                                            Nous pensons que la formation est l'outil le plus efficace
                                            pour assurer une amélioration durable et c'est pourquoi notre 
                                            équipe de formateurs expérimentés propose ensuite différents 
                                            niveaux de formation dans toute l'organisation, après quoi nos 
                                            clients sont entièrement équipés pour la phase de développement du systeme                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography component="p" sx={{margin:"0px 35px 20px 5px",lineHeight:"32px",opacity:.7}}>
                                            Nous avons obtenu notre ATC (Centre de Formation Autorisé) en janvier 2007 
                                            auprès de Sage Pastel International ; notre personnel est un installateur 
                                            certifié Pastel. En janvier 2014, nous nous sommes lancés dans des projets 
                                            à Madagascar mettant ainsi en œuvre les normes comptables françaises auprès 
                                            de diverses entreprises internationales.
                                        </Typography>
                                    </li>
                                </ul>
                            </Box>
                        </Box>
                        </Box>
                    </Container>
                </Box>
                <Box sx={{width:"100vw",minHeight:"100vh"}}>
                    <Container sx={{width:"80%"}}>
                        <Box>
                            <Typography
                            variant="h3"
                            sx={{marginTop:"60px",color:"#4285F4",fontFamily:"Roboto",fontWeight:"700"}}
                            >
                                Our Mission
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                            variant="body2"
                            component="p" 
                            sx={{marginTop:"15px",pb:4,fontSize:"1.2rem",opacity:".7",lineHeight:"32px"}}>
                                Notre mission est d'avoir une compréhension approfondie des besoins de nos 
                                clients, d'être leurs partenaires 
                                de longue date et de fournir de la valeur grâce aux meilleures solutions
                                informatiques de leur catégorie.
                                <br/>
                                Les employés de PAS Solution Ltd sont animés par des valeurs fondamentales 
                                fortes : le travail d'équipe, la confiance, la transparence, le 
                                professionnalisme, l'intégrité, l'honnêteté, l'innovation et l'informatique.
                            </Typography>
                        </Box>
                        <Box sx={{minHeight:"420px",display:"flex",justifyContent:"center", alignItems:"center",marginBottom:"40px",maxWidth:"1000px"}}>
                            <Box>
                                <Box marginLeft="20px" marginBottom="30px" padding="10px" backgroundColor="#F4F4F4">
                                        <img style={{maxHeight:"200px"}}src={supportSage} alt="pas"></img>
                                        <Box marginTop="15px">
                                            <Typography component="h3" color="#000" fontWeight="700" fontFamily="Roboto">Sage support</Typography>
                                        </Box>
                                </Box>

                                <Box marginLeft="20px" marginBottom="30px" padding="10px" backgroundColor="#F4F4F4">
                                    <img style={{maxHeight:"200px"}} src={sellIT} alt="pas"></img>
                                    <Box marginTop="15px">
                                        <Typography component="h3"  fontWeight="700" fontFamily="Roboto" color="#000">Sell IT Tech</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Box marginLeft="20px" marginBottom="30px" padding="10px" backgroundColor="#F4F4F4">
                                        <img style={{maxHeight:"200px"}}src={trainingImg} alt="pas"></img>
                                    <Box marginTop="15px">
                                        <Typography component="h3"  fontWeight="700" fontFamily="Roboto" color="#000">Training</Typography>
                                    </Box>
                                </Box>
                                <Box marginLeft="20px" marginBottom="30px"padding="10px" backgroundColor="#F4F4F4">
                                        <img style={{maxHeight:"200px"}} src={sage} alt="pas"></img>
                                    <Box marginTop="15px">
                                        <Typography component="h3" color="#000"  fontWeight="700" fontFamily="Roboto">Sage</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            {/* </Box> */}
       </MainLayout>
    )
}
