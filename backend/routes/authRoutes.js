const express = require('express');
const { loginUser } = require('../controllers/authController');

const router = express.Router();

// POST /api/login
router.post('/login', loginUser);

module.exports = router;
