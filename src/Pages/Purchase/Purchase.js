import { Container, Divider, Grid, Rating, Typography } from "@mui/material";
import { styled } from "@mui/styles";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import BuyNow from "../Shared/BuyNow/BuyNow";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "gold",
  },
});

const Purchase = () => {
  const [bike, setBike] = useState("");
  const { bikeId } = useParams();

  //load single bike
  useEffect(() => {
    axios
      .get(`https://limitless-sierra-79316.herokuapp.com/singleBike/${bikeId} `)
      .then((res) => {
        setBike(res.data);
      });
  }, [bikeId]);
  console.log(bike);

  return (
    <>
      <Navigation />
      <Container>
        <Box sx={{ my: 12 }}>
          <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={3}>
            <Grid xs={4} sm={4} md={8} item>
              <img width="100%" src={bike?.img} alt="" />
              <Box>
                <Box sx={{ my: 4 }}>
                  {" "}
                  <Typography textAlign="left" fontWeight="bold" variant="h4">
                    {bike?.title}
                  </Typography>
                  <Box
                    sx={{
                      // display: "flex",
                      // justifyContent: "space-between",
                      textAlign: "start",
                      my: 3,
                    }}
                  >
                    {" "}
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "#0061ff",
                        my: 2,
                      }}
                    >
                      Price : ${bike?.price}
                    </Typography>
                    <StyledRating
                      // sx={{ ms: "auto" }}
                      size="small"
                      name="half-rating"
                      defaultValue={bike?.rating || 0}
                      readOnly
                    />
                  </Box>
                </Box>
                <Divider sx={{ my: 3 }} />
                <Typography sx={{ textAlign: "start" }}>
                  {bike?.desc}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <BuyNow bike={bike} />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Purchase;
