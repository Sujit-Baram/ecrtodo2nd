const express = require('express');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Use json-server as a mock database
const jsonServerRouter = jsonServer.router('db.json');
app.use('/api', jsonServerRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
