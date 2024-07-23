const express = require('express');
const app = express();
const port = process.config.env || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
