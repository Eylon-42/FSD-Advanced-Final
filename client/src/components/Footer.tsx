import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Link as MuiLink,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 4,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              Welcome to My Supermarket, your one-stop shop for all your grocery
              needs. We provide high-quality products at competitive prices!
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li>
                <MuiLink href="/" color="inherit" underline="hover">
                  Home
                </MuiLink>
              </li>
              <li>
                <MuiLink href="/shop" color="inherit" underline="hover">
                  Shop
                </MuiLink>
              </li>
              <li>
                <MuiLink href="/cart" color="inherit" underline="hover">
                  Cart
                </MuiLink>
              </li>
              <li>
                <MuiLink href="/contact" color="inherit" underline="hover">
                  Contact Us
                </MuiLink>
              </li>
            </ul>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Typography variant="body2">
              Stay connected with us on social media for the latest updates!
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton
                aria-label="Facebook"
                href="https://facebook.com"
                target="_blank"
                sx={{ color: "white" }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                href="https://twitter.com"
                target="_blank"
                sx={{ color: "white" }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                href="https://instagram.com"
                target="_blank"
                sx={{ color: "white" }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                href="https://linkedin.com"
                target="_blank"
                sx={{ color: "white" }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} My Supermarket.FSD Colman final project by Adir & Eylon.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;