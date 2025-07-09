import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        height: "100px",
        width: "100%",
        background: "#0E46A3",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <Typography variant="body1">
        © {new Date().getFullYear()} ProFitness Store. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
