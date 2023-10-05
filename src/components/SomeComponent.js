import React from "react";
import { Typography, Box } from "@mui/material";

function SomeComponent() {
  return (
    <Box py={5} bgcolor="#E89332" borderRadius={3} boxShadow={3} mt={4} px={3}>
      <Typography variant="h6" gutterBottom color="#3f51b5">
        Dette MÅ du gjøre
      </Typography>
      <Typography>
      Send meg penger
      </Typography>
    </Box>
  );
}


export default SomeComponent;
