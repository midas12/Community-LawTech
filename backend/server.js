import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
import funderRoute from './routes/funderRoute.js';
import assistanceRoute from './routes/assistanceRoute.js';
import trainingRoute from './routes/trainingRoute.js';
import feedbackRoute from './routes/feedbackRoute.js';
import termsRoute from './routes/termsRoute.js';
import lawyerRegistrationRoutes from './routes/lawyerRegistrationRoutes.js';
import missionRoutes from './routes/missionRoutes.js';

// Use routes
app.use('/api/funders', funderRoute);
app.use('/api/assistance', assistanceRoute);
app.use('/api/training', trainingRoute);
app.use('/api/feedback', feedbackRoute);
app.use('/api/terms', termsRoute);
app.use('/api/lawyers', lawyerRegistrationRoutes);
app.use('/api/missions', missionRoutes);

// Serve static files from the frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../frontend')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
