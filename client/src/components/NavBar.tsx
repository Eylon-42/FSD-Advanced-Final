import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import ChatIcon from "@mui/icons-material/Chat";
import ShopIcon from "@mui/icons-material/Shop";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { logout, reset } from "../auth/authSlice";
// import { clearCart } from "../redux/actions/cartActions";
// import { RootState } from "../store"; // Replace with your actual RootState path

const NavBar: React.FC = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const client = useSelector((state: RootState) => state.auth.client);
    const client = 'hi'
//   const cart = useSelector((state: RootState) => state.cart);
//   const { cartItems } = cart;

//   const onLogout = () => {
//     dispatch(logout());
//     dispatch(clearCart());
//     dispatch(reset());
//     navigate("/");
//   };

  const getCartCount = (): number => {
    // return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    return 1;
  };

  return (
    <AppBar position="static" color="primary" sx={{ width: "100%" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            color: "inherit",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            padding: "0 16px", // Add padding around the logo
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
                sx={{ padding: "8px 16px" }} // Add padding to the IconButton
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
                sx={{ padding: "8px 16px" }} // Add padding to the Button
              >
                Shop
              </Button>
              <Button
                component={Link}
                to="/chat"
                color="inherit"
                startIcon={<ChatIcon />}
                sx={{ padding: "8px 16px" }} // Add padding to the Button
              >
                Chat
              </Button>
              <Button
                // onClick={onLogout}
                color="inherit"
                startIcon={<FaSignOutAlt />}
                sx={{ padding: "8px 16px" }} // Add padding to the Button
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
                sx={{ padding: "8px 16px" }} // Add padding to the Button
              >
                Login
              </Button>
              <Button
                component={Link}
                to="/register"
                color="inherit"
                startIcon={<FaUser />}
                sx={{ padding: "8px 16px" }} // Add padding to the Button
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