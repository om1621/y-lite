import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";

function VideoDetails({ video }) {
  console.log(video);
  return (
    <Box>
      {video !== null ? (
        <>
          <Box className="iframe-container">
            <iframe
              className="responsive-iframe"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
            />
          </Box>
          <Box sx={{ my: 2, backgroundColor: "#eeeeee", p: 2 }}>
            <Typography variant="button">{video.snippet.title}</Typography>
            <Typography sx={{ mt: 1 }} variant="subtitle1">
              {video.snippet.description}
            </Typography>
          </Box>
        </>
      ) : (
        <LinearProgress />
      )}
    </Box>
  );
}

export default VideoDetails;
