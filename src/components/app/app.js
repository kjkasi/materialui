import React from 'react';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './app.css';

const App = () => {
  return (
    <Container fixed>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" 
                      color="inherit" 
                      aria-label="menu">
              <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            ACS
          </Typography>
          <Button color="inherit">
            Справочники
          </Button>
          <Button color="inherit">
            Документы
          </Button>
          <Button color="inherit">
            Отчеты
          </Button>
          <Button color="inherit">
            Login
          </Button>
          <Button variant="contained" color="primary">
            Hello World
          </Button> 
        </Toolbar>
      </AppBar> 
    </Container>
  );
};

export default App;
