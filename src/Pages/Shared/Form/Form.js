import { Container, Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import MuiButton from "../StyledComponent/MuiButton/MuiButton";

const Form = () => {
  const useStyles = makeStyles({
    root: {
      height: 200,
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      opacity: 1,
      transition: "all ease-in .5s",
      "&:hover": {
        filter: "grayscale(100%)",
        opacity: 0.8,
        transform: "translateY(-10px)",
      },
    },
  });
  const { root } = useStyles();
  return (
    <div>
      <Container>
        <Box sx={{ my: 8 }}>
          <Grid columns={{ xs: 4, sm: 8, md: 12 }} container>
            <Grid item xs={12} sm={12} md={12}>
              <Box
                sx={{
                  width: "500",
                  maxWidth: "100%",
                  margin: "auto",
                }}
              >
                <TextField
                  fullWidth
                  label="Name"
                  id="Name"
                  style={{ marginBottom: "20px" }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  id="Email"
                  style={{ marginBottom: "20px" }}
                />

                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  id="message"
                  rows={4}
                  style={{ marginBottom: "20px" }}
                />
                <MuiButton type="submit">Send</MuiButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Form;
