import React from 'react';
import {
   AppBar,
   Toolbar,
   Typography,
} from '@material-ui/core';

const NavBar = () => (
   <AppBar position="static" color="primary">
      <Toolbar>
         <Typography variant="title" color="inherit">
            Collab Cart
         </Typography>
      </Toolbar>
   </AppBar>
);

export default NavBar;