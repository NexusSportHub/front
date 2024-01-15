const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3001; // Puedes cambiar el puerto si es necesario

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/api/:sport/leagues', async (req, res) => {
  const { sport } = req.params;
  const apiKey = import.meta.process.env.VITE_API_KEY;
  const apiHost = import.meta.process.env.VITE_API_HOST;
  const apiUrl = `https://v3.${sport}.api-sports.io/leagues`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'x-apisports-key': apiKey,
        'x-rapidapi-host': apiHost,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
