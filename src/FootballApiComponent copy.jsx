import React, { useState, useEffect } from 'react';

const FootballApiComponent = () => {
  const [data, setData] = useState(null);
  /* const apiKey = process.env.API_KEY; */
  const apiKey = "96c92979f6fc1d1a9c52ddf84aabbdbd";
  /* const endpoint = process.env.API_FOOTBALL_ENDPOINT; */
  const endpoint = "https://v3.football.api-sports.io/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint, {
          headers: {
            'x-apisports-key': apiKey,
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
