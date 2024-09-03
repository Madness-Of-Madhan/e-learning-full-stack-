import React from "react";
import { Container, Grid, Typography, IconButton, Link as MuiLink, Box } from '@mui/material';
import { Phone, Email, Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { styled } from '@mui/system';
import { Link } from "react-router-dom";

const FooterContainer = styled('footer')(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  color: '#fff',
}));
const FooterLink = styled(MuiLink)(({ theme }) => ({
  display: 'block',
  marginBottom: theme.spacing(1),
  color: theme.palette.text.primary,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const SocialIcon = styled(MuiLink)(({ theme }) => ({
  margin: theme.spacing(1),
  color: theme.palette.text.primary,
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">About Us</Typography>
            <Typography variant="body2">
              Our e-learning platform offers a wide range of interactive courses and resources to help you excel in your studies. We provide expert guidance, well-crafted materials, and an engaging learning experience.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Quick Links</Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              <li><FooterLink component={Link} to="/courses">Courses</FooterLink></li>
              <li><FooterLink component={Link} to="/materials">Study Materials</FooterLink></li>
              <li><FooterLink component={Link} to="/achievements">Achievements</FooterLink></li>
              <li><FooterLink component={Link} to="/tutors">Tutors</FooterLink></li>
              <li><FooterLink component={Link} to="/about">About Us</FooterLink></li>
              <li><FooterLink component={Link} to="/feedback">Feedback</FooterLink></li>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Contact Us</Typography>
            <Typography variant="body2">
              <IconButton color="inherit">
                <Phone />
              </IconButton>
              (123) 456-7890
            </Typography>
            <Typography variant="body2">
              <IconButton color="inherit">
                <Email />
              </IconButton>
              contact@elearning.com
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" spacing={2} sx={{ marginTop: '20px' }}>
          <SocialIcon href="https://facebook.com" target="_blank">
            <Facebook />
          </SocialIcon>
          <SocialIcon href="https://twitter.com" target="_blank">
            <Twitter />
          </SocialIcon>
          <SocialIcon href="https://instagram.com" target="_blank">
            <Instagram />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com" target="_blank">
            <LinkedIn />
          </SocialIcon>
        </Grid>
        <Typography variant="body2" sx={{ marginTop: '20px', textAlign: 'center' }}>
          © {new Date().getFullYear()} E-Learning Platform. All rights reserved.
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
