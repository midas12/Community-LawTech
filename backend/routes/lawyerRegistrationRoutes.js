import { Router } from 'express';
import { registerLawyer } from '../controllers/lawyerRegistrationController.js';

const router = Router();

router.post('/register', registerLawyer);

export default router;
