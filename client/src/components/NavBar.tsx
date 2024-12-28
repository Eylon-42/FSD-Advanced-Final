import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import ChatIcon from "@mui/icons-material/Chat";
import ShopIcon from "@mui/icons-material/Shop";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavBar: React.FC = () => {
    const client = ''

  const getCartCount = (): number => {
    return 1;
  };

  return (
    <AppBar position="static" color="primary" sx={{ width: "100%" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            color: "inherit",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            padding: "0 16px",
          }}
        >
          <StoreIcon sx={{ marginRight: 1 }} />
          My Supermarket
        </Typography>

        {/* Links and Buttons */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {client ? (
            <>
              <IconButton
                component={Link}
                to="/cart"
                color="inherit"
                sx={{ padding: "8px 16px" }}
              >
                <Badge badgeContent={getCartCount()} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <Button
                component={Link}
                to="/shop"
                color="inherit"
                startIcon={<ShopIcon />}
                sx={{ padding: "8px 16px" }}
              >
                Shop
              </Button>
              <Button
                component={Link}
                to="/chat"
                color="inherit"
                startIcon={<ChatIcon />}
                sx={{ padding: "8px 16px" }}
              >
                Chat
              </Button>
              <Button
                color="inherit"
                startIcon={<FaSignOutAlt />}
                sx={{ padding: "8px 16px" }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                component={Link}
                to="/login"
                color="inherit"
                startIcon={<FaSignInAlt />}
                sx={{ padding: "8px 16px" }}
              >
                Login
              </Button>
              <Button
                component={Link}
                to="/register"
                color="inherit"
                startIcon={<FaUser />}
                sx={{ padding: "8px 16px" }}
              >
                Register
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;