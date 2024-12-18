const express = require('express');
const { registerLawyer } = require('../controllers/lawyerRegistrationController');

const router = express.Router();

router.post('/register', registerLawyer);

module.exports = router;
