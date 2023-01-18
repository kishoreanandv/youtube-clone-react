import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  return (
    <Box
      p={2}
      minHeight='90vh'     
    >
      <Typography
        variant="h4"
        fontWeight={900}
        color='#fff'
        mb={3}
        ml={
          {
            sm:'100px'
          }
        }
      
      >
        Searched results For :
        <span
          style={{
            color: "#FC1503",
            marginLeft:'5px',
            marginRight:'5px'
          }}
        >
          {searchTerm}
        </span>
         videos
      </Typography>

      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;
