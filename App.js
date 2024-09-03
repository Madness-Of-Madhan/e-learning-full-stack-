import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Toaster } from 'react-hot-toast';

import HomePage from './Components/Homepage';
import Login from './Components/Login';
import Aboutus from './Components/Aboutus';
import Acheivements from './Components/Acheivements';
import Materials from './Components/Material';
import Tutors from './Components/Tutors';
import Courses from './Components/Courses';
import Feedback from './Components/Feedback';
import Plan from './Components/Paln'; // Corrected path
import Profile from './Components/Profile';
import PaymentPage from './Components/Payment';
import Enroll from './Components/Enroll';
import { PaymentProvider } from './Components/PaymentContext'; // Adjust path as needed
import Register from './Components/Register';
import Admin from './Components/Admin';
import Forgot from './Components/Forgot';
import './App.css'; 
import { AuthProvider } from './Components/AuthContext';

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#000',
    },
  },
});

function App() {
  return (
    // <div><Forgot/></div>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
      <PaymentProvider>
        <Router>
          <Toaster position="top-center" />
          <div className="App-content">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/forgot" element={<Forgot/>}/>
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<Aboutus />} />
              <Route path="/achievements" element={<Acheivements />} />
              <Route path="/materials/*" element={<Materials />} />
              <Route path="/tutors" element={<Tutors />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/plan" element={<Plan />} />
              <Route path="/enroll" element={<Enroll />} />
              <Route path="/pay" element={<PaymentPage />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </div>
        </Router>
      </PaymentProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
