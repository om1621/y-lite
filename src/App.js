import React, { useState, useEffect, useCallback } from "react";
import { Container, Grid } from "@mui/material";
import SearchBox from "./components/search_box";
import axios from "axios";
import ResultList from "./components/result_list";
import VideoDetails from "./components/video_details";

function App() {
  const API_KEY = "AIzaSyDF6BV1ttWj0L9T243Y1OfIAdmRP8L5aA0";

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const getResults = useCallback(async (searchTerm) => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchTerm}&type=video&key=${API_KEY}`
      );

      setVideos(res.data.items);
      setSelectedVideo(res.data.items[0]);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getResults("osho jain");
  }, [getResults]);

  return (
    <Container maxWidth="lg" sx={{ px: 3, py: 3 }}>
      <SearchBox getVideos={(val) => getResults(val)} />
      <Grid columnSpacing={2} rowSpacing={4} sx={{ my: 1 }} container>
        <Grid item xs={12} sm={7}>
          <VideoDetails video={selectedVideo} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <ResultList
            videos={videos}
            onChangeVideo={(video) => setSelectedVideo(video)}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
