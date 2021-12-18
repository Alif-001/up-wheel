import { Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MuiButton from "../../../Shared/StyledComponent/MuiButton/MuiButton";

const Newsletter = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        boxShadow: 2,
        bgcolor: "background.paper",
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          //   bgcolor: "#cfe8fc",
          height: "60vh",
          borderRadius: "15px",

          justifyContent: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="h4" sx={{ mt: 8, fontWeight: 700 }}>
              SIGN UP FOR NEWSLETTER
            </Typography>
            <Typography variant="body1" sx={{ m: 3 }} gutterBottom>
              You may unsubscribe at any moment. For that purpose, please find
              our contact info in the legal notice.
            </Typography>
            <Box
              sx={{
                width: "100%",
                maxWidth: "100%",
                display: "flex",
              }}
            >
              <TextField
                fullWidth
                label="Email"
                id="fullWidth"
                sx={{ mr: 1 }}
              />
              <MuiButton>Subscribe</MuiButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Newsletter;
