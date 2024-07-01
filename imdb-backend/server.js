const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Enable CORS with specific origin
app.use(cors({ origin: 'http://localhost:3000' }));

// Serve the data.json file
app.get('/data', (req, res) => {
  res.sendFile(path.join(__dirname, 'data.json'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});