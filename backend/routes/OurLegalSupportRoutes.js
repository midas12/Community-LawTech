import express from 'express';
import { addSupport, getSupport } from '../controllers/ourLegalSupportController.js';

const router = express.Router();

// Validation Middleware
const validateSupport = (req, res, next) => {
  const { name, message } = req.body;
  if (!name || !message) {
    return res.status(400).json({ message: 'Name and message are required' });
  }
  next();
};

router.post('/add', validateSupport, addSupport);
router.get('/', getSupport);

export default router;
