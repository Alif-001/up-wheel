import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import axios from "axios";
import React, { useState } from "react";

export default function OrderStatus({ id, status }) {
  const [newStatus, setNewStatus] = useState(status);
  const handleChange = (event) => {
    const changeStatus = event?.target?.value;

    ///update status
    axios
      .put(
        `https://limitless-sierra-79316.herokuapp.com/orders?id=${id}&status=${changeStatus}`
      )
      .then((res) => {
        setNewStatus(changeStatus);
      });
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select value={newStatus} onChange={handleChange} displayEmpty>
          <MenuItem sx={{ color: "#0061ff" }} value="Pending">
            <em>Pending</em>
          </MenuItem>
          <MenuItem sx={{ color: "green" }} value="Shipped">
            Approved
          </MenuItem>
          <MenuItem sx={{ color: "red" }} value="Rejected">
            Rejected
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
