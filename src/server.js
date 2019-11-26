const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();

require('dotenv').config();

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/ip', async (req, res, next) => {
  try {
    const response = await fetch(
      `https://api.ipdata.co/?api-key=${process.env.REACT_APP_IP_DATA_API_KEY}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    next(e);
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
