// const path = require('path');
const express = require('express');
const cors = require('cors')
const fetchDataFromAPI = require('./fetch.js');

const app = express();

// Middleware
app.use(cors({origin: 'http://localhost:8080'}))

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile('dist/index.html');
});

app.get('/analyze', (req, res) => {
  const { url } = req.query; // Extract the URL from query parameters
  if (!url) {
    return res.status(400).send({ error: "URL parameter is required" }); // Validation
  }
  fetchDataFromAPI(url).then(data => res.send(data))
})

app.listen(8081, () => {
  console.log('Server listening on port 8081!🚀');
});

