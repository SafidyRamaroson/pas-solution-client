import React, { useState, useEffect } from 'react';
import { Grid, Card, CardActionArea, CardMedia, Dialog, DialogContent, Typography } from '@mui/material';

const VideoGrid = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {

      const fetchData = async () =>{
        try{
          const response = await fetch('https://node-express-mysql-api.onrender.com/videos/getVideoFromDabatase');
          const data = await response.json() ;
          setVideos(data.videoFromDB);
          console.log(data.videoFromDB);
        }catch(error){
          console.error(error);
          setError(error);
        }
    };

    fetchData();
  }, []); // Exécuter une seule fois lors du montage du composant

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleCloseDialog = () => {
    setSelectedVideo(null);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Grid container spacing={2}>
        {videos.map((video, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} sx={{padding:"15px 10px"}}>
            <Card onClick={() => handleVideoClick(video)} sx={{marginTop:"18px",marginLeft:"15px",marginRigth:"15px"}}>
              <CardActionArea sx={{borderRadius:"3px",boxShadow:"none !important"}}>
                <CardMedia
                  component="img"
                  alt={video.title}
                  height="140"
                  image={video.thumbnail}
                />
                <Typography sx={{padding:2,MaxHeigth:"50px !important"}}  textOverflow="clip" variant="title2" fontFamily="Roboto" fontWeight="500" component="h3">
                  {video.title}
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={!!selectedVideo} onClose={handleCloseDialog}>
        <DialogContent>
          {selectedVideo && (
            <iframe
              title={selectedVideo.title}
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
            
              allowFullScreen
            ></iframe>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VideoGrid;
