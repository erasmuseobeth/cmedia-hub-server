const express = require('express');
const history = require('connect-history-api-fallback');
const APIResponse = require('./middleware/APIResponse.js');
const cors = require('cors');
const app = express();
const path = require('path');

// Use cors middleware
app.use(cors());
// format to response to json
app.use(express.json());
// Middleware to format JSON responses
app.set('json spaces', 2); // Set the number of spaces for indentation

// Use history API fallback for React Router
app.use(history());


const frontendBuild = path.join("..", "..","cmedia-hub-react-js", "build", );
// console.log('frontendClient:', frontendBuild);
console.log(path.join(__dirname,frontendBuild))

// Serve static assets from the 'build' folder
app.use(express.static(path.join(__dirname, frontendBuild)));

// Catch-all route to serve the main HTML file
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, frontendBuild, 'index.html'));
});






// Include routes
app.use('/api', require('./api/routes/apiRoutes'));
app.use('/api/media', require('./api/routes/mediaRoutes'));
// app.use('/api/users', require('./api/routes/userRoutes'));
// Middleware to handle 404 errors
app.use((req, res, next) => {
  res.json(APIResponse.error({ status:404, message:'The requested Resource URL Could not be found', details:[{
    request: {
      method: req.method,
      url: req.originalUrl,
      headers: req.headers,
      // Add any other properties you want to include
    },
    reason:'Incorrect or Invalid route',
    solution:'Check and type the correct URL',
    action:'Suggested route "NOT IMPLEMENTED for now"'
  }]}));

});



const port = process.env.PORT || 9000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Cmedia-hub Server is running on http://localhost:${port}`);
});

