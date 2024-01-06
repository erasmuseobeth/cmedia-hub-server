const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verifyToken = require('./middleware/verifyToken'); // Assuming you have middleware for token verification

// Render Signup Form
router.get('/signup', (req, res) => {
  const signupForm = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>User Signup</title>
    </head>
    <body>
      <h1>User Signup</h1>
      <form action="/users/signup" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <br>
        <button type="submit">Sign Up</button>
      </form>
    </body>
    </html>
  `;
  res.send(signupForm);
});

// Handle Signup Form Submission
router.post('/signup', userController.signup);

// Render Login Form
router.get('/login', (req, res) => {
  const loginForm = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>User Login</title>
    </head>
    <body>
      <h1>User Login</h1>
      <form action="/users/login" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <br>
        <button type="submit">Log In</button>
      </form>
    </body>
    </html>
  `;
  res.send(loginForm);
});

router.post('/login', userController.login)
// User Logout
router.post('/logout', verifyToken, userController.logout);

module.exports = router;
