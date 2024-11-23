
// const express = require('express');
// const dotenv = require('dotenv');

// // Load environment variables from .env file
// dotenv.config();

// const app = express();

// // Middleware
// app.use(express.json()); // Parse incoming JSON requests

// // Routes (example route for testing)
// app.get('/', (req, res) => {
//   res.send('Server is running!');
// });

// // Define the port dynamically using environment variables or fallback to 5000
// const PORT = process.env.PORT || 5000;

// // Start the server
// /**
//  * Starts the server and listens on the specified port.
//  * Logs a message indicating the server is running and the URL.
//  * If an error occurs while starting the server, logs the error message and exits the process with an error code.
//  */
// const startServer = () => {
//   try {
//     app.listen(PORT, () => {
//       console.log(`Server is running on http://localhost:${PORT}`);
//     });
//   } catch (error) {
//     console.error(`Error starting server: ${error.message}`);
//     process.exit(1); // Exit the process with an error code
//   }
// };

// // Handle uncaught exceptions and rejections
// process.on('uncaughtException', (err) => {
//   console.error(`Uncaught Exception: ${err.message}`);
//   process.exit(1); // Exit the process
// });

// process.on('unhandledRejection', (err) => {
//   console.error(`Unhandled Rejection: ${err.message}`);
//   process.exit(1); // Exit the process
// });

// // Check for port conflicts before starting
// const net = require('net');
// const server = net.createServer();

// server.once('error', (err) => {
//   if (err.code === 'EADDRINUSE') {
//     console.error(`Port ${PORT} is already in use.`);
//     process.exit(1);
//   }
// });

// server.once('listening', () => {
//   server.close(); // Close the test server
//   startServer();  // Start the actual server
// });

// server.listen(PORT);

const express = require('express');
const bodyParser = require('body-parser');
const homePageRoutes = require('./routes/homePageRoutes');
const lawyerOnboardingRoutes = require('./routes/lawyerOnboardingRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', homePageRoutes);

// Onboarding API Routes
app.use('/api/onboarding', lawyerOnboardingRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
