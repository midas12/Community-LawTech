import express from "express";
import { getTrainingPrograms } from "../controllers/trainingController.js";

const router = express.Router();

// GET route for fetching training programs
router.get("/programs", getTrainingPrograms);

export default router;