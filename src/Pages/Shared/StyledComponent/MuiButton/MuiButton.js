import { Button } from "@mui/material";
import { styled } from "@mui/system";

const MuiButton = styled(Button)({
  color: "white",
  background: "linear-gradient(135deg,#0061ff,#60efff)",
  padding: "10px 35px",
  fontWeight: 500,

  "&:hover": {
    background: "linear-gradient(270deg,#0061ff,#60efff)",
  },
  "&:focus": {
    background: "linear-gradient(270deg,#0061ff,#60efff)",
  },
});

export default MuiButton;
