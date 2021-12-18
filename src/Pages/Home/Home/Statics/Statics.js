import LayersIcon from "@mui/icons-material/Layers";
import PersonIcon from "@mui/icons-material/Person";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const bannerBg = {
  background: `url(https://images.unsplash.com/photo-1551368321-dddf8a05c459?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",

  //   height: "100%",
  backgroundColor: "rgba(9, 11, 15, 0.7)",
  backgroundBlendMode: "darken,luminosity",
  backgroundAttachment: "fixed",
};

const Statics = () => {
  return (
    <Grid container spacing={2} sx={{ my: 12 }} style={bannerBg}>
      {" "}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          color: "white",
          my: "50px",
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        <Box>
          <Typography className="hexagon">
            <PersonIcon sx={{ fontSize: "3rem" }} />
          </Typography>
          <Typography sx={{ fontSize: "2rem", fontWeight: 600 }}>
            125454
          </Typography>
          <Typography sx={{ fontSize: "1rem" }}>Happy customers</Typography>
        </Box>
        <Box>
          <Typography className="hexagon">
            <LayersIcon sx={{ fontSize: "3rem" }} />
          </Typography>
          <Typography sx={{ fontSize: "2rem", fontWeight: 600 }}>
            100000
          </Typography>
          <Typography sx={{ fontSize: "1rem" }}>Item</Typography>
        </Box>
        <Box>
          <Typography className="hexagon">
            <VisibilityIcon sx={{ fontSize: "3rem" }} />
          </Typography>
          <Typography sx={{ fontSize: "2rem", fontWeight: 600 }}>
            888888
          </Typography>
          <Typography sx={{ fontSize: "1rem" }}>Views</Typography>
        </Box>
        <Box>
          <Typography className="hexagon">
            <PointOfSaleIcon sx={{ fontSize: "3rem" }} />
          </Typography>
          <Typography sx={{ fontSize: "2rem", fontWeight: 600 }}>
            31425
          </Typography>
          <Typography sx={{ fontSize: "1rem" }}>Sales</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Statics;
