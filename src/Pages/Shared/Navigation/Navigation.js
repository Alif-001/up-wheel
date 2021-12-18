import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import {
  Button,
  Divider,
  List,
  ListItem,
  SwipeableDrawer,
  Tooltip,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { deepOrange } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
///styled component

///make custom styles
const useStyles = makeStyles({
  root: {
    textDecoration: "none",
    color: "white",
  },
});

function Navigation() {
  const { user, logout } = useAuth();

  const { root } = useStyles();
  const [state, setState] = React.useState(false);

  ///drawer toggler
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  ///handle menus
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  ///handle logout
  const history = useHistory();
  const handleLogOut = () => {
    logout();
    history.push("/");
  };
  ///main menu
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{ mt: 7 }}
    >
      <Box sx={{ textAlign: "center", px: 4, py: 2 }}>
        {user?.imgUrl ? (
          <img src={user?.imgUrl} alt="user" />
        ) : (
          <>
            <Tooltip title={user?.displayName} placement="right">
              <IconButton>
                <AccountCircle sx={{ fontSize: 40, px: 4 }} />
              </IconButton>
            </Tooltip>
          </>
        )}
      </Box>
      <Link className={root} to="/Dashboard">
        <MenuItem sx={{ color: "black" }}>Dashboard</MenuItem>
      </Link>
      <MenuItem button onClick={handleLogOut}>
        Logout
      </MenuItem>
    </Menu>
  );

  ////mobile menu
  const list = (anchor) => (
    <Box
      sx={{
        width: anchor ? "auto" : 200,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <Link className={root} to="/home">
            <Typography variant="body2" sx={{ fontWeight: "400" }}>
              Home
            </Typography>
          </Link>
        </ListItem>
        <ListItem button>
          <Link className={root} to="/explore">
            <Typography variant="body2" sx={{ fontWeight: "400" }}>
              Explore
            </Typography>
          </Link>
        </ListItem>
        <ListItem button>
          <Link className={root} to="/about">
            <Typography variant="body2" sx={{ fontWeight: "400" }}>
              About Us
            </Typography>
          </Link>
        </ListItem>
        <ListItem button>
          <Link className={root} to="/contact">
            <Typography variant="body2" sx={{ fontWeight: "400" }}>
              Contact Us
            </Typography>
          </Link>
        </ListItem>
        <Divider sx={{ my: 1 }} />
        {!user?.email ? (
          <ListItem button>
            <Link className={root} to="/login">
              <Typography variant="body2" sx={{ fontWeight: "400" }}>
                Login
              </Typography>
            </Link>
          </ListItem>
        ) : (
          <Box>
            {user?.imgUrl ? (
              <img src={user?.imgUrl} alt="user" />
            ) : (
              <>
                <Tooltip title={user?.displayName} placement="right">
                  <IconButton>
                    <AccountCircle
                      sx={{ fontSize: 40, color: deepOrange[500], px: 4 }}
                    />
                  </IconButton>
                </Tooltip>
              </>
            )}

            <Box sx={{ px: 4, py: 1, color: "#0061ff", fontWeight: "bold" }}>
              <Typography></Typography>
            </Box>
            <ListItem button>
              <Link className={root} to="/dashboard">
                <Typography variant="body2" sx={{ fontWeight: "400" }}>
                  DashBoard
                </Typography>
              </Link>
            </ListItem>
            <ListItem onClick={handleLogOut} button>
              <Typography variant="body2" sx={{ fontWeight: "400" }}>
                Logout
              </Typography>
            </ListItem>
          </Box>
        )}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: "black", color: "white" }} position="static">
        <Toolbar>
          <Link
            to="/"
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <TwoWheelerIcon
              sx={{
                fontSize: "50px",
                fontWeight: 700,
                paddingLeft: 5,
                color: "#0061ff",
              }}
            />
          </Link>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link className={root} to="/">
              <Button color="inherit">Home</Button>
            </Link>
            <Link className={root} to="/explore">
              <Button color="inherit">Explore</Button>
            </Link>
            <Link className={root} to="/about">
              <Button color="inherit">About Us</Button>
            </Link>
            <Link className={root} to="/contact">
              <Button color="inherit">Contact Us</Button>
            </Link>
            {!user?.email ? (
              <Link className={root} to="/login">
                <Button color="inherit">Login</Button>
              </Link>
            ) : (
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                style={{ textAlign: "center" }}
              >
                <AccountCircle />
              </IconButton>
            )}
          </Box>

          {/* mobile menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              anchor={"left"}
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
              onOpen={toggleDrawer("left", true)}
            >
              {list("left")}
            </SwipeableDrawer>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
export default Navigation;
