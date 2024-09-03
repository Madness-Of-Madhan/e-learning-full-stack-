import React from "react";
import { AppBar, Toolbar, IconButton, Button, InputBase, Box } from '@mui/material';
import { Search, AccountCircle } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import { Link } from "react-router-dom";
import logo from '../img/logo2.png';

const SearchBar = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = () => {
  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Company Logo" style={{ height: 150, marginRight: 16 }} />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box component="nav" sx={{ display: 'flex', gap: 2 }}>
          <Button component={Link} to="/courses" color="inherit">Courses</Button>
          <Button component={Link} to="/materials" color="inherit">Study Materials</Button>
          <Button component={Link} to="/achievements" color="inherit">Achievements</Button>
          <Button component={Link} to="/tutors" color="inherit">Tutors</Button>
          <Button component={Link} to="/about" color="inherit">About Us</Button>
          <Button component={Link} to="/feedback" color="inherit">Feedback</Button>
        </Box>
        <SearchBar>
          <SearchIconWrapper>
            <Search />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </SearchBar>
        <Button component={Link} to="/login" color="inherit">
          Login
        </Button>
        <IconButton
          component={Link}
          to="/profile"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
