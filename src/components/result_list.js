import React from "react";
import { Box } from "@mui/material";
import ResultListItem from "./result_list_item";

const ResultList = ({ videos, onChangeVideo }) => {
  return (
    <Box>
      {videos.map((video, index) => (
        <ResultListItem
          key={video.snippet.thumbnails.high.url}
          video={video}
          onClickItem={onChangeVideo}
          index={index}
        />
      ))}
    </Box>
  );
};

export default ResultList;
