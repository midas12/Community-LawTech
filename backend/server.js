import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
import lawyerRegistrationRoutes from './routes/lawyerRegistrationRoutes.js';
import missionRoutes from './routes/missionRoutes.js';

// Use routes
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
