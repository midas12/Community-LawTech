import express from "express";
import { registerLawyer } from "../controllers/lawyerRegistrationController.js";

const router = express.Router();

// POST route for lawyer registration
router.post("/", registerLawyer);

export default router;
