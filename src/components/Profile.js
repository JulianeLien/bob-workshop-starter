import React from "react";
import { Avatar, Typography, Stack } from "@mui/material";

function Profile() {
  return (
    <Stack
      alignItems="center"
      textAlign="center"
      py={5}
      bgcolor="#E89332"
      borderRadius={3}
      boxShadow={3}
      spacing={2}
    >
      <Avatar
        src="/katt.PNG"
        alt="Blomst"
        sx={{
          width: 150,
          height: 150,
          margin: "auto",
          border: "4px solid #3f51b5",
        }}
      />
      <Typography variant="h4" gutterBottom color="#12345">
        Leo Løvetann
      </Typography>
    </Stack>
  );
}

export default Profile;
