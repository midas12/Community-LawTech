import express from "express";
import { submitFeedback } from "../controllers/feedbackController.js";

const router = express.Router();

// POST route for client feedback form submission
router.post("/feedback", submitFeedback);

export default router;