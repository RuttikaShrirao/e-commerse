import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import logo from "../asset/logo.png"

const Navbar = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
        <img src={logo}/>
        </Typography>
        {isAuthenticated ? (
          <>
            <Typography variant="h6" sx={{ marginRight: 2 }}>
              Welcome, {user.username}
            </Typography>
            <Button color="inherit" onClick={() => logoutHandler()}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" onClick={() => navigate("/")}>
              Login
            </Button>
            <Button color="inherit" onClick={() => navigate("/signup")}>
              Sign Up
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
