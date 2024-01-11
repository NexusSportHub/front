import React, { useState } from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import UserDataTable from './UserDataTable';
import FakeStoreApiComponent from './FakeStoreApiComponent';

function App() {
  const [decodedUserData, setDecodedUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = (credentialResponse) => {
    const decodedJwt = jwtDecode(credentialResponse.credential);
    setDecodedUserData({
      sub: decodedJwt.sub,
      name: decodedJwt.name,
      email: decodedJwt.email,
    });
    // Actualiza el estado para indicar que el usuario ha iniciado sesión
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    // Llama a la función de logout de Google
    googleLogout();
    // Limpia los datos de usuario después del logout
    setDecodedUserData(null);
    // Actualiza el estado para indicar que el usuario ha cerrado sesión
    setIsLoggedIn(false);
  };

  return (
    <>
      <GoogleLogin
        clientId="68034086851-tualkane6lp1218ekebuhtf2mrrht534.apps.googleusercontent.com"
        onSuccess={handleLoginSuccess}
        onError={() => {
          console.log('Login Failed');
        }}
        useOneTap
      />

      {decodedUserData ? (
        <div>
          <UserDataTable userData={decodedUserData} />
          <button onClick={handleLogoutClick}>Logout</button>
        </div>
      ) : null}

      {isLoggedIn && <FakeStoreApiComponent />}
    </>
  );
}

export default App;
