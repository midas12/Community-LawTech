// Import required modules
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Use port 5000 by default

// Middleware
app.use(cors()); // Enable CORS for all origins (configure as needed)
app.use(express.json()); // Parse incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// Routes
app.get('/', (req, res) => {
  res.send('Backend is running on port 5000!');
});

// Example API endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'This is a test route on port 5000.' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
