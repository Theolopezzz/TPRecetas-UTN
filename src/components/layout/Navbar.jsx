import React from 'react';
import { AppBar, Toolbar, Typography, Container, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static" sx={{ color:'rgba(201, 201, 201, 1)', backgroundColor: 'rgba(37, 37, 37, 1)' }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            variant="h4"
            component={RouterLink}
            to="/"
            color="inherit"
            sx={{ flexGrow: 1, fontWeight: 'bold' , textDecoration: 'none', textAlign: 'center', padding: '20px'}}
          >
            TodoRecetas
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;