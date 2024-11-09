import React from 'react';
import {Typography ,Toolbar , Box ,AppBar} from '@mui/material';

export default function Navbar({room}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar component="nav">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ChatKar
          </Typography>
          <Typography variant="p" component="div">
          Room id : {room}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
