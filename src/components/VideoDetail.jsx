import { CheckCircle } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams, Link } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";

import { Videos } from "./";
import Loader from "./Loader";

const VideoDetail = () => {
  const [videos,setVideos]=useState(null)
  const [videoDetail, setvideoDetail] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistices&id=${id}`).then((data) =>
      setvideoDetail(data.items[0])
    );
    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) =>
    setVideos(data.items)
    );
  }, [id]);


  if(!videoDetail?.snippet) return <Loader/>
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <Box minHeight="90vh">
      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
      >
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: "90px",
            }}
          >
            <ReactPlayer
              url={`https://youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />

            <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>{title}</Typography>

            <Stack direction='row'
              justifyContent='space-between'
              py={1}
              px={2}
              sx={{
              color:'#fff'
              }}>
              
              <Link to={`/channel/${channelId}`}>
                <Typography color='#fff' variant={{
                  sm: 'subtitle1',
                  md: 'h6',
                  
                }}>
                {channelTitle}
                  <CheckCircle sx={{
                    fontSize: '12px',
                    color: 'gray',
                    ml:'5px'
                  }} />
                </Typography>
              </Link>



              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{opacity:0.7}}>
                  {parseInt(viewCount).toLocaleString()} Views
                </Typography>
                <Typography variant='body1' sx={{opacity:0.7}}>
                  {parseInt(likeCount).toLocaleString()} Likes
              </Typography>
                
            </Stack>
            </Stack>
          </Box>
        </Box>


      <Box px={2} py={{md:1,xs:5}} justifyContent='center' alignItems='center'>
        <Videos videos={videos} direction='column'/>
    </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
