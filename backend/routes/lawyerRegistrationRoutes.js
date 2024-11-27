import express from "express";
import { registerLawyer } from "../controllers/lawyerRegistrationController.js";

const router = express.Router();

// POST /api/lawyer-registration
router.post("/", registerLawyer);

export default router;
