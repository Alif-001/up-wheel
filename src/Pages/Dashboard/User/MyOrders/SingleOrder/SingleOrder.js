import {
  Button,
  CardActionArea,
  CardActions,
  Divider,
  Rating,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { green, red } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { makeStyles, styled } from "@mui/styles";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import MuiButton from "../../../../Shared/StyledComponent/MuiButton/MuiButton";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "gold",
  },
});

///make custom styles
const useStyles = makeStyles({
  root: {
    textDecoration: "none",
  },
  status: {
    color: "white",
    fontWeight: "bold",
    borderRadius: "5%",
    width: "50%",
  },
});

const SingleOrder = ({ order }) => {
  //delete bike
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your order will be canceled!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/deleteOrder/${id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire("Cancel!", "Your order has been deleted.", "success");
          }
        });
      }
    });
  };
  console.log(order);
  const { root, status } = useStyles();
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 630,
        borderRadius: "20px",
      }}
    >
      <CardActionArea>
        <Box sx={{ mx: 3, mt: 1 }}>
          {order?.status === "Pending" && (
            <Typography
              variant="subtitle1"
              className={status}
              sx={{ bgcolor: red[700], mr: "auto" }}
            >
              {order?.status}
            </Typography>
          )}
          {order?.status === "Shipped" && (
            <Typography
              variant="subtitle1"
              className={status}
              sx={{ bgcolor: green[500], ml: "auto" }}
            >
              {order?.status}
            </Typography>
          )}
          {order?.status === "Rejected" && (
            <Typography
              variant="subtitle1"
              className={status}
              sx={{ bgcolor: red[700], ml: "auto" }}
            >
              {order?.status}
            </Typography>
          )}
        </Box>
        <img src={order?.bikeInfo?.img} height="auto" width="100%" alt="bike" />
      </CardActionArea>
      <CardContent>
        {" "}
        <Typography
          sx={{ textAlign: "left" }}
          gutterBottom
          variant="h6"
          component="div"
        >
          {order?.bikeInfo?.title}
        </Typography>
        <Box sx={{ textAlign: "left" }}>
          <Typography
            gutterBottom
            variant="subtitle1"
            fontWeight="bold"
            component="div"
          >
            Price : ${order?.bikeInfo?.price}
          </Typography>
          <StyledRating
            sx={{ ms: "auto" }}
            size="small"
            color="#0061ff"
            name="half-rating"
            defaultValue={order?.bikeInfo?.rating}
            readOnly
          />
        </Box>
        <Divider />
        <Typography
          textAlign="left"
          gutterBottom
          sx={{ mt: 1 }}
          variant="subtitle1"
          component="div"
        >
          {order?.bikeInfo?.desc.slice(0, 50)} ...
        </Typography>
      </CardContent>
      <CardActions
        sx={{ my: 1, display: "flex", justifyContent: "space-between" }}
      >
        <Link className={root} to={`/purchase/${order?.bikeInfo?._id}`}>
          <MuiButton variant="contained" size="small" sx={{ ml: 1 }}>
            Details
          </MuiButton>
        </Link>
        <Box
          onClick={() => handleDelete(order?._id)}
          sx={{ textAlign: "right" }}
        >
          <Button className="cancel" variant="contained" color="error">
            Cancel
          </Button>
          {/* <BackspaceOutlined button color="error" sx={{ mr: 2 }} /> */}
        </Box>
      </CardActions>{" "}
    </Card>
  );
};

export default SingleOrder;
