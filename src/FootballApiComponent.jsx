import { useState, useEffect } from 'react';

const FootballApiComponent = () => {
  const [data, setData] = useState(null);
  
  
  const apiUrl = import.meta.env.VITE_API_ENDPOINT;
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiHost = import.meta.env.VITE_API_HOST;

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
  }, [apiUrl, apiKey, apiHost]);

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
