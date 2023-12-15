import { useEffect, useState} from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import { Container, TablePagination, styled } from '@mui/material';
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";


const FileList = () =>{
  const [files, setFiles] = useState([]);

  const handleFileClick = (file) => {
    window.open(`https://drive.google.com/file/d/${file.id}/view`, '_blank');
  };
  
     const [page, setPage] = useState(0);
     const [rowsPerPage, setRowsPerPage] = useState(10);
   
     const handleChangePage = (event, newPage) => {
       setPage(newPage);
     };
   
     const handleChangeRowsPerPage = (event) => {
       setRowsPerPage(parseInt(event.target.value, 10));
       setPage(0);
     };
  const StyledTableContainer =styled(TableContainer)(({theme}) =>({
    // border:"4px solid red !important",
    // height:"550px",
    marginTop:"50px",
    marginBottom:"30px !important",
    borderRadius:"10px !important",
    '& .MuiTableHead-root':{
      // backgroundColor:"#727273 !important",
      position:"sticky !important",
      top:0
    },
    '& .MuiTableHead-root tr th':{
      color:"#000 !important",
      // backgroundColor:"#a9c7f5"
    },
    '& .MuiTableBody-root .MuiTableRow-root:nth-child(odd)':{
      backgroundColor:"#F4F4F4 !important",
    },  
    '& .MuiTableRow-root td':{
      color:"#000",
      fontFamily:"Roboto !important",
      fontWeigth:700,
      fontSize:"16px !important"
    },
    // '& .MuiTableBody-root tr':{
    //   border:"4px solid red",
    //   padding:"0px 0px !important"
    // },

}))
  const styles = {
    tableRow:{
      height:"5px !important",
      border:"2px solid red"
    }
  }
   useEffect (() => {
    const fetchData = async () =>{
      try{
        const response = await fetch('https://node-express-mysql-api.onrender.com/files/getFilesFromDabatase');
        const data = await response.json() ;
        setFiles(data.filesFromDB);
        console.log(data.filesFromDB);
      }catch(error){
        console.error(error);
      }
    }

    fetchData();
   }, []);
 
   return (
    <Container>
     <Paper>
       <StyledTableContainer>
         <Table>
           <TableHead>
             <TableRow>
               <TableCell>Nom</TableCell>
               <TableCell>Taille</TableCell>
               <TableCell>Action</TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
             {files.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((file) => (
               <TableRow key={file.id}>
                 <TableCell>{file.name}</TableCell>
                 <TableCell>{file.size}</TableCell>
                 <TableCell>
                   <IconButton onClick={() => handleFileClick(file)} variant="outlined" color="primary">
                      <VisibilityIcon color="#1755b3"/>
                   </IconButton>

                 </TableCell>
               </TableRow>
             ))}
           </TableBody>
         </Table>
       </StyledTableContainer>
       <TablePagination
         rowsPerPageOptions={[5, 10, 25]}
         component="div"
         count={files.length}
         rowsPerPage={rowsPerPage}
         page={page}
         onPageChange={handleChangePage}
         onRowsPerPageChange={handleChangeRowsPerPage}
       />
     </Paper>
    </Container>
   );
 };

export default FileList;