import React from "react";
import { Box } from "@mui/material";
import ResultListItem from "./result_list_item";

const ResultList = ({ videos, onChangeVideo }) => {
  return (
    <Box>
      {videos.map((video) => (
        <ResultListItem
          key={video.snippet.thumbnails.high.url}
          video={video}
          onClickItem={onChangeVideo}
        />
      ))}
    </Box>
  );
};

export default ResultList;
