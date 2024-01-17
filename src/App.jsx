// App.jsx
import { useState } from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import UserDataTable from './components/UserDataTable';
import SportsButton from './components/SportsButton';
import StyledTableCell from './components/StyledTableCell';
import Dashboard from './components/Dashboard';

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
    // Update the state to indicate that the user has logged in
    setIsLoggedIn(true);
  };

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
          <UserDataTable userData={decodedUserData} />
          <button onClick={handleLogoutClick}>Logout</button>
        </div>
      ) : null}

      {isLoggedIn && <Dashboard />}
      {isLoggedIn && <StyledTableCell />}
      {isLoggedIn && <SportsButton /> }
    </>
  );
}

export default App;
