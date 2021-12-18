import { Call, Email } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ pt: 15, bgcolor: "black" }}>
      <Container>
        <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid xs={4} sm={4} md={3} item textAlign="left">
            <Typography color="white" sx={{ pl: 2 }}>
              INFORMATION
            </Typography>
            <List sx={{ textAlign: "left" }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <Typography variant="subtitle1" color="lightgrey">
                    Explore
                  </Typography>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Typography variant="subtitle1" color="lightgrey">
                    Our Stores
                  </Typography>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Typography variant="subtitle1" color="lightgrey">
                    Contact Us
                  </Typography>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Typography variant="subtitle1" color="lightgrey">
                    Search Terms
                  </Typography>
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
          <Grid textAlign="center" xs={4} sm={4} md={3} item>
            <Typography textAlign="left" color="white">
              CONTACT
            </Typography>
            <Box
              sx={{
                color: grey[400],
                mt: 2,
                display: "flex",
                textAlign: "left",
              }}
            >
              {" "}
              <LocationOnIcon />{" "}
              <Typography sx={{ mx: 1 }}> Dhaka,Bangladesh</Typography>
            </Box>
            <Box
              sx={{
                color: grey[400],
                mt: 2,
                display: "flex",
                textAlign: "left",
              }}
            >
              {" "}
              <Call /> <Typography sx={{ mx: 1 }}> +111111111111</Typography>
            </Box>
            <Box
              sx={{
                color: grey[400],
                mt: 2,
                display: "flex",
                textAlign: "left",
              }}
            >
              {" "}
              <Email />{" "}
              <Typography sx={{ mx: 1 }}> support@superbike.com</Typography>
            </Box>
          </Grid>
        </Grid>
        <Box>
          <Typography sx={{ mt: 5, pb: 2 }} color="lightgrey">
            &copy; copyright all right reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
