import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import "./ButtonAppBar.css";
import { Link } from "react-router-dom";
import { AuthData } from "../../AuthWrapper";
import AccountMenu from "./AccountMenu";

export default function ButtonAppBar() {
  const logout = AuthData();

  return (
    <Box color="default" className="box" sx={{ bgcolor: `primary.light` }}>
      <AppBar color="error" position="static">
        <Toolbar>
          <Link className="link" to="http://localhost:3000/home">
            <Button variant="contained" color="error">
              Home
            </Button>
          </Link>
          <Link className="link" to="http://localhost:3000/RecyclingCenters">
            <Button variant="outlined" color="inherit">
              Recycling Centers
            </Button>
          </Link>
          <AccountMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
