import React from 'react'
import { Stack,Box } from '@mui/material'

import { VideoCard, ChannelCard } from './'
import Loader from './Loader'


const Videos=({ videos,direction })=> {

  if(!videos?.length) return <Loader/>
  return (
    <Stack
      direction={direction || 'row'}
      flexWrap='wrap'
      justifyContent='start'
      alignItems='start'
      gap={2}
    
    >
      {
        videos.map((video, index) => (
          <Box
            key={index}>
            
            {
              video.id.videoId && <VideoCard video={ video} />
            }
            {
              video.id.channelId && <ChannelCard channelDetail={ video} />
            }
            


            </Box>
        ))
      }
      
   </Stack>
  )
}

export default Videos