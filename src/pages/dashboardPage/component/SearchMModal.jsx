import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Input from '@mui/material/Input';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import DescriptionIcon from '@mui/icons-material/Description';
import {styled } from '@mui/material';


const SearchModal = ({ open, handleClose }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [selectedFile,setSelectedFile] = useState(null);
  const [selectedVideo,setSelectedVideo]= useState(null);


  const handleSearch = async () => {
    try {
      const response = await fetch(`https://node-express-mysql-api.onrender.com/api/search?query=${searchText}`);
      const data = await response.json();
      setFilteredData(data);
    } catch (error) {
      console.error('Erreur lors de la recherche :', error);
    }
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
    handleSearch();
  };

  const handleCellClick = (item) =>{
    //ferme la boite de dialog 
    handleClose();
    //if it's a doc
    if (item.type === 1){
      setSelectedFile(item)
      newTab();
    }
    //if it's a video
    if (item.type === 2){
      setSelectedVideo(item);
    }
  }

  const newTab = (id)=>{
    if (selectedFile.id != null){
      const newTab = window.open(`https://drive.google.com/file/d/${selectedFile.id}/view`, '_blank');
      if (newTab) {
        newTab.focus();
        setSelectedFile(null);
      }
    }
    }
    
    const handleCloseDialog = () =>{
      setSelectedVideo(null)
    }

  const StyledTableCell =styled(TableCell)(({theme}) =>({
    '&:hover':{
      color:"#151733",
      textDecoration:"underline",
      cursor:"pointer"
    }
}))

  return (
    <>
    <Dialog key="search" open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogContent>
        <Box sx={{display:"flex"}}>
            <Input
            placeholder="Search..."
            fullWidth
            value={searchText}
            onChange={handleChange}
            />
        </Box>
        <TableContainer sx={{height:"400px",marginTop:"12px"}}>
          <Table>
            <TableHead sx={{display:"none !important"}}>
              <TableRow>
                <TableCell>icon</TableCell>
                <TableCell>Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {filteredData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    {item.type === 1 ? (
                       <DescriptionIcon  sx={{color:"#1755b3"}}/>
                    ) : (
                      <VideoLibraryIcon  sx={{color:"#e33e10"}} />
                    )}
                  </TableCell>
                  <StyledTableCell onClick={() => handleCellClick(item)} sx={{width:"95%",fontSize:"14px",fontWeight:"bold"}}>{item.name}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
    </Dialog>

    <Dialog key="video" open={!!selectedVideo} onClose={handleCloseDialog}>
        <DialogContent>
          {selectedVideo && (
            <iframe
              title={selectedVideo.name}
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${selectedVideo.id}`}
            
              allowFullScreen
            ></iframe>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}


export default SearchModal;
