import { useState } from 'react';
import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY;
const apiHost = import.meta.env.VITE_API_HOST;
const sports = import.meta.env.VITE_SPORT.split(',');
const webclientPort = import.meta.env.VITE_WEBCLIENT_PORT;
const apiBearerToken = sessionStorage.getItem('undecodedJWT');

const SportsButton = () => {
  const [data, setData] = useState(null);

  const handleClick = async (sport) => {
    let apiUrl =`http://localhost:${webclientPort}/api/${sport}/leagues`;
    
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          'x-apisports-key': apiKey,
          'x-rapidapi-host': apiHost,
          'Authorization': 'Bearer ' + apiBearerToken,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      {sports.map((sport) => (
        <button key={sport} onClick={() => handleClick(sport)}>
          {sport}
        </button>
      ))}

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
