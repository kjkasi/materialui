import React from 'react';

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './app.css';

const App = () => {
    return (
      <div>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" 
                            color="inherit" 
                            aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    News
                </Typography>
                <Button color="inherit">
                    Login
                </Button>
                <Button variant="contained" color="primary">
                    Hello World
                </Button> 
            </Toolbar>
        </AppBar> 
      </div>
    );
  };

  export default App;
