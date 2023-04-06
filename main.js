const express = require('express');
const app = express();

// Define a route for the root URL path
app.get('/', (req, res) => {
  // Send "Hello world" as the response
  res.send('Hello world');
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});