import React, { useState } from "react";
import { TextField, Box, Button } from "@mui/material";

function SearchBox({ getVideos }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <TextField
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        placeholder="anuv jain"
        size="large"
        fullWidth={true}
      />
      <Button
        disabled={searchTerm.trim().length === 0}
        size="medium"
        sx={{ ml: 3 }}
        variant="contained"
        color="inherit"
        onClick={() => getVideos(searchTerm)}
      >
        Search
      </Button>
    </Box>
  );
}

export default SearchBox;
