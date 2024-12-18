const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for specific origin
app.use(cors({
  origin: 'https://silver-space-broccoli-ppgr5r56xw6376wj-5173.app.github.dev',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Include cookies if needed
}));

// Your routes go here
app.get('/api/example', (req, res) => {
  res.json({ message: 'CORS is configured properly!' });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

// // Routes
// const lawyerOnboardingRoutes = require('./routes/lawyerOnboardingRoutes');
// const lawyerRegistrationRoutes = require('./routes/lawyerRegistrationRoutes');

// app.use('/api/onboarding', lawyerOnboardingRoutes);
// app.use('/api/registration', lawyerRegistrationRoutes);

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
