import React, { useState } from "react";
import { TextField, Box } from "@mui/material";

function SearchBox({ getVideos }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Box>
      <TextField
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          getVideos(e.target.value);
        }}
        placeholder="anuv jain"
        size="medium"
        fullWidth={true}
      />
    </Box>
  );
}

export default SearchBox;
