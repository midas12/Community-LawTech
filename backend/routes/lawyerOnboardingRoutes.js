const express = require('express');
const { onboardLawyer } = require('../controllers/lawyerOnboardingController');

const router = express.Router();

router.post('/onboard', onboardLawyer);

module.exports = router;
