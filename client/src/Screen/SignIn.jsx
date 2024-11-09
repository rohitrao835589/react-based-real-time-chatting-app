import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Groups3SharpIcon from '@mui/icons-material/Groups3Sharp';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export default function SignIn({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('name');
    const roomId = data.get('room');

    if (onSubmit) {
      onSubmit(username, roomId);
    }
    
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <Groups3SharpIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Join Room
          </Typography>
          <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="name"
              autoFocus
              autoComplete="off"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="room"
              label="Room id"
              type="text"
              id="room"
              autoComplete='off'
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Join
            </Button>
          </Box>
        </Box>
        <center><p>Developed by Rohit Rao<br /> ig:@rohitt__rao</p></center>
      </Container>
    </ThemeProvider>
  );
}
