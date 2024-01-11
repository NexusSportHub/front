import React, { useState, useEffect } from 'react';
import dotenv from 'dotenv';

const FootballApiComponent = () => {
  const [data, setData] = useState(null);
  
  const apiUrl = "https://v3.football.api-sports.io/leagues";
  const apiKey = "96c92979f6fc1d1a9c52ddf84aabbdbd";
  const apiHost = "football-results-of-today.p.rapidapi.com";


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          headers: {
            'x-apisports-key': apiKey,
            'x-rapidapi-host': apiHost,

          },
        });

        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Football API Data</h2>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default FootballApiComponent;
