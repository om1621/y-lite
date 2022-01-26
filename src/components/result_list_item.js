import React from "react";
import { Box, Typography } from "@mui/material";

function ResultListItem({ video, onClickItem }) {
  return (
    <Box
      sx={{
        display: "flex",
        mb: 2,
        p: 2,
        boxShadow: "2px 2px 5px 5px rgb(199 199 199 / 50%)",
        cursor: "pointer",
      }}
      onClick={() => onClickItem(video)}
    >
      <Box sx={{ mr: 2 }}>
        <img
          style={{ width: "150px", height: "100px" }}
          src={video.snippet.thumbnails.high.url}
          alt="ThumbnailImage"
        />
      </Box>
      <Typography variant="button">{video.snippet.title}</Typography>
    </Box>
  );
}

export default ResultListItem;
