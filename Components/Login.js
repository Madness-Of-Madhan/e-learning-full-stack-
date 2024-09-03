import React, { useContext, useState } from 'react';
import { TextField, Button, Typography, Container, Box, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import backg from '../img/Ac/log.jpg';
import { AuthContext } from './AuthContext'; // Import useAuth

const AuthContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  background: `url(${backg}) no-repeat center center fixed`,
  backgroundSize: 'cover',
}));

const FormPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  width: '100%',
  maxWidth: 400,
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
}));

const ToggleButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));
const API_URL0 ='http://localhost:8080/user/register';

function Login (){

  const {isLoggedIn, setLoggedIn, login, setUser} = useContext(AuthContext)

  const [formData, setFormData] = useState({ email: '', password: '' });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handlePostAndLogin = async (event) => {
    event.preventDefault();
    const { email, password } = formData;
  
    // Check if both email and password are provided
    if (!email || !password) {
      toast.error('Please enter both email and password.');
      return;
    }
  
    try {
      // Post the data to the API
      await axios.post(API_URL0, {
        email: email,
        password: password,
      });
      console.log('Data posted successfully:', { email, password });
  
      // After posting, send a login request to validate the user
      const response = await axios.get(`http://localhost:8080/register/get`);
      const users = response.data;
  
      const user = users.find((user) => user.email === email && user.password === password);
  
      if (user) {
        setLoggedIn(true);
        setUser(user);
  
        // Use the correct comparison for role and navigate
        if (user.roles === 'admin') {
          navigate('/admin');
        } else {
          navigate('/');
        }
  
        toast.success(`Welcome ${user.roles === 'admin' ? 'Admin' : ''}!`);
      } else {
        toast.error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during posting or login:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <AuthContainer>
      <Toaster />
      <FormPaper elevation={3}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <Box component="form" sx={{ mt: 2 }} onSubmit={handlePostAndLogin}>
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
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <ToggleButton onClick={() => navigate('/forgot')} fullWidth variant="text">
            Forgot Password?
          </ToggleButton>
          <ToggleButton onClick={() => navigate('/register')} fullWidth variant="text">
            Don't have an account? Register
          </ToggleButton>
        </Box>
      </FormPaper>
    </AuthContainer>
  );
};

export default Login;
