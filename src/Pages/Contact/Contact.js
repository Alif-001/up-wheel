import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Footer from "../Shared/Footer/Footer";
import Form from "../Shared/Form/Form";
import Navigation from "../Shared/Navigation/Navigation";

const Contact = () => {
  return (
    <div>
      <Navigation />
      <Box sx={{ my: 5 }}>
        <Typography variant="h4" fontWeight="bold">
          Contact Us
        </Typography>
      </Box>
      <Form />
      <Footer />{" "}
    </div>
  );
};

export default Contact;
