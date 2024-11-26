// const path = require('path');
const express = require('express');
const cors = require('cors')

const app = express();

// Middleware
app.use(cors({origin: 'http://localhost:8080'}))

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile('dist/index.html');
});

app.listen(8081, () => {
  console.log('Server listening on port 8081!🚀');
});

