import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import { NavLink } from "react-router-dom";
import MuiButton from "../../../Shared/StyledComponent/MuiButton/MuiButton";

const bannerBg = {
  background: `url(https://images.unsplash.com/photo-1572452571879-3d67d5b2a39f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80)`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  backgroundColor: "rgba(9, 11, 15, 0.6)",
  backgroundBlendMode: "darken,luminosity",
  backgroundAttachment: "fixed",
};

const verticalCenter = {
  display: "flex",
  height: "100%",
  alignItems: "center",
};
const Banner = () => {
  return (
    <Container
      id="banner"
      style={bannerBg}
      sx={{
        flexGrow: 1,
        mt: 2,
        width: "100%",
        height: "100%",
      }}
      maxWidth="false"
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={6}
          sx={{
            textAlign: "start",
            mx: 10,
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <Typography
            variant="h2"
            sx={{ my: 5 }}
            style={{ color: "white", fontWeight: 600, fontSize: "4rem", p: 5 }}
          >
            Choose From Close to a Million Bike
          </Typography>
          <Typography
            variant="h6"
            sx={{ my: 5 }}
            style={{ color: "white", fontSize: "1.6rem", fontWeight: 300 }}
          >
            Get access to our extensive selection of pre-owned vehicles for sale
            across the US, and see price ratings based on similar used car
            listings in your area, so you know when you’re getting a great deal.
          </Typography>
          <NavLink
            to="/explore"
            style={{ textDecoration: "none", marginBottom: "50px" }}
          >
            <MuiButton>Explore</MuiButton>
          </NavLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
