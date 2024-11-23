
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
