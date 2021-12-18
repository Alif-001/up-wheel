import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Follow = () => {
  return (
    <Container
      className="follow"
      style={{
        background: "linear-gradient(135deg,#0061ff,#60efff)",
        borderRadius: "20px",
        color: "white",
      }}
    >
      <Grid>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Follow us
        </Typography>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            textAlign: "left",
            justifyContent: "space-evenly",
          }}
        >
          {" "}
          <FacebookIcon sx={{ mx: 1 }} />
          <GoogleIcon sx={{ mx: 1 }} />
          <TwitterIcon sx={{ mx: 1 }} />
          <LinkedInIcon sx={{ mx: 1 }} />
        </Box>
      </Grid>
    </Container>
  );
};

export default Follow;
