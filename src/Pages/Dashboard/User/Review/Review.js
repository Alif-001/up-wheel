import { Rating, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";
import MuiButton from "../../../Shared/StyledComponent/MuiButton/MuiButton";

const Review = () => {
  const { user } = useAuth();
  const [rate, setRate] = React.useState(2);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.rating = rate;
    ///review post to server
    axios
      .post("https://limitless-sierra-79316.herokuapp.com/review", data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Review",
            text: "Your valuable review sent.",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes",
          });
          reset();
        }
      });
  };

  return (
    <div>
      <Typography variant="h4" fontWeight="bold">
        Give Your Review
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ mt: 5, mt: 3 }} s>
            <Typography>Tell us what you think.</Typography>
            <Rating
              name="simple-controlled"
              value={rate}
              sx={{ color: "gold" }}
              onChange={(event, newRate) => {
                setRate(newRate);
              }}
            />
          </Box>
          <TextField
            label="Name"
            required
            sx={{ mt: 2, width: "75%" }}
            variant="outlined"
            value={user?.displayName}
            {...register("name")}
          />

          {errors.quantity?.type === "min" && (
            <Typography color="error" sx={{ textAlign: "left" }}>
              Please input minimum 1
            </Typography>
          )}
          <TextField
            multiline
            required
            rows={5}
            label="Review"
            placeholder="Your review here"
            variant="outlined"
            sx={{ my: 2, width: "75%" }}
            {...register("review")}
          />
        </Box>
        <MuiButton type="submit">Send</MuiButton>
      </form>
    </div>
  );
};

export default Review;
