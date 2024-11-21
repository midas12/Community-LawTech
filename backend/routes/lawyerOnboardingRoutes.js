const express = require('express');
const multer = require('multer');
const lawyerOnboardingController = require('../controllers/lawyerOnboardingController');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() }); // Handle file uploads

router.post('/', upload.single('barMembershipProof'), lawyerOnboardingController.createOnboarding);
router.get('/', lawyerOnboardingController.getAllOnboardings);
router.get('/:id', lawyerOnboardingController.getOnboardingById);
router.put('/:id', upload.single('barMembershipProof'), lawyerOnboardingController.updateOnboarding);
router.delete('/:id', lawyerOnboardingController.deleteOnboarding);

module.exports = router;
