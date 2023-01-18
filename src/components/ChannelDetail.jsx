import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {Videos,ChannelCard} from './'
import { fetchFromApi } from '../utils/fetchFromApi'

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])


  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]))
    
      fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))
  
   
  }, [id])
  
  return (
    <Box minHeight='90vh'>
      <Box>
        <div style={{
          background: 'orange',
          zIndex: 10,
          height:'300px'
        
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
      </Box> 
      

      <Box display='flex' p='2'> 
        <Box sx={{
          mr: {
            sm:'100px'
          }
        }} /> 
        <Videos videos={ videos} />
        

        </Box> 

    </Box>
  )
}

export default ChannelDetail