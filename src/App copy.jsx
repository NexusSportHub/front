import { useState } from 'react';
import ApiButton from './components/ApiButton.jsx';
import ApiConsumer from './components/ApiConsumer';

const App = () => {
  const [selectedSport, setSelectedSport] = useState(null);

  const handleApiButtonClick = (sport) => {
    setSelectedSport(sport);
  };

  return (
    <div>
      <h1>Sports API Example</h1>

      <div>
        <h2>Select a Sport:</h2>
        <ApiButton label="Posts" onClick={() => handleApiButtonClick('Posts')} />
        <ApiButton label="Comments" onClick={() => handleApiButtonClick('Comments')} />
        <ApiButton label="Albums" onClick={() => handleApiButtonClick('Albums')} />
        {/* Add more buttons for other sports */}
      </div>

      {selectedSport && <ApiConsumer selectedSport={selectedSport} />}
    </div>
  );
};

export default App;
