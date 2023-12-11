// Import the express module
const express = require('express');

// Create an express app
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Serve static files from the public folder
app.use(express.static('public'));

// Define a route for the home page
app.get('/', (req, res) => {
  // Render the index.ejs file with some data
  res.render('index', {title: 'Home', message: 'Welcome to Node.js and Express!'});
});

// Define a route for the about page
app.get('/about', (req, res) => {
  // Render the about.ejs file with some data
  res.render('about', {title: 'About', message: 'This is a tutorial on full-stack development.'});
});

// Listen for requests on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
