// App.jsx
import { useState } from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import SportsButton from './components/SportsButton';
import Dashboard from './components/Dashboard';

function App() {
  const [decodedUserData, setDecodedUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = (credentialResponse) => {
    sessionStorage.setItem('undecodedJWT', JSON.stringify(credentialResponse.credential));
    const decodedJwt = jwtDecode(credentialResponse.credential);
    console.log(decodedJwt);
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
    // SessionStorage clear
    sessionStorage.clear();
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
      {isLoggedIn && <SportsButton /> }
    </>
  );
}

export default App;
