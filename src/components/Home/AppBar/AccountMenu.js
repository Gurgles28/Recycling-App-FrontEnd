import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { AuthData } from "../../Routes&Navigation/AuthWrapper";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { loggedUserRole, user, logout, loggedUserPoints } = AuthData();

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 127 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem key={user.email} onClick={handleClose}>
          Email:
          {user.email}
        </MenuItem>
        <MenuItem key={loggedUserRole} onClick={handleClose}>
          Role:
          {loggedUserRole.map((child) =>
            child.props.children === "admin" ? loggedUserRole : "client"
          )}
        </MenuItem>
        <MenuItem key={loggedUserPoints} onClick={handleClose}>
          Points:
          {loggedUserPoints}
        </MenuItem>
        <Divider />

        {loggedUserRole.map((child) =>
          child.props.children === "admin" ? (
            <MenuItem>
              <Link to="http://localhost:3000/CreateRecyclingCenters">
                <Button variant="text" color="error">
                  Create Center
                </Button>
              </Link>
            </MenuItem>
          ) : null
        )}
        <MenuItem onClick={logout}>
          <Link to="http://localhost:3000/login">
            <Button variant="text" color="error">
              Log Out
            </Button>
          </Link>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
