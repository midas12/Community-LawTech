import express from "express";
import { saveLawyerRegistration } from "../controllers/lawyerRegistrationController.js";

const router = express.Router();

router.post("/", saveLawyerRegistration);

export default router;
