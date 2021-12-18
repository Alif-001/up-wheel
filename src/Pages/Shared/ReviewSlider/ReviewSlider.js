import { Container, Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function ReviewSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    adaptiveWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [reviews, setReviews] = useState([]);
  ///load reviews
  useEffect(() => {
    axios.get("http://localhost:5000/review").then((res) => {
      setReviews(res.data);
    });
  }, []);
  console.log(reviews);

  return (
    <div>
      <Container sx={{ my: 8 }}>
        <Typography variant="h4" fontWeight="bold">
          Reviews
        </Typography>
        <Grid
          container
          columns={{ xs: 4, sm: 6, md: 6 }}
          sx={{
            boxShadow: 2,
            bgcolor: "background.paper",
            borderRadius: "20px",
            justifyContent: "center",
            textAlign: "center",
            my: 6,
            py: 6,
            px: 10,
          }}
        >
          <Grid
            item
            xs={6}
            sm={6}
            md={12}
            sx={{ display: "flex", justifyContent: "space-evenly", mt: 5 }}
          >
            <Container className="slider">
              <Slider {...settings}>
                {reviews?.map((review) => (
                  <Box>
                    <Box sx={{ textAlign: "center", p: 3, mt: 3 }}>
                      <Typography
                        color="dark"
                        style={{ textTransform: "uppercase" }}
                      >
                        {review?.name}
                      </Typography>
                      <Typography sx={{ mt: 3 }} variant="subtitle1">
                        "{review?.review}"
                      </Typography>
                      <Box
                        sx={{
                          my: 3,
                        }}
                      >
                        {" "}
                        <Rating
                          sx={{ color: "gold" }}
                          name="half-rating-read"
                          defaultValue={review?.rating}
                          precision={0.5}
                          readOnly
                        />
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Slider>
            </Container>
            {/* <Box className="reviewing">
              <img
                src="https://i.ibb.co/nnCX3KC/361-3619713-online-reviews-png-transparent-png-removebg-preview.png"
                alt=""
                width="500px"
              />
            </Box> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ReviewSlider;
