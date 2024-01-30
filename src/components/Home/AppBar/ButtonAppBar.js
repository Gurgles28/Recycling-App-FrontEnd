import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import "./ButtonAppBar.css";
import { Link } from "react-router-dom";
import AccountMenu from "./AccountMenu";
import HomeIcon from "@mui/icons-material/Home";

export default function ButtonAppBar() {
  return (
    <Box color="default" className="box" sx={{ bgcolor: `primary.light` }}>
      <AppBar color="error" position="static">
        <Toolbar>
          <Link className="link" to="http://localhost:3000/home">
            <HomeIcon fontSize="large" />
          </Link>
          <Link className="link" to="http://localhost:3000/RecyclingCenters">
            <Button color="inherit">Recycling Centers</Button>
          </Link>
          <Link className="link" to="http://localhost:3000/RecyclingCenters">
            <Button color="inherit">Learning Materials</Button>
          </Link>

          <AccountMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
