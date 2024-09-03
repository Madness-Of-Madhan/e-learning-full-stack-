import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Paper, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HttpsIcon from '@mui/icons-material/Https';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import axios from 'axios'; // Import axios
import Reg from '../img/Ac/reg.jpg';

const AuthContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  background: `url(${Reg}) no-repeat center center fixed`,
  backgroundSize: 'cover',
}));

const FormPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  width: '100%',
  maxWidth: 400,
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
}));

const SocialMediaContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

const API_URL = 'http://localhost:8080/register/newuser'; // Define your JSON server URL

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '', // Added phoneNumber to formData
  });

  const navigate = useNavigate(); // Use useNavigate hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      await axios.post(API_URL, {
        email: formData.email,
        password: formData.password,
        confirmPassword:formData.confirmPassword,
        phoneNumber: formData.phoneNumber, // Include phoneNumber in the payload
      });
      console.log('Registering with:', formData);
      navigate('/login'); 
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <AuthContainer>
      <FormPaper elevation={3}>
        <Typography variant="h4" component="h1" gutterBottom>
          Register
        </Typography>
        <Box component="form" sx={{ mt: 2 }} onSubmit={handleRegister}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HttpsIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
            value={formData.confirmPassword}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOpenIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="phoneNumber"
            label="Phone Number"
            type="tel"
            id="phoneNumber"
            autoComplete="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocalPhoneIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <SocialMediaContainer>
            <IconButton
              color="primary"
              href="https://accounts.google.com"
              target="_blank"
            >
              <GoogleIcon />
            </IconButton>
            <IconButton
              color="primary"
              href="https://www.facebook.com"
              target="_blank"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="primary"
              href="https://github.com"
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
          </SocialMediaContainer>
        </Box>
      </FormPaper>
    </AuthContainer>
  );
};
export default Register;
