// App.jsx
import { useState } from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import UserDataTable from './components/UserDataTable';
import SportsButton from './components/SportsButton';
import StyledTableCell from './components/StyledTableCell';
import Dashboard from './components/Dashboard';
import Metodos from './components/Metodos';
import Periodos from './components/Periodos';
import Suscripcion from './components/Suscribcion';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import miImagen from './assets/images/nexus-sport-hub-logo.jpg';
function App() {

  const [decodedUserData, setDecodedUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = (credentialResponse) => {
    sessionStorage.setItem('undecodedJWT', JSON.stringify(credentialResponse.credential));
    const decodedJwt = jwtDecode(credentialResponse.credential);
    setDecodedUserData({
      sub: decodedJwt.sub,
      name: decodedJwt.name,
      email: decodedJwt.email,
    });
    sessionStorage.setItem('userName', decodedJwt.name);
    // Update the state to indicate that the user has logged in
    setIsLoggedIn(true);
  };

  const defaultTheme = createTheme();
  const handleLogoutClick = () => {
    // Call the Google logout function
    googleLogout();
    // Clear user data after logout
    setDecodedUserData(null);
    // Update the state to indicate that the user has logged out
    setIsLoggedIn(false);
  };

  return (
    <>


      <ThemeProvider theme={defaultTheme} >
        <Grid container component="main" sx={{ height: '100vh', width: '100vw' }}>
          <CssBaseline />
          <Grid item xs={12} sm={12} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <GoogleLogin
                clientId={import.meta.env.VITE_CLIENT_ID}
                onSuccess={handleLoginSuccess}
                onError={() => {
                  console.log('Login Failed');
                }}
                useOneTap
              />


            </Box>
          </Grid>
          <Grid
            item
            xs={12} // Ajusta el tamaño de la primera columna para que ocupe todo el ancho
            sm={12} // Ajusta el tamaño de la primera columna para que ocupe todo el ancho
            md={7}
            sx={{
              backgroundImage: `url(${miImagen})`,
              // object_fit: cover,
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'fill',
              backgroundPosition: 'center',
              display: 'flex', // Añade esta línea
              alignItems: 'center', // Añade esta línea
            }}
          />
        </Grid>
        {decodedUserData ? (
          <div>
            <UserDataTable userData={decodedUserData} />
            <button onClick={handleLogoutClick}>Logout</button>
          </div>
        ) : null}
        {isLoggedIn && <Dashboard />}
        {isLoggedIn && <StyledTableCell />}
        {isLoggedIn && <SportsButton />}
        {isLoggedIn && <Metodos />}
        {isLoggedIn && <Periodos />}
        {isLoggedIn && <Suscripcion />}
      </ThemeProvider>


      {/* {decodedUserData ? (
        <div>
          <UserDataTable userData={decodedUserData} />
          <button onClick={handleLogoutClick}>Logout</button>
        </div>
      ) : null} */}


    </>
  );
}

export default App;
