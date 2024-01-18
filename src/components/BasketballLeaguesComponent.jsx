// Importa React y, si es necesario, otros módulos relacionados
import { useEffect, useState } from 'react';

// Componente funcional que realiza la solicitud y muestra los resultados
const BasketballLeaguesComponent = () => {
  // Define un estado para almacenar los datos de la respuesta
  const [data, setData] = useState(null);
  // Define un estado para manejar errores
  const [error, setError] = useState(null);

  // Utiliza useEffect para realizar la solicitud cuando el componente se monta
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Realiza la solicitud GET utilizando fetch
        const response = await fetch('http://localhost:8080/api/basketball/leagues');

        // Verifica si la respuesta es exitosa (código de estado 200-299)
        if (response.ok) {
          // Convierte la respuesta a formato JSON y actualiza el estado
          const result = await response.json();
          setData(result);
        } else {
          // En caso de un código de estado no exitoso, maneja el error
          setError(`Error: ${response.status} - ${response.statusText}`);
        }
      } catch (error) {
        // Maneja cualquier error que pueda ocurrir durante la solicitud
        setError(`Error: ${error.message}`);
      }
    };

    // Llama a la función fetchData
    fetchData();
  }, []); // La dependencia vacía garantiza que la solicitud se realice solo una vez al montar el componente

  // Renderiza la información en el componente
  return (
    <div>
      {error && <p>{error}</p>}
      {data && (
        <div>
          <h2>Resultados de la solicitud:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default BasketballLeaguesComponent;
