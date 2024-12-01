import express from "express";
import { saveLawyerOnboarding } from "../controllers/lawyerOnboardingController.js";

const router = express.Router();

router.post("/", saveLawyerOnboarding);

export default router;
