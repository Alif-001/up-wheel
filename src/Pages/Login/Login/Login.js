import {
  Alert,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import useFirebase from "../../../Hooks/useFirebase";
import Navigation from "../../Shared/Navigation/Navigation";
import MuiButton from "../../Shared/StyledComponent/MuiButton/MuiButton";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const { error, userLogin } = useFirebase();
  ///redirect to destination
  const location = useLocation();
  const history = useHistory();

  const onSubmit = (data) => {
    userLogin(data.email, data.password, location, history);
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
          <Grid item xs={4} sm={4} md={5}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Typography variant="h4" fontWeight="bold">
                Login
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
                  sx={{ my: 2, width: "75%" }}
                  variant="outlined"
                  {...register("password")}
                />
              </Box>
              <MuiButton type="submit">Login</MuiButton>
            </form>
            <Divider sx={{ m: 2 }} />
            <Typography>
              Create an Account?{" "}
              <Link style={{ color: "#0061ff" }} to="/register">
                Register
              </Link>
            </Typography>
            {error && (
              <Alert sx={{ my: 2 }} severity="error">
                Email/password wrong.
              </Alert>
            )}
          </Grid>
          <Grid item xs={4} sm={4} md={7}>
            <img
              style={{
                width: "100%",
                transform: "rotate(-15deg)",
                marginTop: "15px",
              }}
              src="https://i.ibb.co/YQ0X8Hn/clipart2140121.png"
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
