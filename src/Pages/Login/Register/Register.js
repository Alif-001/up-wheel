import {
  Alert,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";
import MuiButton from "../../Shared/StyledComponent/MuiButton/MuiButton";

const Register = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const { registerUser } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const onSubmit = (data) => {
    if (data.password === data.confirmPassword) {
      registerUser(data.email, data.password, data.name, location, history);
      setError(false);
      setSuccess(true);
      reset();
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <Navigation />
      <Container>
        <Grid
          container
          sx={{
            height: "80vh",
            mt: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
          spacing={3}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={7}>
            <img
              style={{ width: "100%" }}
              src="https://i.ibb.co/YQ0X8Hn/clipart2140121.png"
              alt=""
            />
          </Grid>
          <Grid item xs={4} sm={4} md={5}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Typography variant="h4" fontWeight="bold">
                Register
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <TextField
                  label="Name"
                  required
                  sx={{ mt: 2, width: "75%" }}
                  variant="outlined"
                  {...register("name")}
                />
                <TextField
                  label="Email"
                  required
                  type="email"
                  sx={{ mt: 2, width: "75%" }}
                  variant="outlined"
                  {...register("email")}
                />
                <TextField
                  required
                  label="Password"
                  type="Password"
                  sx={{ mt: 2, width: "75%" }}
                  variant="outlined"
                  {...register("password")}
                />
                <TextField
                  required
                  label="Confirm Password"
                  type="Password"
                  sx={{ my: 2, width: "75%" }}
                  variant="outlined"
                  {...register("confirmPassword")}
                />
              </Box>
              <MuiButton type="submit">Register</MuiButton>
            </form>
            <Divider sx={{ m: 2 }} />
            <Typography>
              Already have an Account?{" "}
              <Link style={{ color: "#0061ff" }} to="/login">
                Login
              </Link>
            </Typography>
            {error && (
              <Alert sx={{ my: 2 }} severity="error">
                Password not matched.
              </Alert>
            )}
            {success && (
              <Alert sx={{ my: 2 }} severity="success">
                Account successfully created.
              </Alert>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Register;
