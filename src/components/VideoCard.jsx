import { CheckCircle } from '@mui/icons-material'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants'




const VideoCard = ({video:{id:{videoId},snippet}}) => 
   (
  <Card sx={{
    width: {
      xs: '100%',
      sm:'360px',
      md: '320px',
      boxShadow: 'none',
      borderRadius:0
      }
    }}>
      
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
        
          alt={snippet?.title}
          sx={{
            width: {
              xs: '100%',
              sm: '360px',
              md: '320px',
            },
            height:200
          }}
        />
      </Link>

      <CardContent sx={ 
        {
          backgroundColor: '#1e1e1e',
          height: '110px',
          width:'320px'
        }
      } >

        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          
          <Typography variant='subtitle1'
            fontWeight='bold' color='#FFF'>
          
            {
              snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 50)
            
            }
             
            

          </Typography>        
        </Link>


      
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          
          <Typography variant='subtitle2'
            fontWeight='bold' color='gray'>
          
            {
              snippet?.channelTitle||demoChannelTitle
            
          }
          
          <CheckCircle sx={{
            fontSize: 13,
            color: 'gray',
            ml: '5px',
          }} />
             
            

          </Typography>        
        </Link>
        </CardContent>
    </Card>
  )


export default VideoCard