import {
  Button,
  CardActionArea,
  CardActions,
  Divider,
  Rating,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles, styled } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "gold",
  },
});
///make custom styles
const useStyles = makeStyles({
  root: {
    textDecoration: "none",
    color: "black",
  },
});

const SingleBike = ({ bike }) => {
  const { root } = useStyles();
  return (
    <Card
      className="card"
      sx={{ maxWidth: 345, height: 550, borderRadius: "20px" }}
    >
      {" "}
      <CardActionArea sx={{ pt: 3 }}>
        <img src={bike?.img} height="200" width="100%" alt="bike" />
      </CardActionArea>
      <CardContent>
        <Typography textAlign="left" gutterBottom variant="h6" component="div">
          {bike?.title}
        </Typography>

        <Box sx={{ textAlign: "start" }}>
          <Typography
            gutterBottom
            variant="subtitle1"
            fontWeight="bold"
            component="div"
          >
            Price : ${bike?.price}
          </Typography>
          <StyledRating
            // sx={{ ms: "auto" }}
            size="small"
            color="gold"
            name="half-rating"
            defaultValue={bike?.rating}
            readOnly
          />
        </Box>
        <Divider />
        <Typography
          textAlign="left"
          sx={{ pt: 2 }}
          variant="body2"
          color="text.secondary"
        >
          {bike?.desc.slice(0, 100)}...
        </Typography>
      </CardContent>
      <CardActions sx={{ my: 1 }}>
        <Box sx={{ mx: "auto" }}>
          {" "}
          <Link className={root} to={`/purchase/${bike?._id}`}>
            <Button
              className="button"
              variant="Contained"
              size="small"
              // color="error"
              sx={{ color: "white", bgcolor: "#0061ff" }}
            >
              Buy Now
            </Button>
          </Link>
        </Box>
      </CardActions>
    </Card>
  );
};

export default SingleBike;
