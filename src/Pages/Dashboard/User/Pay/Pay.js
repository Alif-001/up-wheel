import { Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router";

const Pay = () => {
  const { bikeId } = useParams();
  return (
    <div>
      <Typography variant="h4">bike id: {bikeId}</Typography>
    </div>
  );
};

export default Pay;
