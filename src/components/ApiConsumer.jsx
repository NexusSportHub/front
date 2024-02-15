import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ApiConsumer = ({ selectedSport }) => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    // Simulación de una llamada a una API usando un servicio de pruebas JSON
    
    const apiUrl = `https://jsonplaceholder.typicode.com/${selectedSport}`;
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setApiData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [selectedSport]);

  return (
    <div>
      {apiData ? (
        <div>
          <h2>{selectedSport.toUpperCase()} API Response:</h2>
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

ApiConsumer.propTypes = {
  selectedSport: PropTypes.string.isRequired,
};

export default ApiConsumer;
