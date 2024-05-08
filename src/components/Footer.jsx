import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        height: "100px",
        width: "100%",
        background: "#0E46A3",
      }}
    >
      <Typography variant="h3">Copyright@ profitness store</Typography>
    </Box>
  );
};

export default Footer;
