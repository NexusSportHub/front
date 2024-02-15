// App.jsx
import { useState, useEffect } from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import SportsButton from './components/SportsButton';
import Dashboard from './components/Dashboard';
import Metodos from './components/Metodos';
import Periodos from './components/Periodos';
import Suscripcion from './components/Suscribcion';


function App() {
  const [decodedUserData, setDecodedUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  // Verificar la sesión del usuario al cargar la página
  useEffect(() => {
    const accessToken = sessionStorage.getItem('undecodedJWT');

    if (accessToken) {
      const decodedJwt = jwtDecode(accessToken);
      setDecodedUserData({
        sub: decodedJwt.sub,
        name: decodedJwt.name,
        email: decodedJwt.email,
        picture: decodedJwt.picture,
      });

      setIsLoggedIn(true);
      setUserId(decodedJwt.sub);
    }
  }, []);

  const clearSessionStorage = () => {
    sessionStorage.clear();
    console.log(userId);
  };

  const handleLoginSuccess = (credentialResponse) => {
    sessionStorage.setItem('undecodedJWT', JSON.stringify(credentialResponse.credential));
    const decodedJwt = jwtDecode(credentialResponse.credential);
    setDecodedUserData({
      sub: decodedJwt.sub,
      name: decodedJwt.name,
      email: decodedJwt.email,
      picture: decodedJwt.picture,
    });

    sessionStorage.setItem('userId', decodedJwt.sub);
    sessionStorage.setItem('userName', decodedJwt.name);
    sessionStorage.setItem('userMail', decodedJwt.email);
    sessionStorage.setItem('userPicture', decodedJwt.picture);

    setIsLoggedIn(true);
    setUserId(decodedJwt.sub);
  };

  const handleLogoutClick = () => {
    googleLogout();
    setDecodedUserData(null);
    setIsLoggedIn(false);
    setUserId(null);
    clearSessionStorage();
    console.clear();
  };

  return (
    <>
      <GoogleLogin
        clientId={import.meta.env.VITE_CLIENT_ID}
        onSuccess={handleLoginSuccess}
        onError={() => {
          console.log('Login Failed');
        }}
        useOneTap
      />

      {decodedUserData ? (
        <div>
          <button onClick={handleLogoutClick}>Logout</button>
        </div>
      ) : null}

      {isLoggedIn && <Dashboard />}
      {isLoggedIn && <SportsButton />}
      {isLoggedIn && <Metodos />}
      {isLoggedIn && <Periodos />}
      {isLoggedIn && <Suscripcion />}
    </>
  );
}

export default App;
