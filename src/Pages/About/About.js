import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Follow from "../Shared/Follow/Follow";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const About = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <Typography
          sx={{
            m: 8,
            fontSize: "34px",
            fontWeight: 700,
            letterSpacing: "0.2499px",
            lineHeight: "41.99px",
          }}
        >
          About Us
        </Typography>
        <Grid container spacing={2} sx={{ textAlign: "left", mb: 12 }}>
          <Grid item xs={4} sx={{ pr: 6 }}>
            <Typography>
              We are passionate motorcycle enthusiasts changing the way that
              riders buy motorcycles. In an increasingly digital world,
              sometimes you need to get away, and we can help you do that. As a
              part of the Windy City Motorcycle Company we have the largest
              independently owned motorcycle inventory in the United States with
              over 1,000 motorcycles available for purchase. We sell all brands
              and all kinds, so regardless of what your 2 (or 3) wheeled vice
              is, we've got it. And you can enjoy peace of mind with your
              purchase as all of our motorcycles are inspected by
              factory-trained technicians. Check out our huge and constantly
              growing inventory and contact us with any questions. We look
              forward to serving you!
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ pr: 6 }}>
            <Typography>
              The best place to buy or sell pre-owned motorcycles is the Used
              Motorcycle Store, with our easy buying and selling processes. Our
              delivery and shipping policies mean you don’t even have to leave
              your home to get your new bike or sell your old one! Have a bike
              to sell? Choose the sell or trade-in options to find out more
              about what we can offer for your used motorcycles! We accept sales
              from across the United States, so we can offer the best prices to
              our customers from further away.
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ pr: 6 }}>
            <Typography>
              We carry a wide variety of motorcycle manufacturers at our
              dealership, encompassing all the major brands sold in the United
              States. All of our pre-owned inventory is ready to ride with
              inspections performed by factory-trained technicians. Whether you
              are looking for a chopper, cruiser, sports bike, trike, or touring
              motorcycle we’ve got the bike you need! If you don't see the bike
              of your dreams in our inventory let us know, we can get it!
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Follow />
      <Footer />
    </div>
  );
};

export default About;
