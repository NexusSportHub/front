// SportsButton.jsx

/* Con estos cambios, tu aplicación React debería hacer solicitudes a tu propio servidor de backend
en lugar de hacerlas directamente a la API externa. Esto solucionará el problema de CORS y permitirá
que tu servidor de backend realice las solicitudes a la API externa en nombre de tu aplicación frontend. */

import { useState } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:3001/api';

const SportsButton = () => {
  const [data, setData] = useState(null);

  const handleClick = async (sport) => {
    try {
      const response = await axios.get(`${apiUrl}/${sport}/leagues`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <div>
      <button onClick={() => handleClick('football')}>Football</button>
      <button onClick={() => handleClick('basketball')}>Basketball</button>
      <button onClick={() => handleClick('formula')}>Formula</button>
      <button onClick={() => handleClick('rugby')}>Rugby</button>

      {data && (
        <div>
          <h2>API Response:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default SportsButton;
