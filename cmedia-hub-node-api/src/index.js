const express = require('express');
const APIResponse = require('./middleware/APIResponse.js');

const app = express();
app.use(express.json());
// Middleware to format JSON responses
app.set('json spaces', 2); // Set the number of spaces for indentation

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
  console.log(`Cmedia-hub Server is running on http://0.0.0.0:${port}`);
});

