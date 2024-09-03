// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    common: {
      white: '#ffffff', // Ensure 'white' is defined here
    },
  },
  shape: {
    borderRadius: 4,
  },
});

export default theme;
