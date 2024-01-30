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
import VoucherDownloadButton from "./Voucher/VoucherDownloadButton";
import Badge from "@mui/material/Badge";
import { useEffect } from "react";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [count, setCount] = React.useState(0);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { loggedUserRole, logout, loggedUserPoints, loggedUser } = AuthData();

  useEffect(() => {
    if (loggedUserPoints >= 2000) {
      setCount(1);
    }
  }, [loggedUserPoints]);

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <React.Fragment>
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 127 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Badge
                color="warning"
                badgeContent={count}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Avatar sx={{ width: 32, height: 32 }}></Avatar>
              </Badge>
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
          <MenuItem key={loggedUser.last_name} onClick={handleClose}>
            Username: {loggedUser.map((child) => child.first_name)}{" "}
            {loggedUser.map((child) => child.last_name)}
          </MenuItem>
          <MenuItem key={loggedUserRole} onClick={handleClose}>
            Role: {loggedUserRole}
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
          {loggedUserPoints >= 2000 ? (
            <VoucherDownloadButton resetCount={resetCount} />
          ) : null}
          <MenuItem onClick={logout}>
            <Link to="http://localhost:3000/login">
              <Button variant="text" color="error">
                Log Out
              </Button>
            </Link>
          </MenuItem>
        </Menu>
      </React.Fragment>
    </div>
  );
}
